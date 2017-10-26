package org.egov.controller;
import java.util.List;

import javax.validation.Valid;

import org.egov.SearchApp;
import org.egov.common.contract.request.RequestInfo;
import org.egov.domain.model.MetaDataRequest;
import org.egov.domain.model.ReportDefinitions;
import org.egov.report.service.ReportService;
import org.egov.swagger.model.MetadataResponse;
import org.egov.swagger.model.ReportDataResponse;
import org.egov.swagger.model.ReportRequest;
import org.egov.swagger.model.ReportResponse;
import org.postgresql.util.PGobject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import net.minidev.json.JSONObject;

@RestController
public class SearchController {

	public ReportDefinitions reportDefinitions;
	
	@Autowired
	public SearchController(ReportDefinitions reportDefinitions) {
		this.reportDefinitions = reportDefinitions;
	}
	
	@Autowired
	private ReportService reportService;
	
	@Autowired
    public static ResourceLoader resourceLoader;

	@PostMapping("/search/{moduleName}/metadata/_get")
	@ResponseBody
	public ResponseEntity<?> create(@PathVariable("moduleName") String moduleName,@RequestBody @Valid final MetaDataRequest metaDataRequest,
			final BindingResult errors) {
		try{
		System.out.println("The Module Name from the URI is :"+moduleName);
		MetadataResponse mdr = reportService.getMetaData(metaDataRequest,moduleName);
		return reportService.getSuccessResponse(mdr, metaDataRequest.getRequestInfo(),metaDataRequest.getTenantId());
		} catch(NullPointerException e){
			return reportService.getFailureResponse(metaDataRequest.getRequestInfo(),metaDataRequest.getTenantId());
		}
	}
	
	@PostMapping("/search/{moduleName}/_get")
	@ResponseBody
	public ResponseEntity<?> getReportData(@PathVariable("moduleName") String moduleName,@RequestBody @Valid final ReportRequest reportRequest,
			final BindingResult errors) {
		try {
			List<String> jsonObject = reportService.getReportData(reportRequest,moduleName,reportRequest.getReportName());
			return new ResponseEntity<>(jsonObject, HttpStatus.OK);
		} catch(NullPointerException e){
			e.printStackTrace();
			return reportService.getFailureResponse(reportRequest.getRequestInfo(),reportRequest.getTenantId());
		}
	}
	

	@PostMapping("/search/_reload")
	@ResponseBody
	public ResponseEntity<?> reloadYamlData(@RequestBody @Valid final MetaDataRequest reportRequest,
			final BindingResult errors) {
		try {
        
		SearchApp.loadYaml("common");
        
		} catch(Exception e){
			return reportService.getFailureResponse(reportRequest.getRequestInfo(),reportRequest.getTenantId(),e);
		}
		return reportService.reloadResponse(reportRequest.getRequestInfo(),null);

	}

		
}