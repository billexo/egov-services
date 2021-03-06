var dat = {
	"wc.create": {
		"numCols": 12/3,
		"url": "/wcms/masters/documenttypes-applicationtypes/_create",
		"tenantIdRequired": true,
		"idJsonPath": "DocumentTypeApplicationTypes[0].code",
		"useTimestamp": true,
		"objectName": "DocumentTypeApplicationTypes",
		"groups": [
			{
				"label": "wc.create.DocumentTypeApplicationType.title",
				"name": "createdocumentTypeApplicationType",
				"fields": [
					{
						"name": "applicationType",
						"jsonPath": "DocumentTypeApplicationTypes[0].applicationType",
						"label": "wc.create.applicationtype",
						"pattern": "",
						"type": "singleValueList",
						"url": "/wcms/masters/master/_getapplicationtypes?|$..key|$..object",
						"isRequired": true,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
					{
						"name": "documenttype",
						"jsonPath": "DocumentTypeApplicationTypes[0].documentType",
						"label": "wc.create.documenttype",
						"pattern": "",
						"type": "singleValueList",
						"url": "/wcms/masters/documenttypes/_search?&active=true|$..name|$..name",
						"isRequired": true,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
						{
							"name": "Active",
							"jsonPath": "DocumentTypeApplicationTypes[0].active",
							"label": "wc.create.active",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"isDisabled": false,
							"defaultValue": true,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "mandatory",
							"jsonPath": "DocumentTypeApplicationTypes[0].mandatory",
							"label": "wc.create.mandatory",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"isDisabled": false,
							"defaultValue": true,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		]
	},
	"wc.search": {
		"numCols": 12/3,
		"url": "/wcms/masters/documenttypes-applicationtypes/_search",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "DocumentTypeApplicationTypes",
		"groups": [
			{
				"label": "wc.search.DocumentTypeApplicationType.title",
				"name": "searchDocumentTypeApplicationType",
				"fields": [
					{
						"name": "applicationType",
						"jsonPath": "applicationType",
						"label": "wc.create.applicationType",
						"pattern": "",
						"type": "singleValueList",
						"url": "/wcms/masters/master/_getapplicationtypes?|$..key|$..object",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
					{
						"name": "documenttype",
						"jsonPath": "documentType",
						"label": "wc.create.documenttype",
						"pattern": "",
						"type": "singleValueList",
						"url": "/wcms/masters/documenttypes/_search?&active=true|$..name|$..name",
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
						},
						{
							"name": "Mandatory",
							"jsonPath": "mandatory",
							"label": "wc.create.mandatory",
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
			"header": [{label: "wc.create.applicationType"},{label: "wc.create.documentType"}, {label: "wc.create.active"},{label: "wc.create.mandatory"}],
			"values": ["applicationType","documentType", "active","mandatory"],
			"resultPath": "DocumentTypeApplicationTypes",
			"rowClickUrlUpdate": "/update/wc/documentTypeApplicationType/{id}",
			"rowClickUrlView": "/view/wc/documentTypeApplicationType/{id}"
			}
	},
	"wc.view": {
		"numCols": 12/3,
		"url": "/wcms/masters/documenttypes-applicationtypes/_search?ids={id}",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "DocumentTypeApplicationTypes",
		"groups": [
			{
				"label": "wc.view.DocumentTypeApplicationTypes.title",
				"name": "viewDocumentTypeApplicationTypes",
				"fields": [
						{
							"name": "name",
							"jsonPath": "DocumentTypeApplicationTypes[0].applicationType",
							"label": "wc.create.applicationType",
							"pattern": "",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "documentType",
							"jsonPath": "DocumentTypeApplicationTypes[0].documentType",
							"label": "wc.create.documentType",
							"pattern": "",
							"type": "text",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "Active",
							"jsonPath": "DocumentTypeApplicationTypes[0].active",
							"label": "wc.create.active",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "Mandatory",
							"jsonPath": "DocumentTypeApplicationTypes[0].mandatory",
							"label": "wc.create.mandatory",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		]
	},
	"wc.update": {
		"numCols": 12/3,
		"searchUrl": "/wcms/masters/documenttypes-applicationtypes/_search?ids={id}",
		"url":"/wcms/masters/documenttypes-applicationtypes/_update",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "DocumentTypeApplicationTypes",
		"groups": [
			{
				"label": "wc.update.DocumentTypeApplicationTypes.title",
				"name": "updateDocumentTypeApplicationTypes",
				"fields": [
					{
						"name": "applicationType",
						"jsonPath": "DocumentTypeApplicationTypes[0].applicationType",
						"label": "wc.create.applicationtype",
						"pattern": "",
						"type": "singleValueList",
						"url": "/wcms/masters/master/_getapplicationtypes?|$..key|$..object",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
					{
						"name": "documenttype",
						"jsonPath": "DocumentTypeApplicationTypes[0].documentType",
						"label": "wc.create.documenttype",
						"pattern": "",
						"type": "singleValueList",
						"url": "/wcms/masters/documenttypes/_search?|$..name|$..name",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
						{
							"name": "Active",
							"jsonPath": "DocumentTypeApplicationTypes[0].active",
							"label": "Active",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"isDisabled": false,
							"default": true,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "mandatory",
							"jsonPath": "DocumentTypeApplicationTypes[0].mandatory",
							"label": "Mandatory",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"isDisabled": false,
							"defaultValue":true,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		]
	}
}

export default dat;
