var dat = {
	"wc.create": {
		"numCols": 12/3,
		"url": "/wcms/masters/serviceCharges/_create",
    "idJsonPath": "ServiceCharges[0].code",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "ServiceCharges",
		"groups": [
			{
				"label": "wc.create.groups.serviceCharge.title",
				"name": "createServiceChargeType",
				"fields": [
            {
              "name": "ServiceType",
              "jsonPath": "ServiceCharges[0].serviceType",
              "label": "wc.create.groups.serviceCharge.serviceType",
              "pattern": "",
              "type": "singleValueList",
              "url": "wcms/masters/master/_getservicetypes?|$..key|$..object",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
            },
            {
              "name": "ServiceChargeType",
              "jsonPath": "ServiceCharges[0].serviceChargeType",
              "label": "wc.create.groups.serviceCharge.serviceChargeType",
              "pattern": "",
              "type": "singleValueList",
              "url": "wcms/masters/master/_getservicechargetypes?|$..key|$..object",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
							"name": "description",
							"jsonPath": "ServiceCharges[0].description",
							"label": "wc.create.description",
							"pattern": "^[\s.]*([^\s.][\s.]*){0,250}$",
							"type": "text",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "Length is more than 250"
						},
						{
							"name": "ServiceChargeApplicable",
							"jsonPath": "ServiceCharges[0].serviceChargeApplicable",
							"label": "wc.create.serviceChargeApplicable",
							"pattern": "",
							"type": "radio",
							"isRequired": true,
							"defaultValue":true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "",
              "values": [{"label":"pt.create.groups.floorDetails.fields.yes", "value":true},{"label":"pt.create.groups.floorDetails.fields.no", "value":false}]
						},
						{
							"name": "effectiveFrom",
							"jsonPath": "ServiceCharges[0].effectiveFrom",
							"label": "pt.create.groups.propertyAddress.fields.effectiveDate",
							"pattern": "",
							"type": "datePicker",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "",
							"expression":"$ServiceCharges[0].effectiveFrom < $ServiceCharges[0].effectiveTo",
	      			"expressionMsg": "Effective From Date should be less than Effective To Date"
						},
						{
							"name": "effectiveTo",
							"jsonPath": "ServiceCharges[0].effectiveTo",
							"label": "wc.create.groups.serviceCharge.fields.effectiveDateTo",
							"pattern": "",
							"type": "datePicker",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "",
							"expression":"$ServiceCharges[0].effectiveFrom < $ServiceCharges[0].effectiveTo",
	      			"expressionMsg": "Effective From Date should be less than Effective To Date"
						},
            {
              "name": "Outside ULB",
              "jsonPath": "ServiceCharges[0].outsideUlb",
              "label": "wc.create.groups.connectionDetails.fields.outSide",
              "pattern": "",
              "type": "checkbox",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
              "defaultValue":false
            },
            {
							"name": "Active",
							"jsonPath": "ServiceCharges[0].active",
							"label": "wc.create.active",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"defaultValue":true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		]
	},
  "wc.search": {
		"numCols": 12/3,
		"url": "/wcms/masters/serviceCharges/_search",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "ServiceCharges",
		"groups": [
			{
				"label": "wc.search.groups.serviceCharge.title",
				"name": "ServiceCharges",
				"fields": [
          {
            "name": "ServiceType",
            "jsonPath": "serviceType",
            "label": "wc.create.groups.serviceCharge.serviceType",
            "pattern": "",
            "type": "singleValueList",
            "url": "wcms/masters/master/_getservicetypes?|$..key|$..object",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
          },
          {
            "name": "ServiceChargeType",
            "jsonPath": "serviceChargeType",
            "label": "wc.create.groups.serviceCharge.serviceChargeType",
            "pattern": "",
            "type": "singleValueList",
            "url": "wcms/masters/master/_getservicechargetypes?|$..key|$..object",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Active",
            "jsonPath": "active",
            "label": "wc.create.active",
            "pattern": "",
            "type": "checkbox",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          }
				]
			}
		],
		"result": {
			"header": [{label: "wc.create.groups.serviceCharge.serviceType"},{label: "wc.create.groups.serviceCharge.serviceChargeType"}, {label: "wc.create.active"}],
			"values": ["serviceType","serviceChargeType","active"],
			"resultPath": "ServiceCharges",
			"rowClickUrlUpdate": "/non-framework/wc/masters/serviceCharge/update/{id}",
			"rowClickUrlView": "/view/wc/serviceCharge/{id}"
			}
	},

  "wc.view": {
		"numCols": 12/3,
		"url": "/wcms/masters/serviceCharges/_search?ids={id}",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "ServiceCharges",
    "groups": [
			{
				"label": "wc.view.groups.serviceCharge.title",
				"name": "createServiceChargeType",
				"fields": [
            {
              "name": "ServiceType",
              "jsonPath": "ServiceCharges[0].serviceType",
              "label": "wc.create.groups.serviceCharge.serviceType",
              "pattern": "",
              "type": "singleValueList",
              "url": "wcms/masters/master/_getservicetypes?|$..key|$..object",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
            },
            {
              "name": "ServiceChargeType",
              "jsonPath": "ServiceCharges[0].serviceChargeType",
              "label": "wc.create.groups.serviceCharge.serviceChargeType",
              "pattern": "",
              "type": "singleValueList",
              "url": "wcms/masters/master/_getservicechargetypes?|$..key|$..object",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
							"name": "description",
							"jsonPath": "ServiceCharges[0].description",
							"label": "wc.create.description",
							"pattern": "^[\s.]*([^\s.][\s.]*){0,250}$",
							"type": "text",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "Length is more than 250"
						},
						{
							"name": "ServiceChargeApplicable",
							"jsonPath": "ServiceCharges[0].serviceChargeApplicable",
							"label": "wc.create.serviceChargeApplicable",
							"pattern": "",
							"type": "radio",
							"isRequired": true,
							"defaultValue":true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "",
              "values": [{"label":"pt.create.groups.floorDetails.fields.yes", "value":true},{"label":"pt.create.groups.floorDetails.fields.no", "value":false}]
						},
						{
							"name": "effectiveFrom",
							"jsonPath": "ServiceCharges[0].effectiveFrom",
							"label": "pt.create.groups.propertyAddress.fields.effectiveDate",
							"pattern": "",
							"type": "datePicker",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "",
							"expression":"$ServiceCharges[0].effectiveFrom < $ServiceCharges[0].effectiveTo",
	      			"expressionMsg": "Effective From Date should be less than Effective To Date"

						},
						{
							"name": "effectiveTo",
							"jsonPath": "ServiceCharges[0].effectiveTo",
							"label": "wc.create.groups.serviceCharge.fields.effectiveDateTo",
							"pattern": "",
							"type": "datePicker",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "",
							"expression":"$ServiceCharges[0].effectiveFrom < $ServiceCharges[0].effectiveTo",
	      			"expressionMsg": "Effective From Date should be less than Effective To Date"
						},
            {
              "name": "Outside ULB",
              "jsonPath": "ServiceCharges[0].outsideUlb",
              "label": "wc.create.groups.connectionDetails.fields.outSide",
              "pattern": "",
              "type": "checkbox",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
              "defaultValue":false
            },
            {
							"name": "Active",
							"jsonPath": "ServiceCharges[0].active",
							"label": "wc.create.active",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"defaultValue":true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			},
      {
				"label": "wc.serviceCharge.table.title",
				"name": "AccountDetails",
				"multiple":true,
        "jsonPath":"ServiceCharges[0].chargeDetails",
				"fields": [
          {
              "name": "UomFrom",
              "jsonPath": "ServiceCharges[0].chargeDetails[0].uomFrom",
              "label": "tl.create.groups.feeMatrixDetails.uomFrom",
              "pattern": "",
              "type": "text",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
              "url":"",
            },
            {
                "name": "UomTo",
                "jsonPath": "ServiceCharges[0].chargeDetails[0].uomTo",
                "label": "tl.create.groups.feeMatrixDetails.uomTo",
                "pattern": "",
                "type": "text",
                "isRequired": true,
                "isDisabled": false,
                "requiredErrMsg": "",
                "patternErrMsg": "",
                "url":"",
              },
						{
							"name": "Amount",
							"jsonPath": "ServiceCharges[0].chargeDetails[0].amountOrpercentage",
							"label": "wc.create.groups.fields.amount",
							"pattern": "",
							"type": "number",
							"isRequired": true,
							"isDisabled": false,
							"url": "",
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		]
	},

  "wc.update": {
    "numCols": 12/3,
    "searchUrl": "/wcms/masters/serviceCharges/_search?ids={id}",
    "url":"/wcms/masters/serviceCharges/_update",
    "tenantIdRequired": true,
    "useTimestamp": true,
    "objectName": "ServiceCharges",
    "groups": [
			{
				"label": "wc.update.groups.serviceCharge.title",
				"name": "createServiceChargeType",
				"fields": [
            {
              "name": "ServiceType",
              "jsonPath": "ServiceCharges[0].serviceType",
              "label": "wc.create.groups.serviceCharge.serviceType",
              "pattern": "",
              "type": "singleValueList",
              "url": "wcms/masters/master/_getservicetypes?|$..key|$..object",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
            },
            {
              "name": "ServiceChargeType",
              "jsonPath": "ServiceCharges[0].serviceChargeType",
              "label": "wc.create.groups.serviceCharge.serviceChargeType",
              "pattern": "",
              "type": "singleValueList",
              "url": "wcms/masters/master/_getservicechargetypes?|$..key|$..object",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
							"name": "description",
							"jsonPath": "ServiceCharges[0].description",
							"label": "wc.create.description",
							"pattern": "^[\s.]*([^\s.][\s.]*){0,250}$",
							"type": "text",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "Length is more than 250"
						},
						{
							"name": "ServiceChargeApplicable",
							"jsonPath": "ServiceCharges[0].serviceChargeApplicable",
							"label": "wc.create.serviceChargeApplicable",
							"pattern": "",
							"type": "radio",
							"isRequired": true,
							"defaultValue":true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "",
              "values": [{"label":"pt.create.groups.floorDetails.fields.yes", "value":true},{"label":"pt.create.groups.floorDetails.fields.no", "value":false}]
						},
						{
							"name": "effectiveFrom",
							"jsonPath": "ServiceCharges[0].effectiveFrom",
							"label": "pt.create.groups.propertyAddress.fields.effectiveDate",
							"pattern": "",
							"type": "datePicker",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "",
							"expression":"$ServiceCharges[0].effectiveFrom < $ServiceCharges[0].effectiveTo",
	      			"expressionMsg": "Effective From Date should be less than Effective To Date"
						},
						{
							"name": "effectiveTo",
							"jsonPath": "ServiceCharges[0].effectiveTo",
							"label": "wc.create.groups.serviceCharge.fields.effectiveDateTo",
							"pattern": "",
							"type": "datePicker",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "",
							"expression":"$ServiceCharges[0].effectiveFrom < $ServiceCharges[0].effectiveTo",
	      			"expressionMsg": "Effective From Date should be less than Effective To Date"
						},
            {
              "name": "Outside ULB",
              "jsonPath": "ServiceCharges[0].outsideUlb",
              "label": "wc.create.groups.connectionDetails.fields.outSide",
              "pattern": "",
              "type": "checkbox",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
              "defaultValue":false
            },
            {
							"name": "Active",
							"jsonPath": "ServiceCharges[0].active",
							"label": "wc.create.active",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"defaultValue":true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		]
  }
}
  export default dat;
