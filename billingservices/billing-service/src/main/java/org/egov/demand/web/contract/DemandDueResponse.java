package org.egov.demand.web.contract;

import java.util.ArrayList;
import java.util.List;

import org.egov.common.contract.response.ResponseInfo;
import org.egov.demand.model.ConsolidatedTax;
import org.egov.demand.model.Demand;
import org.egov.demand.model.DemandDue;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DemandDueResponse {
	
	@JsonProperty("ResponseInfo")
	private ResponseInfo responseInfo;

	@JsonProperty("DemandDue")
	private DemandDue demandDue;
	
}
