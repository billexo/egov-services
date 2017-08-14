package org.egov.pgr.domain.service.validator.Attributedefinition.validator;

import java.util.HashMap;

import org.egov.pgr.domain.exception.PGRMasterException;
import org.egov.pgr.domain.model.AttributeDefinition;
import org.egov.pgr.persistence.repository.ServiceDefinitionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AttributeDefinitionCreateValidator implements AttributeDefinitionValidator {

	@Autowired
	private ServiceDefinitionRepository serviceDefinitionRepository;

	@Override
	public boolean canValidate(AttributeDefinition attributeDefinition) {
		return true;
	}



	@Override
	public void validatingLength(AttributeDefinition attributeDefinition) {
		
			
			if(!attributeDefinition.isTenantIdLengthMatch())	
			{
			HashMap<String, String> error = new HashMap<>();
			error.put("code", "AttributeDefinition Vaalidator.1");
			error.put("field", "AttributeDefinition.tenant");
			error.put("message", "tenant Id should be >0 and <=256");
			throw new PGRMasterException(error);
				
			}
			
			if(!attributeDefinition.isCodeLengthMatch())	
			{
			HashMap<String, String> error = new HashMap<>();
			error.put("code", "AttributeDefinition Vaalidator.2");
			error.put("field", "AttributeDefinition.code");
			error.put("message", "code should be >0 and <=50");
			throw new PGRMasterException(error);
				
			}
			
			if(!attributeDefinition.isDatatypedescriptionLengthMatch())	
			{
			HashMap<String, String> error = new HashMap<>();
			error.put("code", "AttributeDefinition Vaalidator.3");
			error.put("field", "AttributeDefinition.dataTypeDescription");
			error.put("message", "dataTypeDescription  should be >0 and <=200");
			throw new PGRMasterException(error);
				
			}
			
			if(!attributeDefinition.isDataTypeLengthMatch())	
			{
				HashMap<String, String> error = new HashMap<>();
				error.put("code", "AttributeDefinition Vaalidator.4");
				error.put("field", "AttributeDefinition.dataType");
				error.put("message", "dataType should be >0 and <=100");
				throw new PGRMasterException(error);
				
			}	
			
			if(!attributeDefinition.isServicecodeLengthMatch())	
			{
				HashMap<String, String> error = new HashMap<>();
				error.put("code", "AttributeDefinition Vaalidator.5");
				error.put("field", "AttributeDefinition.serviceCode");
				error.put("message", "serviceCode should be >0 and <=256");
				throw new PGRMasterException(error);
				
			}
			
			if(!attributeDefinition.isUrlLengthMatch())	
			{
				HashMap<String, String> error = new HashMap<>();
				error.put("code", "AttributeDefinition Vaalidator.6");
				error.put("field", "AttributeDefinition.url");
				error.put("message", "url should be >0 and <=300");
				throw new PGRMasterException(error);
				
			}
			
			if(!attributeDefinition.isGroupCodeLengthMatch())	
			{
				HashMap<String, String> error = new HashMap<>();
				error.put("code", "AttributeDefinition Vaalidator.7");
				error.put("field", "AttributeDefinition.groupCode");
				error.put("message", "groupCode should be >0 and <=300");
				throw new PGRMasterException(error);
				
			}
			
			if(!attributeDefinition.isDescriptionLengthMatch())	
			{
				HashMap<String, String> error = new HashMap<>();
				error.put("code", "AttributeDefinition Vaalidator.8");
				error.put("field", "AttributeDefinition.description");
				error.put("message", "description should be >0 and <=300");
				throw new PGRMasterException(error);
				
			}
			
			
	}

}