package org.egov.egf.instrument.web.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.egov.common.contract.request.RequestInfo;
import org.egov.common.contract.response.ResponseInfo;
import org.egov.common.domain.exception.CustomBindException;
import org.egov.common.domain.model.Pagination;
import org.egov.common.web.contract.PaginationContract;
import org.egov.egf.instrument.domain.model.Instrument;
import org.egov.egf.instrument.domain.model.InstrumentSearch;
import org.egov.egf.instrument.domain.service.InstrumentService;
import org.egov.egf.instrument.persistence.queue.repository.InstrumentQueueRepository;
import org.egov.egf.instrument.web.contract.InstrumentContract;
import org.egov.egf.instrument.web.contract.InstrumentSearchContract;
import org.egov.egf.instrument.web.requests.InstrumentRequest;
import org.egov.egf.instrument.web.requests.InstrumentResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/instruments")
public class InstrumentController {

	public static final String ACTION_CREATE = "create";
	public static final String ACTION_UPDATE = "update";
	public static final String PLACEHOLDER = "placeholder";

	private static String persistThroughKafka;

	@Autowired
	private InstrumentService instrumentService;

	@Autowired
	private InstrumentQueueRepository instrumentQueueRepository;

	@PostMapping("/_create")
	@ResponseStatus(HttpStatus.CREATED)
	public InstrumentResponse create(@RequestBody InstrumentRequest instrumentRequest, BindingResult errors) {

		ModelMapper model = new ModelMapper();
		InstrumentResponse instrumentResponse = new InstrumentResponse();
		instrumentResponse.setResponseInfo(getResponseInfo(instrumentRequest.getRequestInfo()));
		List<Instrument> instruments = new ArrayList<>();
		Instrument instrument;
		List<InstrumentContract> instrumentContracts = new ArrayList<>();
		InstrumentContract contract;

		instrumentRequest.getRequestInfo().setAction(ACTION_CREATE);

		for (InstrumentContract instrumentContract : instrumentRequest.getInstruments()) {
			instrument = new Instrument();
			model.map(instrumentContract, instrument);
			instrument.setCreatedDate(new Date());
			instrument.setCreatedBy(instrumentRequest.getRequestInfo().getUserInfo());
			instrument.setLastModifiedBy(instrumentRequest.getRequestInfo().getUserInfo());
			instruments.add(instrument);
		}

		if (persistThroughKafka != null && !persistThroughKafka.isEmpty()
				&& persistThroughKafka.equalsIgnoreCase("yes")) {

			instruments = instrumentService.fetchAndValidate(instruments, errors, ACTION_CREATE);

			for (Instrument i : instruments) {
				contract = new InstrumentContract();
				contract.setCreatedDate(new Date());
				model.map(i, contract);
				instrumentContracts.add(contract);
			}

			instrumentRequest.setInstruments(instrumentContracts);
			instrumentQueueRepository.addToQue(instrumentRequest);

		} else {

			instruments = instrumentService.save(instruments, errors);

			for (Instrument i : instruments) {
				contract = new InstrumentContract();
				model.map(i, contract);
				instrumentContracts.add(contract);
			}

			instrumentRequest.setInstruments(instrumentContracts);

			instrumentQueueRepository.addToSearchQue(instrumentRequest);

		}

		instrumentResponse.setInstruments(instrumentContracts);

		return instrumentResponse;
	}

	@PostMapping("/_update")
	@ResponseStatus(HttpStatus.CREATED)
	public InstrumentResponse update(@RequestBody InstrumentRequest instrumentRequest, BindingResult errors) {

		instrumentRequest.getRequestInfo().setAction(ACTION_UPDATE);
		ModelMapper model = new ModelMapper();
		InstrumentResponse instrumentResponse = new InstrumentResponse();
		List<Instrument> instruments = new ArrayList<>();
		instrumentResponse.setResponseInfo(getResponseInfo(instrumentRequest.getRequestInfo()));
		Instrument instrument;
		InstrumentContract contract;
		List<InstrumentContract> instrumentContracts = new ArrayList<>();

		for (InstrumentContract instrumentContract : instrumentRequest.getInstruments()) {
			instrument = new Instrument();
			model.map(instrumentContract, instrument);
			instrument.setLastModifiedBy(instrumentRequest.getRequestInfo().getUserInfo());
			instrument.setLastModifiedDate(new Date());
			instruments.add(instrument);
		}

		if (persistThroughKafka != null && !persistThroughKafka.isEmpty()
				&& persistThroughKafka.equalsIgnoreCase("yes")) {

			instruments = instrumentService.fetchAndValidate(instruments, errors, ACTION_UPDATE);

			for (Instrument i : instruments) {
				contract = new InstrumentContract();
				model.map(i, contract);
				instrumentContracts.add(contract);
			}

			instrumentRequest.setInstruments(instrumentContracts);
			instrumentQueueRepository.addToQue(instrumentRequest);

		} else {

			instruments = instrumentService.update(instruments, errors);

			for (Instrument i : instruments) {
				contract = new InstrumentContract();
				model.map(i, contract);
				instrumentContracts.add(contract);
			}

			instrumentRequest.setInstruments(instrumentContracts);

			instrumentQueueRepository.addToSearchQue(instrumentRequest);

		}
		instrumentResponse.setInstruments(instrumentContracts);

		return instrumentResponse;
	}

	@PostMapping("/_search")
	@ResponseBody
	@ResponseStatus(HttpStatus.OK)
	public InstrumentResponse search(@ModelAttribute InstrumentSearchContract instrumentSearchContract,
			RequestInfo requestInfo, BindingResult errors) {

		ModelMapper mapper = new ModelMapper();
		InstrumentSearch domain = new InstrumentSearch();
		mapper.map(instrumentSearchContract, domain);
		InstrumentContract contract;
		ModelMapper model = new ModelMapper();
		List<InstrumentContract> instrumentContracts = new ArrayList<>();
		Pagination<Instrument> instruments = instrumentService.search(domain);

		if (instruments.getPagedData() != null) {
			for (Instrument instrument : instruments.getPagedData()) {
				contract = new InstrumentContract();
				model.map(instrument, contract);
				instrumentContracts.add(contract);
			}
		}

		InstrumentResponse response = new InstrumentResponse();
		response.setInstruments(instrumentContracts);
		response.setPage(new PaginationContract(instruments));
		response.setResponseInfo(getResponseInfo(requestInfo));

		return response;

	}

	private ResponseInfo getResponseInfo(RequestInfo requestInfo) {
		return ResponseInfo.builder().apiId(requestInfo.getApiId()).ver(requestInfo.getVer())
				.resMsgId(requestInfo.getMsgId()).resMsgId(PLACEHOLDER).status(PLACEHOLDER).build();
	}

	@Value("${persist.through.kafka}")
	public void setPersistThroughKafka(String persistThroughKafka) {
		this.persistThroughKafka = persistThroughKafka;
	}

}