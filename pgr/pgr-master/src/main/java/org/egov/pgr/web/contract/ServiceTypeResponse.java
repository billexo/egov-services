package org.egov.pgr.web.contract;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.egov.common.contract.response.ResponseInfo;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ServiceTypeResponse {

    private ResponseInfo responseInfo;

    private ServiceType serviceType;
}
