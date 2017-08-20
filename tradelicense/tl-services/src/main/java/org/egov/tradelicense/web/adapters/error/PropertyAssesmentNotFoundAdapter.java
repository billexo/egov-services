package org.egov.tradelicense.web.adapters.error;

import java.util.Collections;
import java.util.Date;
import java.util.List;

import org.egov.common.contract.response.Error;
import org.egov.common.contract.response.ErrorField;
import org.egov.common.contract.response.ErrorResponse;
import org.egov.common.contract.response.ResponseInfo;
import org.egov.tl.commons.web.contract.RequestInfo;
import org.springframework.http.HttpStatus;

public class PropertyAssesmentNotFoundAdapter {

	private static final int HTTP_CLIENT_ERROR_CODE = 400;
	private static final String PROPERTY_ASSESMENT_NOT_FOUND_EXCEPTION_MESSAGE = "tl.error.propertyAsseEmentNotFound";
	private static final String PROPERTY_ASSESMENT_NOT_FOUND_EXCEPTION_FIELD = "propertyAssesmentNo";
	private static final String PROPERTY_ASSESMENT_NOT_FOUND_EXCEPTION_FIELD_CODE = "tl.error.propertyAssesmentNo.notFound";

	public ErrorResponse getErrorResponse(RequestInfo requestInfo) {
		ResponseInfo responseInfo = new ResponseInfo();
		responseInfo.setApiId(requestInfo.getApiId());
		responseInfo.setVer(requestInfo.getVer());
		responseInfo.setMsgId(requestInfo.getMsgId());
		responseInfo.setTs(new Date().toString());
		responseInfo.setStatus(HttpStatus.BAD_REQUEST.toString());
		return new ErrorResponse(null, getError());
	}

	private Error getError() {
		final List<ErrorField> fields = Collections.singletonList(getErrorField());
		return Error.builder().code(HTTP_CLIENT_ERROR_CODE).message(PROPERTY_ASSESMENT_NOT_FOUND_EXCEPTION_MESSAGE)
				.fields(fields).description("").build();
	}

	private ErrorField getErrorField() {
		return ErrorField.builder().code(PROPERTY_ASSESMENT_NOT_FOUND_EXCEPTION_FIELD_CODE)
				.field(PROPERTY_ASSESMENT_NOT_FOUND_EXCEPTION_FIELD).message("").build();
	}
}