var dat = {
	"collection.create": {
		"numCols": 12/3,
		"url":  "/egov-common-masters/businessDetails/_create",
		"tenantIdRequired": true,
		// "idJsonPath": "BusinessDetails[0].id",
		"useTimestamp": true,
		"objectName": "BusinessDetails",
		"groups": [
			{
				"label": "wc.create.businessDetailsType.title",
				"name": "businessDetailsType",
				"fields": [
          {
            "name": "CategoryType",
            "jsonPath": "BusinessDetails[0].businessCategory",
            "label": "wc.create.groups.fields.businessCategory",
            "pattern": "",
            "type": "singleValueList",
            "url": "/egov-common-masters/businessCategory/_search?&active=true|$..id|$..name",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
            {
							"name": "Code",
							"jsonPath": "BusinessDetails[0].code",
							"label": "wc.create.group.fields.businessCode",
							"pattern": "^[\s.]*([^\s.][\s.]*){0,100}$",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "Length minimum is 3 and maximum is 100"
						},
            {
							"name": "Name",
							"jsonPath": "BusinessDetails[0].name",
							"label": "wc.create.group.fields.businessName",
							"pattern": "^[\s.]*([^\s.][\s.]*){0,100}$",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "Length minimum is 3 and maximum is 100"
						},
            {
              "name": "Classification",
              "jsonPath": "BusinessDetails[0].businessType",
              "label": "wc.create.groups.fields.classification",
              "pattern": "",
              "type": "singleValueList",
              "url": "/egov-common-masters/businessCategory/_search?&active=true|$..name|$..name",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
						{
							"name": "Create voucher on receipt creation",
							"jsonPath": "BusinessDetails[0].voucherCreation",
							"label": "wc.create.group.fields.voucherOnReceiptCreation",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"defaultValue":true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
            {
							"name": "Active",
							"jsonPath": "BusinessDetails[0].active",
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
				"label": "wc.Create.financialDetails.title",
				"name": "Financial Details",
				"fields": [
            {
              "name": "Fund",
              "jsonPath": "BusinessDetails[0].fund",
              "label": "wc.create.groups.fields.Fund",
              "pattern": "",
              "type": "singleValueList",
              "url": "/egf-masters/funds/_search?|$..id|$..name",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Funtion",
              "jsonPath": "BusinessDetails[0].funtion",
              "label": "wc.create.groups.fields.Funtion",
              "pattern": "",
              "type": "singleValueList",
              "url": "/egf-masters/functions/_search?|$..id|$..name",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            }
				]
			},
      {
				"label": "wc.Create.accountDetails.title",
				"name": "AccountDetails",
				"multiple":true,
        "jsonPath":"BusinessDetails[0].accountDetails",
				"fields": [
          {
              "name": "AccountHead",
              "jsonPath": "BusinessDetails[0].accountDetails[0].chartOfAccounts",
              "label": "wc.create.group.field.accountHead",
              "pattern": "",
              "type": "autoCompelete",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
              "url":"egf-masters/chartofaccounts/_search?|$..id|$..name",
							"autoCompleteDependancy": {
								"autoCompleteUrl": "/egf-masters/chartofaccounts/_search?id={value}",
								"autoFillFields": {
									"BusinessDetails[0].accountDetails[0].chartOfAccounts": "chartOfAccounts[0].glcode"
								 }
							 }
            },
						{
							"name": "AccountCode",
              "jsonPath": "BusinessDetails[0].accountDetails[0].chartOfAccounts",
							"label": "wc.create.groups.fields.accountCode",
							"pattern": "",
							"type": "number",
							"isRequired": true,
							"isDisabled": true,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "Amount",
							"jsonPath": "BusinessDetails[0].accountDetails[0].amount",
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
	"collection.search": {
		"numCols": 12/3,
		"url": "/egov-common-masters/businessDetails/_search",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "BusinessDetails",
		"groups": [
			{
				"label": "wc.search.businessDetailsType.title",
				"name": "businessDetailsType",
				"fields": [
					{
						"name": "Code",
						"jsonPath": "businessDetailsCodes",
						"label": "wc.create.group.fields.businessCode",
						"pattern": "^[\s.]*([^\s.][\s.]*){0,100}$",
						"type": "text",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": "Length minimum is 3 and maximum is 100"
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
			"header": [{label: "wc.create.group.fields.businessName"}, {label: "wc.create.group.fields.businessCode"}, {label: "wc.search.result.active"}],
			"values": ["name", "code", "active"],
			"resultPath": "BusinessDetails",
			"rowClickUrlUpdate": "/update/collection/businessDetails/{id}",
			"rowClickUrlView": "/view/collection/businessDetails/{id}"
			}
	},
	"collection.view": {
		"numCols": 12/3,
		"url":  "/egov-common-masters/businessDetails/_search?id={id}",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "BusinessDetails",
		"groups": [
			{
				"label": "wc.view.businessDetailsType.title",
				"name": "businessDetailsType",
				"fields": [
          {
            "name": "CategoryType",
            "jsonPath": "BusinessDetails[0].businessCategory",
            "label": "wc.create.groups.fields.businessType",
            "pattern": "",
            "type": "singleValueList",
            "url": "/egov-common-masters/businessCategory/_search?&active=true|$..id|$..name",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
          },
            {
							"name": "Code",
							"jsonPath": "BusinessDetails[0].code",
							"label": "wc.create.group.fields.businessCode",
							"pattern": "^[\s.]*([^\s.][\s.]*){0,100}$",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "Length minimum is 3 and maximum is 100"
						},
            {
							"name": "Name",
							"jsonPath": "BusinessDetails[0].name",
							"label": "wc.create.group.fields.businessName",
							"pattern": "^[\s.]*([^\s.][\s.]*){0,100}$",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "Length minimum is 3 and maximum is 100"
						},
            {
              "name": "Classification",
              "jsonPath": "BusinessDetails[0].businessType",
              "label": "wc.create.groups.fields.classification",
              "pattern": "",
              "type": "singleValueList",
              "url": "/egov-common-masters/businessCategory/_search?&active=true|$..id|$..name",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
						{
							"name": "Create voucher on receipt creation",
							"jsonPath": "BusinessDetails[0].voucherCreation",
							"label": "wc.create.group.fields.voucherOnReceiptCreation",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"defaultValue":true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
            {
							"name": "Active",
							"jsonPath": "BusinessDetails[0].active",
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
				"label": "wc.Create.financialDetails.title",
				"name": "Financial Details",
				"fields": [
            {
              "name": "Fund",
              "jsonPath": "BusinessDetails[0].fund",
              "label": "wc.create.groups.fields.Fund",
              "pattern": "",
              "type": "singleValueList",
              "url": "/egf-masters/funds/_search?|$..id|$..name",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Funtion",
              "jsonPath": "BusinessDetails[0].function",
              "label": "wc.create.groups.fields.Function",
              "pattern": "",
              "type": "singleValueList",
              "url": "/egf-masters/functions/_search?|$..id|$..name",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
              "convertToString":true
            }
				]
			},
      {
				"label": "wc.Create.accountDetails.title",
				"name": "AccountDetails",
				"multiple":true,
        "jsonPath":"BusinessDetails[0].accountDetails",
				"fields": [
          {
              "name": "AccountHead",
              "jsonPath": "BusinessDetails[0].accountDetails[0].chartOfAccounts",
              "label": "wc.create.group.field.accountHead",
              "pattern": "",
              "type": "autoCompelete",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
              "url":"egf-masters/chartofaccounts/_search?|$..id|$..name",
							"depedants":[{
									"jsonPath":"BusinessDetails[0].accountDetails[0].chartOfAccounts",
									"type":"textField",
									"rg":"",
									"isRequired": false,
									"requiredErrMsg": "",
									"patternErrMsg": ""
								}]
            },
						{
							"name": "Amount",
							"jsonPath": "BusinessDetails[0].accountDetails[0].amount",
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
	"collection.update": {
		"numCols": 12/3,
		"url":  "/egov-common-masters/businessDetails[0].id/_search",
    "searchUrl":  "/egov-common-masters/businessDetails/_search?id={id}",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "BusinessDetails",
		"groups": [
			{
				"label": "wc.update.businessDetailsType.title",
				"name": "businessDetailsType",
				"fields": [
          {
            "name": "CategoryType",
            "jsonPath": "BusinessDetails[0].businessCategory",
            "label": "wc.create.groups.fields.businessType",
            "pattern": "",
            "type": "singleValueList",
            "url": "/egov-common-masters/businessCategory/_search?&active=true|$..id|$..name",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
            {
							"name": "Code",
							"jsonPath": "BusinessDetails[0].code",
							"label": "wc.create.group.fields.businessCode",
							"pattern": "^[\s.]*([^\s.][\s.]*){0,100}$",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "Length minimum is 3 and maximum is 100"
						},
            {
							"name": "Name",
							"jsonPath": "BusinessDetails[0].name",
							"label": "wc.create.group.fields.businessName",
							"pattern": "^[\s.]*([^\s.][\s.]*){0,100}$",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "Length minimum is 3 and maximum is 100"
						},
            {
              "name": "Classification",
              "jsonPath": "BusinessDetails[0].businessType",
              "label": "wc.create.groups.fields.classification",
              "pattern": "",
              "type": "singleValueList",
              "url": "/egov-common-masters/businessCategory/_search?&active=true|$..name|$..name",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
						{
							"name": "Create voucher on receipt creation",
							"jsonPath": "BusinessDetails[0].voucherCreation",
							"label": "wc.create.group.fields.voucherOnReceiptCreation",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"defaultValue":true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
            {
							"name": "Active",
							"jsonPath": "BusinessDetails[0].active",
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
				"label": "wc.Create.financialDetails.title",
				"name": "Financial Details",
				"fields": [
          {
            "name": "Fund",
            "jsonPath": "BusinessDetails[0].fund",
            "label": "wc.create.groups.fields.Fund",
            "pattern": "",
            "type": "singleValueList",
            "url": "/egf-masters/funds/_search?|$..id|$..name",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "convertToString":true
          },
          {
            "name": "Funtion",
            "jsonPath": "BusinessDetails[0].function",
            "label": "wc.create.groups.fields.Function",
            "pattern": "",
            "type": "singleValueList",
            "url": "/egf-masters/functions/_search?|$..id|$..name",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "convertToString":true
          }
				]
			},
      {
				"label": "wc.Create.accountDetails.title",
				"name": "AccountDetails",
				"multiple":true,
        "jsonPath":"BusinessDetails[0].accountDetails",
				"fields": [
          {
              "name": "AccountHead",
              "jsonPath": "BusinessDetails[0].accountDetails[0].chartOfAccounts",
              "label": "wc.create.group.field.accountHead",
              "pattern": "",
              "type": "autoCompelete",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
              "url":"egf-masters/chartofaccounts/_search?|$..id|$..name",
							"autoCompleteDependancy": {
								"autoCompleteUrl": "/egf-masters/chartofaccounts/_search?id={value}",
								"autoFillFields": {
									"BusinessDetails[0].accountDetails[0].chartOfAccounts": "chartOfAccounts[0].glcode"
								 }
							 }
            },
						{
							"name": "AccountCode",
              "jsonPath": "BusinessDetails[0].accountDetails[0].chartOfAccounts",
							"label": "wc.create.groups.fields.accountCode",
							"pattern": "",
							"type": "number",
							"isRequired": true,
							"isDisabled": true,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "Amount",
							"jsonPath": "BusinessDetails[0].accountDetails[0].amount",
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
	}
}

export default dat;