package org.egov.pa.service.impl;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.egov.pa.model.AuditDetails;
import org.egov.pa.model.KPI;
import org.egov.pa.model.KpiValue;
import org.egov.pa.model.KpiValueDetail;
import org.egov.pa.model.ULBKpiValueList;
import org.egov.pa.repository.KpiMasterRepository;
import org.egov.pa.repository.KpiValueRepository;
import org.egov.pa.service.KpiValueService;
import org.egov.pa.web.contract.KPIValueRequest;
import org.egov.pa.web.contract.KPIValueSearchRequest;
import org.egov.pa.web.contract.ValueResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Component("kpiValueServ")
@Slf4j
public class KpiValueServiceImpl implements KpiValueService {

	public static Map<String, KPI> kpiMap = new HashMap<>();
	public static Map<String, KPI> kpiTargetMap = new HashMap<>();

	@Autowired
	@Qualifier("kpiValueRepo")
	private KpiValueRepository kpiValueRepository;

	@Autowired
	@Qualifier("kpiMasterRepo")
	private KpiMasterRepository kpiMasterRepository;

	@Override
	public KPIValueRequest createKpiValue(KPIValueRequest kpiValueRequest) {
		kpiValueDetailListUpdate(kpiValueRequest);
		kpiValueRepository.persistKpiValueDetail(kpiValueRequest);
		return kpiValueRequest;
	}

	private void kpiValueDetailListUpdate(KPIValueRequest kpiValueRequest) {
		List<ValueResponse> valueResponseList = kpiValueRequest.getKpiValues();
		for (ValueResponse vr : valueResponseList) {
			for (KpiValueDetail detail : vr.getKpiValue().getValueList()) {
				detail.setValueid(vr.getKpiValue().getId());
			}
		}
	}

	@Override
	public KPIValueRequest updateKpiValue(KPIValueRequest kpiValueRequest) {
		log.info("KPI Value Update Request Received at Service Level : " + kpiValueRequest);
		setCreatedDateAndUpdatedDate(kpiValueRequest);
		kpiValueRepository.updateKpiValue(kpiValueRequest);
		return kpiValueRequest;
	}

	@Override
	public List<ULBKpiValueList> compareSearchKpiValue(KPIValueSearchRequest kpiValueSearchReq) {
		List<ULBKpiValueList> list = kpiValueRepository.compareSearchKpiValue(kpiValueSearchReq);
		/*List<String> kpiCodeList = new ArrayList<>();
		for (int i = 0; i < kpiValueList.size(); i++) {
			for (int j = 0; j < kpiValueList.get(i).getValueList().size(); j++) {
				kpiValueList.get(i).getValueList().get(j).setValueid(kpiValueList.get(i).getId());
			}
			kpiCodeList.add(kpiValueList.get(i).getKpiCode());
		}
		List<KPI> kpiList = new ArrayList<>();
		if (kpiCodeList.size() > 0) {
			kpiList = kpiMasterRepository.getKpiByCode(kpiCodeList);
		}
		return sortKpiAndValues(kpiValueSearchReq, kpiValueList, kpiList);*/
		return list;
	}

	@Override
	public List<ValueResponse> searchKpiValue(KPIValueSearchRequest kpiValueSearchReq) {
		List<KpiValue> kpiValueList = kpiValueRepository.searchKpiValue(kpiValueSearchReq);
		List<String> kpiCodeList = new ArrayList<>();
		for (int i = 0; i < kpiValueList.size(); i++) {
			for (int j = 0; j < kpiValueList.get(i).getValueList().size(); j++) {
				kpiValueList.get(i).getValueList().get(j).setValueid(kpiValueList.get(i).getId());
			}
			kpiCodeList.add(kpiValueList.get(i).getKpiCode());
		}
		List<KPI> kpiList = new ArrayList<>();
		if (kpiCodeList.size() > 0) {
			kpiList = kpiMasterRepository.getKpiByCode(kpiCodeList);
		}
		return sortKpiAndValues(kpiValueSearchReq, kpiValueList, kpiList);
	}

	private List<ValueResponse> sortKpiAndValues(KPIValueSearchRequest kpiValueSearchReq, List<KpiValue> kpiValueList,
			List<KPI> kpiList) {
		List<ValueResponse> list = new ArrayList<>();
		List<ValueResponse> deptList = new ArrayList<>();
		for (int i = 0; i < kpiValueList.size(); i++) {
			for (int j = 0; j < kpiList.size(); j++) {
				if (kpiValueList.get(i).getKpiCode().equals(kpiList.get(j).getCode())) {
					if (null != kpiValueSearchReq.getDepartmentId()
							&& kpiList.get(j).getDepartmentId() == kpiValueSearchReq.getDepartmentId()) {
						deptList.add(new ValueResponse(kpiValueList.get(i).getTenantId(), kpiList.get(j),
								kpiValueList.get(i), kpiValueSearchReq.getGraphType()));
					} else {
						list.add(new ValueResponse(kpiValueList.get(i).getTenantId(), kpiList.get(j),
								kpiValueList.get(i), kpiValueSearchReq.getGraphType()));
					}
				}
			}
		}
		if (null != kpiValueSearchReq.getDepartmentId()) { 
			log.info("After sorting KPI and Value List : " + deptList.toString());
			return deptList; 
		}
		log.info("After sorting KPI and Value List : " + list.toString());
		return list;
	}

	private void setCreatedDateAndUpdatedDate(KPIValueRequest kpiValueRequest) {
		for (ValueResponse vr : kpiValueRequest.getKpiValues()) {
			KpiValue value = vr.getKpiValue();
			AuditDetails audit = new AuditDetails();
			audit.setCreatedTime(new java.util.Date().getTime());
			audit.setCreatedBy(kpiValueRequest.getRequestInfo().getUserInfo().getId());
			audit.setLastModifiedTime(new java.util.Date().getTime());
			audit.setLastModifiedBy(kpiValueRequest.getRequestInfo().getUserInfo().getId());
			value.setAuditDetails(audit);
		}
	}

	public boolean checkKpiExists(String kpiCode) {
		if (kpiMap.containsKey(kpiCode)) {
			return true;
		}
		List<KPI> kpiList = kpiValueRepository.checkKpiExists(kpiCode);
		if (null != kpiList && kpiList.size() > 0) {
			for (KPI kpi : kpiList) {
				kpiMap.put(kpi.getCode(), kpi);
			}
			return true;
		} else {
			return false;
		}
	}

	public int numberOfDocsRequired(String kpiCode) {
		return kpiValueRepository.numberOfDocsRequired(kpiCode);
	}

	public boolean checkKpiTargetExists(String kpiCode) {
		String finYear = getFiscalYear();
		if (kpiTargetMap.containsKey(kpiCode)) {
			return true;
		}
		List<KPI> kpiList = kpiValueRepository.fetchTargetForKpi(kpiCode, finYear);
		if (null != kpiList && kpiList.size() > 0) {
			for (KPI kpi : kpiList)
				kpiTargetMap.put(kpi.getCode(), kpi);
			return true;
		} else {
			return false;
		}
	}

	public boolean checkKpiValueExistsForTenant(String kpiCode, String tenantId) {
		Long resultValue = kpiValueRepository.checkKpiValueExistsForTenant(kpiCode, tenantId);
		if (null != resultValue && resultValue > 0)
			return true;
		else
			return false;
	}

	public String searchPossibilityCheck(String tenantCount, String kpiCount, String finYearCount) {
		return kpiValueRepository.searchPossibilityCheck(tenantCount, kpiCount, finYearCount);
	}

	private String getFiscalYear() {
		Calendar calendarDate;
		final int FIRST_FISCAL_MONTH = Calendar.MARCH;
		calendarDate = Calendar.getInstance();
		final int month = calendarDate.get(Calendar.MONTH);
		final int year = calendarDate.get(Calendar.YEAR);
		final int value = month >= FIRST_FISCAL_MONTH ? year : year - 1;
		final String finYear = Integer.toString(value) + "-" + Integer.toString(value + 1).substring(2, 4);
		return finYear;
	}
}
