package org.egov.swm.domain.service;

import java.util.ArrayList;
import java.util.List;

import org.egov.common.contract.request.RequestInfo;
import org.egov.swm.constants.Constants;
import org.egov.swm.domain.model.Shift;
import org.egov.swm.web.repository.MdmsRepository;
import org.egov.tracer.model.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import net.minidev.json.JSONArray;

@Service
@Transactional(readOnly = true)
public class ShiftService {

    @Autowired
    private MdmsRepository mdmsRepository;

    public Shift getShift(final String tenantId, final String code, final RequestInfo requestInfo) {

        JSONArray responseJSONArray;
        final ObjectMapper mapper = new ObjectMapper();

        responseJSONArray = mdmsRepository.getByCriteria(tenantId, Constants.MODULE_CODE, Constants.SHIFT_MASTER_NAME,
                "code", code, requestInfo);

        if (responseJSONArray != null && responseJSONArray.size() > 0)
            return mapper.convertValue(responseJSONArray.get(0), Shift.class);
        else
            throw new CustomException("Shift", "Given Shift is invalid: " + code);

    }

    public List<Shift> getAll(final String tenantId, final RequestInfo requestInfo) {

        List<Shift> shifts = new ArrayList<>();

        JSONArray responseJSONArray;
        final ObjectMapper mapper = new ObjectMapper();

        responseJSONArray = mdmsRepository.getByCriteria(tenantId, Constants.MODULE_CODE,
                Constants.SHIFT_MASTER_NAME, null, null, requestInfo);

        if (responseJSONArray != null && responseJSONArray.size() > 0)
            for (Object obj : responseJSONArray)
                shifts.add(mapper.convertValue(obj, Shift.class));

        return shifts;

    }

}