var dat = {
	"asset.create": {
		"numCols": 12/3,
		"url": "asset-services-maha/assets/_create",
		"tenantIdRequired": true,
		"useTimestamp":true,
		"idJsonPath": "",
		"objectName": "Asset",
		"groups": [
			{
				"label": "ac.create.Header.Details",
				"name": "createAsset",
				"fields": [
						// {
						// 	"name": "AssetIdNo",
						// 	"jsonPath": "Asset[0].code",
						// 	"label": "ac.create.Asset.Id.No",
						// 	"pattern": "",
						// 	"type": "text",
						// 	"isRequired": false,
						// 	"isDisabled": true,
						// 	"requiredErrMsg": "",
						// 	"patternErrMsg": ""
						// },
            {
  						"name": "OldReferenceNumber",
  						"jsonPath": "Asset.oldCode",
  						"label": "ac.create.Old.Asset.Id.No",
  						"pattern": "",
  						"type": "text",
  						"url": "",
  						"isRequired": false,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
            {
              "name": "Date",
              "jsonPath": "Asset.dateOfCreation",
              "label": "ac.create.Date",
              "pattern": "",
              "type": "datePicker",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
							"maxDate":"today"
            },
            {
  						"name": "AssetName",
  						"jsonPath": "Asset.name",
  						"label": "ac.create.Asset.Name",
  						"pattern": "",
  						"type": "text",
  						"url": "",
  						"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
						{
  						"name": "AssetSubType",
  						"jsonPath": "Asset.assetCategory.id",
  						"label": "ac.create.Asset.SubCategory.Name",
  						"pattern": "",
  						"type": "singleValueList",
  						//"url": "/egov-mdms-service/v1/_get?&masterName=AssetCategory&moduleName=ASSET|$..id|$..name",
							"url": "",
							"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": "",
							"isStateLevel":true
  					},
						{
  						"name": "RefNoOfWIP",
  						"jsonPath": "Asset.wipReferenceNo",
  						"label": "ac.create.Ref.WIP.Register",
  						"pattern": "",
  						"type": "text",
  						"url": "",
  						"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
            {
  						"name": "Department",
  						"jsonPath": "Asset.department.code",
  						"label": "ac.create.Department",
  						"pattern": "",
  						"type": "singleValueList",
  						"url": "/egov-mdms-service/v1/_get?&masterName=Department&moduleName=common-masters|$..code|$..name",
  						"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": "",
							"isStateLevel":true
  					},
            {
              "name": "DateOfAcquisition",
              "jsonPath": "Asset.acquisitionDate",
              "label": "ac.create.Date.Of.Acquisition",
              "pattern": "",
              "type": "datePicker",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
							"maxDate":"today"
            },
            {
  						"name": "ModeofAcquisition",
  						"jsonPath": "Asset.modeOfAcquisition.code",
  						"label": "ac.create.Mode.of.Acquisition",
  						"pattern": "",
  						"type": "singleValueList",
  						"url": "/egov-mdms-service/v1/_get?&moduleName=ASSET&masterName=ModeOfAcquisition|$..code|$..name",
  						"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": "",
							"isStateLevel":true
				},
				{
					"name": "FromWhomAcquired",
					"jsonPath": "Asset.acquiredFrom",
					"label": "ac.create.From.whom.acquired",
					"pattern": "",
					"type": "text",
					"url": "",
					"isRequired": false,
					"isDisabled": false,
					"requiredErrMsg": "",
					"patternErrMsg": ""
				},
				{
					"name": "NoOfOrder",
					"jsonPath": "Asset.orderNumber",
					"label": "ac.create.No.Of.Order",
					"pattern": "^[a-zA-Z0-9_\\-\\/\\s]*$",
					"type": "text",
					"url": "",
					"isRequired": false,
					"isDisabled": false,
					"requiredErrMsg": "",
					"patternErrMsg": "Please enter valid No of Order (Alpha/Numeric)"
				},
				{
					"name": "DateOfOrder",
					"jsonPath": "Asset.orderDate",
					"label": "ac.create.Date.Of.Order",
					"pattern": "",
					"type": "datePicker",
					"isRequired": false,
					"isDisabled": false,
					"requiredErrMsg": "",
					"patternErrMsg": "",
					"maxDate":"today"
				},
				{
					"name": "AssetCategoryType",
					"jsonPath": "Asset.assetCategory.assetCategoryType",
					"label": "ac.create.asset.asset.category.type",
					"pattern": "",
					"type": "text",
					"url": "",
					"isRequired": true,
					"isDisabled": true,
					"requiredErrMsg": "",
					"patternErrMsg": "",
					"defaultValue":"IMMOVABLE",
					"isHidden": "true"
				}

				]
			},

			{
				"label": "ac.create.Land.Details",
				"name": "landDetails",
				"multiple":true,
        "jsonPath":"Asset.landDetails",
				"fields": [
					{
						"name": "LandAssetID",
						"jsonPath": "Asset.landDetails[0].code",
						"label": "ac.create.Land.Asset.ID",
						"pattern": "",
						"type": "autoCompelete",
						"url": "asset-services-maha/assets/_search?&assetCategoryType=LAND|$.Assets.*.name|$.Assets.*.name",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": "",
					},
					{
						"name": "SurveyNoOfLandOnWhichStructureIsLocated ",
						"jsonPath": "Asset.landDetails[0].surveyNo",
						"label": "ac.create.Survey.no.of.land",
						"pattern": "",
						"type": "text",
						"url": "",
						"isRequired": false,
						"isDisabled": true,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},

					{
            "name": "AreaofLandonwhichconstructed",
            "jsonPath": "Asset.landDetails[0].area",
            "label": "ac.create.areaOfLand",
            "pattern": "",
            "type": "number",
            "url": "",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": "",

          }
					]
				},

      {
				"label": "ac.create.Location.Details",
				"name": "LocationField",
        "multiple":false,
        "jsonPath":"Asset",
				"fields": [
					{
            "name": "searchLocation",
						"jsonPathAddress": "Asset.location",
            "jsonPathLng": "Asset.longitude",
						"jsonPathLat": "Asset.latitude",
            "label": "ac.create.Location",
            "pattern": "",
            "type": "googleMaps",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Longitude",
            "jsonPath": "Asset.longitude",
            "label": "ac.create.Longitude",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Latitude",
            "jsonPath": "Asset.latitude",
            "label": "ac.create.Latitude",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": "",
					"defaultValue": ""
          },
          {
            "name": "Address",
            "jsonPath": "Asset.address",
            "label": "ac.create.Address",
            "pattern": "",
            "type": "textarea",
            "url": "",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"defaultValue": localStorage.getItem("address")
          },
          {
            "name": "ElectionWard",
            "jsonPath": "Asset.locationDetails.electionWard",
            "label": "ac.create.Election.Ward",
            "pattern": "",
            "type": "singleValueList",
            "url": "/egov-location/boundarys/getByBoundaryType?tenantId=default&boundaryTypeId=10|$.Boundary.*.id|$.Boundary.*.name",
					//"url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "Location",
						"jsonPath": "Asset.location",
            "label": "ac.create.Location",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"isHidden": true
          }

				]
			},
      {
				"label": "ac.create.Asset.Details",
				"name": "AssetField",
        "multiple":false,
        "jsonPath":"Asset",
				"fields": [
					// {
          //   "name": "No of Floors",
          //   "jsonPath": "Asset.floors",
          //   "label": "ac.create.No.of.Floors",
          //   "pattern": "",
          //   "type": "number",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "PlinthArea",
          //   "jsonPath": "Asset.plinthArea",
          //   "label": "ac.create.Plinth.Area",
          //   "pattern": "",
          //   "type": "number",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "CubicContents",
          //   "jsonPath": "Asset.cubicContents",
          //   "label": "ac.create.Cubic.Contents",
          //   "pattern": "",
          //   "type": "number",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
					// {
          //   "name": "floorWise",
          //   "jsonPath": "Asset.floorWise",
          //   "label": "Floor Wise Usage & Construction Class",
          //   "pattern": "",
          //   "type": "dialogBox",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "DimensionOfStructure(L,B,H)",
          //   "jsonPath": "Asset.length",
          //   "label": "ac.create.Dimension.of.Structure",
          //   "pattern": "",
          //   "type": "number",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
					// {
          //   "name": "DimensionOfStructure(L,B,H)",
          //   "jsonPath": "Asset.width",
          //   "label": "ac.create.Dimension.breadth",
          //   "pattern": "",
          //   "type": "number",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
					// {
          //   "name": "DimensionOfStructure(L,B,H)",
          //   "jsonPath": "Asset.height",
          //   "label": "ac.create.Dimension.height",
          //   "pattern": "",
          //   "type": "number",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
					// {
          //   "name": "Usage",
          //   "jsonPath": "Asset.usage",
          //   "label": "ac.create.Usage",
          //   "pattern": "",
          //   "type": "text",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
					{
            "name": "OriginalValueOfAsset",
            "jsonPath": "Asset.originalValue",
            "label": "ac.create.Original.Value.of.Asset",
            "pattern": "",
            "type": "number",
            "url": "",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "AnticipatedLifeOfAsset",
            "jsonPath": "Asset.anticipatedLife",
            "label": "ac.create.Anticipated.life.of.Asset",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": true,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "AreaofLandonwhichconstructed",
            "jsonPath": "Asset.totalArea",
            "label": "ac.create.areaOfLandWhichConstructed",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "OpeningDate",
            "jsonPath": "Asset.openingDate",
            "label": "ac.create.Opening.date",
            "pattern": "",
            "type": "datePicker",
            "url": "",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"maxDate":"today"
          },
          {
            "name": "OpeningWrittenDownValue",
            "jsonPath": "Asset.grossValue",
            "label": "ac.create.Opening.Written.down.Value",
            "pattern": "",
            "type": "number",
            "url": "",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "TitleDocumentsAvailable",
            "jsonPath": "Asset.titleDocumentsAvailable",
            "label": "ac.create.Title.documents.available",
            "pattern": "",
            "type": "textarea",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "SourceOfFunds",
            "jsonPath": "Asset.fundSource.code",
            "label": "ac.create.Source.of.funds",
            "pattern": "",
            "type": "singleValueList",
            "url": "/egov-mdms-service/v1/_get?&moduleName=egf-master&masterName=funds|$..code|$..name",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"isStateLevel":true
          },
					{
            "name": "SecurityDepositRetained",
            "jsonPath": "Asset.securityDepositRetained",
            "label": "ac.create.Security.deposit.retained",
            "pattern": "[0-9]{1,10}(\\.[0-9]{0,2})?",
            "type": "number",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "Please enter number only"
          },
          {
            "name": "SecurityDepositRealized",
            "jsonPath": "Asset.securityDepositRealized",
            "label": "ac.create.Security.deposit.realized",
            "pattern": "",
            "type": "number",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "DefectLiabilityPeriod",
            "jsonPath": "Asset.defectLiabilityPeriod.year",
            "label": "ac.create.Defect.liability.Period",
            "pattern": "",
            "type": "number",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "DefectLiabilityPeriod",
            "jsonPath": "Asset.defectLiabilityPeriod.month",
            "label": "ac.create.Defect.liability.Period.month",
            "pattern": "",
            "type": "number",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "DefectLiabilityPeriod",
            "jsonPath": "Asset.defectLiabilityPeriod.day",
            "label": "ac.create.Defect.liability.Period.day",
            "pattern": "",
            "type": "number",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "Warranty",
            "jsonPath": "Asset.warrantyAvailable",
            "label": "ac.create.Warranty",
            "pattern": "",
            "type": "radio",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "values": [{"label":"Yes", "value":true},{"label":"No", "value":false}],
            "defaultValue":true
          },
          {
            "name": "WarrantyExpiryDate",
            "jsonPath": "Asset.warrantyExpiryDate",
            "label": "ac.create.Warranty.expiry.date",
            "pattern": "",
            "type": "datePicker",
            "url": "",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "AssetDescription",
            "jsonPath": "Asset.description",
            "label": "ac.create.Asset.description",
            "pattern": "",
            "type": "textarea",
            "url": "",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"fullWidth":true
          },
          // {
          //   "name": "AssetAcountCode",
          //   "jsonPath": "Asset.assetAccount",
          //   "label": "ac.create.Asset.account.code",
          //   "pattern": "",
          //   "type": "singleValueList",
					// 	//"url": "",
          //   "url": "/egf-masters/accountcodepurposes/_search?tenantId=default&name=Fixed Assets|$..name|$..name",
          //   "isRequired": true,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "AccumulatedDepreciationAccount",
          //   "jsonPath": "Asset.accumulatedDepreciationAccount",
          //   "label": "ac.create.Accumulated.Depreciation.Account",
          //   "pattern": "",
          //   "type": "singleValueList",
          //   "url": "/egf-masters/accountcodepurposes/_search?tenantId=default&name=Accumulated Depreciation|$..name|$..name",
          //   "isRequired": true,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "RevaluationReserveAccount",
          //   "jsonPath": "Asset.revaluationReserveAccount",
          //   "label": "ac.create.Revaluation.Reserve.Account",
          //   "pattern": "",
          //   "type": "singleValueList",
          //   "url": "/egf-masters/accountcodepurposes/_search?tenantId=default&name=Revaluation Reserve Account|$..name|$..name",
          //   "isRequired": true,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "DepreciationExpensesAccount ",
          //   "jsonPath": "Asset.depreciationExpenseAccount",
          //   "label": "ac.create.Depreciation.Expenses.Account",
          //   "pattern": "",
          //   "type": "singleValueList",
          //   "url": "/egf-masters/accountcodepurposes/_search?tenantId=default&name=Depreciation Expense Account|$..name|$..name",
          //   "isRequired": true,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },

				]
			},
      // {
			// 	"name": "TableField",
      //   "jsonPath":"Asset",
			// 	"fields": [
          // {
          //   "name": "AnticipatedLifeOfAsset",
          //   "label": "Anticipated life of Asset",
          //   "type": "dynamicTable"
          //   "resultList": {
          //     "resultHeader": [{"label": "asset.create.test"}],
          //     "resultValues": [[{}, ], [], []]
          //   }
          // },



          // {
          //   "name": "AdditionDate",
          //   "jsonPath": "Asset.",
          //   "label": "ac.create.Addition.Date",
          //   "pattern": "",
          //   "type": "datePicker",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "AdditionValue",
          //   "jsonPath": "Asset.",
          //   "label": "ac.create.Addition.Value",
          //   "pattern": "",
          //   "type": "text",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "RevaluationDate",
          //   "jsonPath": "Asset.",
          //   "label": "ac.create.Revaluation.date",
          //   "pattern": "",
          //   "type": "datePicker",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "RevaluationValue",
          //   "jsonPath": "Asset.",
          //   "label": "ac.create.Revaluation.Value",
          //   "pattern": "",
          //   "type": "text",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "DepreciationDate",
          //   "jsonPath": "Asset.",
          //   "label": "ac.create.Depreciation.Date",
          //   "pattern": "",
          //   "type": "datePicker",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "DepreciationValue",
          //   "jsonPath": "Asset.",
          //   "label": "ac.create.Depreciation.Value",
          //   "pattern": "",
          //   "type": "text",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "Closing date",
          //   "jsonPath": "Asset.",
          //   "label": "ac.create.Closing.Date",
          //   "pattern": "",
          //   "type": "datePicker",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "ClosingValue",
          //   "jsonPath": "Asset.",
          //   "label": "ac.create.Closing.written.Down.Value",
          //   "pattern": "",
          //   "type": "datePicker",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // }

			// 	]
			// }
		]
	},
	"asset.search": {
		"numCols": 12/3,
		"url": "asset-services-maha/assets/_search",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "Asset",
		"customActionsAndUrl":[
			{
				"actionName":"Add",
				"url":"/non-framework/asset/master/assetMovableCreate"
			}
		],
		"groups": [
			{
				"label": "ac.search.asset.title",
				"name": "createCategoryType",
				"fields": [
					{
						"name": "AssetSearchCode",
						"jsonPath": "assetCategoryType",
						"label": "ac.create.asset.asset.category.type",
						"pattern": "",
						"type": "singleValueList",
						"url": "",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": "",
						"defaultValue": [  {
						"key": "IMMOVABLE",
						"value": "IMMOVABLE"
					}]
				},
					{
						"name": "AssetCategoryType",
						"jsonPath": "assetCategoryType",
						"label": "ac.create.asset.asset.category.type",
						"pattern": "",
						"type": "text",
						"url": "",
						"isRequired": true,
						"isDisabled": true,
						"requiredErrMsg": "",
						"patternErrMsg": "",
						"defaultValue":"IMMOVABLE",
						"isHidden": "true"
					},
					{
						"name": "AssetCategory",
						"jsonPath": "assetCategory",
						"label": "ac.create.Asset.Category",
						"pattern": "",
						"type": "singleValueList",
						"url": "/egov-mdms-service/v1/_get?&moduleName=ASSET&masterName=AssetCategory&filter=%5B%3F(%20%40.isAssetAllow%20%3D%3D%20false%20%26%26%20%40.assetCategoryType%20%3D%3D%20%22IMMOVABLE%22)%5D|$.MdmsRes.ASSET.AssetCategory.*.id|$.MdmsRes.ASSET.AssetCategory.*.name",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": "",
						"isStateLevel":true,
						"depedants": [{
							"jsonPath": "assetSubCategory",
							"type": "dropDown",
							"pattern": "/egov-mdms-service/v1/_get?&moduleName=ASSET&masterName=AssetCategory&filter=%5B%3F%28%40.parent%3D%3D'{assetCategory}'%29%5D|$.MdmsRes.ASSET.AssetCategory.*.id|$.MdmsRes.ASSET.AssetCategory.*.name"
						}]
					},
					{
						"name": "AssetSearchAssetSubCategory",
						"jsonPath": "assetSubCategory",
						"label": "ac.create.Asset.SubCategory.Name",
						"pattern": "",
						"type": "singleValueList",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": "",
						"isStateLevel":true
					},
					{
						"name": "Department",
						"jsonPath": "department",
						"label": "ac.create.Department",
						"pattern": "",
						"type": "singleValueList",
						"url": "/egov-mdms-service/v1/_get?&masterName=Department&moduleName=common-masters|$..code|$..name",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": "",
						"isStateLevel":true
					},
					{
						"name": "AssetSearchCode",
						"jsonPath": "code",
						"label": "ac.search.asset.code",
						"pattern": "",
						"type": "text",
						"url": "",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
					{
						"name": "AssetSearchName",
						"jsonPath": "name",
						"label": "ac.search.asset.name",
						"pattern": "",
						"type": "text",
						"url": "",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},

					{
						"name": "fromOriginalValue",
						"jsonPath": "originalValueFrom",
						"label": "ac.create.OriginalFromDate",
						"pattern": "",
						"type": "number",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
					{
						"name": "toOriginalValue",
						"jsonPath": "originalValueTo",
						"label": "ac.create.OriginalToDate",
						"pattern": "",
						"type": "number",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
					{
						"name": "fromDate",
						"jsonPath": "assetCreatedFrom",
						"label": "ac.create.createFromDate",
						"pattern": "",
						"type": "datePicker",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
					{
						"name": "toDate",
						"jsonPath": "assetCreatedTo",
						"label": "ac.create.createToDate",
						"pattern": "",
						"type": "datePicker",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					}
				]
			}
		],
		"result": {
			"header": [{label: "Asset Code"},{label: "ac.create.Asset.Name"}, {label: "ac.create.Asset.SubCategory.Name"},{label: "ac.create.Department"},{label: "ac.create.Original.Value.of.Asset" , isComma :true}, {label: "ac.create.Opening.Written.down.Value" , isComma :true}],
			"values": ["code","name", "assetCategory.name", "department.name","originalValue", "grossValue"],
			"resultPath": "Assets",
			 "rowClickUrlUpdate": "/non-framework/asset/master/assetImmovableCreate/{id}",
			 "rowClickUrlView": "/non-framework/asset/master/assetImmovableView/{id}"
			}
	},
	"asset.view": {
		"numCols": 12/3,
		"url": "asset-services-maha/assets/_search?id={id}",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "Assets",
		"groups": [
			{
				"label": "ac.View.Header.Details",
				"name": "viewAsset",
				"fields": [
						{
							"name": "AssetIdNo",
							"jsonPath": "Assets[0].code",
							"label": "ac.create.Asset.Id.No",
							"pattern": "",
							"type": "text",
							"isRequired": false,
							"isDisabled": true,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
            {
  						"name": "OldReferenceNumber",
  						"jsonPath": "Assets[0].oldCode",
  						"label": "ac.create.Old.Asset.Id.No",
  						"pattern": "",
  						"type": "text",
  						"url": "",
  						"isRequired": false,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
            {
              "name": "Date",
              "jsonPath": "Assets[0].dateOfCreation",
              "label": "ac.create.Date",
              "pattern": "",
              "type": "datePicker",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
						{
  						"name": "AssetName",
  						"jsonPath": "Assets[0].name",
  						"label": "ac.create.Asset.Name",
  						"pattern": "",
  						"type": "text",
  						"url": "",
  						"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
            // {
  					// 	"name": "AssetCategoryType",
  					// 	"jsonPath": "Asset[0].",
  					// 	"label": "ac.create.Asset.SubCategory.Name",
  					// 	"pattern": "",
  					// 	"type": "singleValueList",
  					// 	"url": "",
  					// 	"isRequired": true,
  					// 	"isDisabled": false,
  					// 	"requiredErrMsg": "",
  					// 	"patternErrMsg": ""
  					// },
						{
  						"name": "AssetSubType",
  						"jsonPath": "Assets[0].assetCategory.name",
  						"label": "ac.create.Asset.SubCategory.Name",
  						"pattern": "",
  						"type": "text",
							"url": "",
							"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
            {
  						"name": "RefNoOfWIP",
  						"jsonPath": "Assets[0].wipReferenceNo",
  						"label": "ac.create.Ref.WIP.Register",
  						"pattern": "",
  						"type": "text",
  						"url": "",
  						"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
            {
  						"name": "Department",
  						"jsonPath": "Assets[0].department.name",
  						"label": "ac.create.Department",
  						"pattern": "",
  						"type": "text",
  						"url": "/egov-mdms-service/v1/_get?&masterName=Department&moduleName=common-masters|$..code|$..name",
  						"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
            {
              "name": "DateOfAcquisition",
              "jsonPath": "Assets[0].acquisitionDate",
              "label": "ac.create.Date.Of.Acquisition",
              "pattern": "",
              "type": "datePicker",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
  						"name": "ModeofAcquisition",
  						"jsonPath": "Assets[0].modeOfAcquisition.code",
  						"label": "ac.create.Mode.of.Acquisition",
  						"pattern": "",
							"type": "singleValueList",
  						"url": "/egov-mdms-service/v1/_get?&moduleName=ASSET&masterName=ModeOfAcquisition|$..code|$..name",
  						"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": "",
							"isStateLevel":true
  					},
						{
	            "name": "FromWhomAcquired",
	            "jsonPath": "Assets[0].acquiredFrom",
	            "label": "ac.create.From.whom.acquired",
	            "pattern": "",
	            "type": "text",
	            "url": "",
	            "isRequired": false,
	            "isDisabled": false,
	            "requiredErrMsg": "",
	            "patternErrMsg": ""
	          },
						{
  						"name": "NoOfOrder",
  						"jsonPath": "Assets[0].orderNumber",
  						"label": "ac.create.No.Of.Order",
  						"pattern": "",
  						"type": "number",
  						"url": "",
  						"isRequired": false,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
            {
              "name": "DateOfOrder",
              "jsonPath": "Assets[0].orderDate",
              "label": "ac.create.Date.Of.Order",
              "pattern": "",
              "type": "datePicker",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            }
            // {
  					// 	"name": "LandAssetID",
  					// 	"jsonPath": "Asset[0].",
  					// 	"label": "ac.create.Land.Asset.ID",
  					// 	"pattern": "",
  					// 	"type": "autoCompelete",
  					// 	"url": "",
  					// 	"isRequired": false,
  					// 	"isDisabled": false,
  					// 	"requiredErrMsg": "",
  					// 	"patternErrMsg": "",
            //   "autoCompleteDependancy": {
						// 		"autoCompleteUrl": "/egf-masters/chartofaccounts/_search?id={value}",
						// 		"autoFillFields": {
						// 			"BusinessDetails[0].accountDetails[0].chartOfAccounts": "chartOfAccounts[0].glcode"
						// 		 }
						// 	 }
  					// },
            // {
  					// 	"name": "SurveyNoOfLandOnWhichStructureIsLocated ",
  					// 	"jsonPath": "Asset[0].landSurveyNo",
  					// 	"label": "ac.create.Survey.no.of.land",
  					// 	"pattern": "",
  					// 	"type": "number",
  					// 	"url": "",
  					// 	"isRequired": false,
  					// 	"isDisabled": true,
  					// 	"requiredErrMsg": "",
  					// 	"patternErrMsg": ""
  					// },
				]
			},
			{
				"label": "ac.create.Land.Details",
				"name": "landDetails",
				"multiple":true,
        "jsonPath":"Assets[0].landDetails",
				"fields": [
					{
						"name": "LandAssetID",
						"jsonPath": "Assets[0].landDetails[0].code",
						"label": "ac.create.Land.Asset.ID",
						"pattern": "",
						"type": "text",
						"url": "",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": "",

					},
					{
						"name": "SurveyNoOfLandOnWhichStructureIsLocated ",
						"jsonPath": "Assets[0].landDetails[0].surveyNo",
						"label": "ac.create.Survey.no.of.land",
						"pattern": "",
						"type": "text",
						"url": "",
						"isRequired": false,
						"isDisabled": true,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
					{
            "name": "AreaofLandonwhichconstructed",
            "jsonPath": "Assets[0].landDetails[0].area",
            "label": "ac.create.areaOfLand",
            "pattern": "",
            "type": "number",
            "url": "",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": "",
          }
					]
				},
      {
				"name": "LocationField",
				"label": "ac.create.Location.Details",
        "multiple":false,
        "jsonPath":"Asset",
				"fields": [
          {
            "name": "Location",
            "jsonPath": "Assets[0].location",
            "label": "ac.create.Location",
            "pattern": "",
            "type": "textarea",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Longitude",
            "jsonPath": "Assets[0].longitude",
            "label": "ac.create.Longitude",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Latitude",
            "jsonPath": "Assets[0].latitude",
            "label": "ac.create.Latitude",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Address",
            "jsonPath": "Assets[0].address",
            "label": "ac.create.Address",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "ElectionWard",
            "jsonPath": "Assets[0].locationDetails.electionWard",
            "label": "ac.create.Election.Ward",
            "pattern": "",
            "type": "singleValueList",
            "url": "/egov-location/boundarys/getByBoundaryType?tenantId=default&boundaryTypeId=10|$.Boundary.*.id|$.Boundary.*.name",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"convertToString":true
          }
				]
			},
      {
				"label": "ac.create.Asset.Details",
				"name": "AssetField",
        "multiple":false,
        "jsonPath":"Assets",
				"fields": [
					{
            "name": "OriginalValueOfAsset",
            "jsonPath": "Assets[0].originalValue",
            "label": "ac.create.Original.Value.of.Asset",
            "pattern": "",
            "type": "number",
            "url": "",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"isComma": true
          },
					{
            "name": "AnticipatedLifeOfAsset",
            "jsonPath": "Assets[0].anticipatedLife",
            "label": "ac.create.Anticipated.life.of.Asset",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "AreaofLandonwhichconstructed",
            "jsonPath": "Assets[0].totalArea",
            "label": "ac.create.areaOfLandWhichConstructed",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					// {
          //   "name": "OpeningDate",
          //   "jsonPath": "Assets[0].openingDate",
          //   "label": "ac.create.Opening.date",
          //   "pattern": "",
          //   "type": "datePicker",
          //   "url": "",
          //   "isRequired": true,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "OpeningWrittenDownValue",
          //   "jsonPath": "Assets[0].grossValue",
          //   "label": "ac.create.Opening.Written.down.Value",
          //   "pattern": "",
          //   "type": "number",
          //   "url": "",
          //   "isRequired": true,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": "",
					// 	"isComma": true
          // },
					{
            "name": "Warranty",
            "jsonPath": "Assets[0].warrantyAvailable",
            "label": "ac.create.Warranty",
            "pattern": "",
            "type": "radio",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "values": [{"label":"Yes", "value":true},{"label":"No", "value":false}],
            "defaultValue":true
          },
          {
            "name": "WarrantyExpiryDate",
            "jsonPath": "Assets[0].warrantyExpiryDate",
            "label": "ac.create.Warranty.expiry.date",
            "pattern": "",
            "type": "datePicker",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "TitleDocumentsAvailable",
            "jsonPath": "Assets[0].titleDocumentsAvailable",
            "label": "ac.create.Title.documents.available",
            "pattern": "",
            "type": "textarea",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "SourceOfFunds",
            "jsonPath": "Assets[0].fundSource.name",
            "label": "ac.create.Source.of.funds",
            "pattern": "",
            "type": "singleValueList",
            "url": "/egov-mdms-service/v1/_get?&moduleName=egf-master&masterName=funds|$..code|$..name",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"isStateLevel":true
          },
					{
            "name": "SecurityDepositRetained",
            "jsonPath": "Assets[0].securityDepositRetained",
            "label": "ac.create.Security.deposit.retained",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"isComma": true
          },
          {
            "name": "SecurityDepositRealized",
            "jsonPath": "Assets[0].securityDepositRealized",
            "label": "ac.create.Security.deposit.realized",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"isComma": true
          },
          {
            "name": "DefectLiabilityPeriod",
            "jsonPath": "Assets[0].defectLiabilityPeriod.year",
            "label": "ac.create.Defect.liability.Period",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "DefectLiabilityPeriod",
            "jsonPath": "Assets[0].defectLiabilityPeriod.month",
            "label": "ac.create.Defect.liability.Period.month",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "DefectLiabilityPeriod",
            "jsonPath": "Assets[0].defectLiabilityPeriod.day",
            "label": "ac.create.Defect.liability.Period.day",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "AssetDescription",
            "jsonPath": "Assets[0].description",
            "label": "ac.create.Asset.description",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"fullWidth":true
          }
				]
			},
      // {
			// 	"name": "TableField",
      //   "jsonPath":"Assets",
			// 	"fields": [

          // {
          //   "name": "AdditionDate",
          //   "jsonPath": "Asset[0].",
          //   "label": "ac.create.Addition.Date",
          //   "pattern": "",
          //   "type": "datePicker",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "AdditionValue",
          //   "jsonPath": "Asset[0].",
          //   "label": "ac.create.Addition.Value",
          //   "pattern": "",
          //   "type": "text",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "RevaluationDate",
          //   "jsonPath": "Asset[0].",
          //   "label": "ac.create.Revaluation.date",
          //   "pattern": "",
          //   "type": "datePicker",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "RevaluationValue",
          //   "jsonPath": "Asset[0].",
          //   "label": "ac.create.Revaluation.Value",
          //   "pattern": "",
          //   "type": "text",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "DepreciationDate",
          //   "jsonPath": "Asset[0].",
          //   "label": "ac.create.Depreciation.Date",
          //   "pattern": "",
          //   "type": "datePicker",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "DepreciationValue",
          //   "jsonPath": "Asset[0].",
          //   "label": "ac.create.Depreciation.Value",
          //   "pattern": "",
          //   "type": "text",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "Closing date",
          //   "jsonPath": "Asset[0].",
          //   "label": "ac.create.Closing.Date",
          //   "pattern": "",
          //   "type": "datePicker",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "ClosingValue",
          //   "jsonPath": "Asset[0].",
          //   "label": "ac.create.Closing.written.Down.Value",
          //   "pattern": "",
          //   "type": "datePicker",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // }

			// 	]
			// },
		]
	},
	"asset.update": {
		"numCols": 12/3,
		"searchUrl": "asset-services-maha/assets/_search?id={id}",
		"url":"asset-services-maha/assets/_update",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "Asset",
		"groups": [
			{
				"label": "ac.Modify.Header.Details",
				"name": "updateAsset",
				"fields": [
						{
							"name": "AssetIdNo",
							"jsonPath": "Asset.code",
							"label": "ac.create.Asset.Id.No",
							"pattern": "",
							"type": "text",
							"isRequired": false,
							"isDisabled": true,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
            {
  						"name": "OldReferenceNumber",
  						"jsonPath": "Asset.oldCode",
  						"label": "ac.create.Old.Asset.Id.No",
  						"pattern": "",
  						"type": "text",
  						"url": "",
  						"isRequired": false,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
            {
              "name": "Date",
              "jsonPath": "Asset.dateOfCreation",
              "label": "ac.create.Date",
              "pattern": "",
              "type": "datePicker",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
							"maxDate":"today"
            },
						{
  						"name": "AssetName",
  						"jsonPath": "Asset.name",
  						"label": "ac.create.Asset.Name",
  						"pattern": "",
  						"type": "text",
  						"url": "",
  						"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
						{
  						"name": "AssetSubType",
  						"jsonPath": "Asset.assetCategory.id",
  						"label": "ac.create.Asset.SubCategory.Name",
  						"pattern": "",
  						"type": "singleValueList",
							"url": "",
  						//"url": "/egov-mdms-service/v1/_get?&masterName=AssetCategory&moduleName=ASSET&filter=%5B%3F(%20%40.isAssetAllow%20%3D%3D%20true%20%26%26%20%40.assetCategoryType%20%3D%3D%20%22IMMOVABLE%22)%5D%0A|$.MdmsRes.ASSET.AssetCategory.*.id|$.MdmsRes.ASSET.AssetCategory.*.name",
							"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": "",
							"isStateLevel":true,
							//"convertToString": true
  					},
            {
  						"name": "RefNoOfWIP",
  						"jsonPath": "Asset.wipReferenceNo",
  						"label": "ac.create.Ref.WIP.Register",
  						"pattern": "",
  						"type": "text",
  						"url": "",
  						"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
            {
  						"name": "Department",
  						"jsonPath": "Asset.department.code",
  						"label": "ac.create.Department",
  						"pattern": "",
  						"type": "singleValueList",
  						"url": "/egov-mdms-service/v1/_get?&masterName=Department&moduleName=common-masters|$..code|$..name",
  						"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": "",
							"isStateLevel":true
  					},
            {
              "name": "DateOfAcquisition",
              "jsonPath": "Asset.acquisitionDate",
              "label": "ac.create.Date.Of.Acquisition",
              "pattern": "",
              "type": "datePicker",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
							"maxDate":"today"
            },
            {
  						"name": "ModeofAcquisition",
  						"jsonPath": "Asset.modeOfAcquisition.code",
  						"label": "ac.create.Mode.of.Acquisition",
  						"pattern": "",
  						"type": "singleValueList",
  						"url": "/egov-mdms-service/v1/_get?&moduleName=ASSET&masterName=ModeOfAcquisition|$..code|$..name",
  						"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": "",
							"isStateLevel":true
				},
				{
					"name": "FromWhomAcquired",
					"jsonPath": "Asset.acquiredFrom",
					"label": "ac.create.From.whom.acquired",
					"pattern": "",
					"type": "text",
					"url": "",
					"isRequired": false,
					"isDisabled": false,
					"requiredErrMsg": "",
					"patternErrMsg": ""
				},
				{
					"name": "AssetCategoryType",
					"jsonPath": "Asset.assetCategory.assetCategoryType",
					"label": "ac.create.asset.asset.category.type",
					"pattern": "",
					"type": "text",
					"url": "",
					"isRequired": true,
					"isDisabled": true,
					"requiredErrMsg": "",
					"patternErrMsg": "",
					"defaultValue":"IMMOVABLE",
					"isHidden": "true"
				},
				{
					"name": "NoOfOrder",
					"jsonPath": "Asset.orderNumber",
					"label": "ac.create.No.Of.Order",
					"pattern": "^[a-zA-Z0-9_\\-\\/\\s]*$",
					"type": "text",
					"url": "",
					"isRequired": false,
					"isDisabled": false,
					"requiredErrMsg": "",
					"patternErrMsg": "Please enter valid No of Order (Alpha/Numeric)"
				},
				{
					"name": "DateOfOrder",
					"jsonPath": "Asset.orderDate",
					"label": "ac.create.Date.Of.Order",
					"pattern": "",
					"type": "datePicker",
					"isRequired": false,
					"isDisabled": false,
					"requiredErrMsg": "",
					"patternErrMsg": "",
					"maxDate":"today"
				}

				]
			},

			{
				"label": "ac.create.Land.Details",
				"name": "landDetails",
				"multiple":true,
        "jsonPath":"Asset.landDetails",
				"fields": [
					{
						"name": "LandAssetID",
						"jsonPath": "Asset.landDetails[0].code",
						"label": "ac.create.Land.Asset.ID",
						"pattern": "",
						"type": "autoCompelete",
						"url": "asset-services-maha/assets/_search?&assetCategoryType=LAND|$..name|$..name",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
					{
						"name": "SurveyNoOfLandOnWhichStructureIsLocated ",
						"jsonPath": "Asset.landDetails[0].surveyNo",
						"label": "ac.create.Survey.no.of.land",
						"pattern": "",
						"type": "text",
						"url": "",
						"isRequired": false,
						"isDisabled": true,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},

					{
            "name": "AreaofLandonwhichconstructed",
            "jsonPath": "Asset.landDetails[0].area",
            "label": "ac.create.areaOfLand",
            "pattern": "",
            "type": "number",
            "url": "",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": "",

          }
					]
				},

      {
				"label": "ac.create.Location.Details",
				"name": "LocationField",
        "multiple":false,
        "jsonPath":"Asset",
				"fields": [
					{
            "name": "searchLocation",
						"jsonPathAddress": "Asset.location",
            "jsonPathLng": "Asset.longitude",
						"jsonPathLat": "Asset.latitude",
            "label": "ac.create.Location",
            "pattern": "",
            "type": "googleMaps",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Longitude",
            "jsonPath": "Asset.longitude",
            "label": "ac.create.Longitude",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Latitude",
            "jsonPath": "Asset.latitude",
            "label": "ac.create.Latitude",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": "",
					"defaultValue": ""
          },
          {
            "name": "Address",
            "jsonPath": "Asset.address",
            "label": "ac.create.Address",
            "pattern": "",
            "type": "textarea",
            "url": "",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"defaultValue": localStorage.getItem("address")
          },
          {
            "name": "ElectionWard",
            "jsonPath": "Asset.locationDetails.electionWard",
            "label": "ac.create.Election.Ward",
            "pattern": "",
            "type": "singleValueList",
            "url": "/egov-location/boundarys/getByBoundaryType?tenantId=default&boundaryTypeId=10|$.Boundary.*.id|$.Boundary.*.name",
					//"url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "Location",
						"jsonPath": "Asset.location",
            "label": "ac.create.Location",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"isHidden": true
          }

				]
			},
      {
				"label": "ac.create.Asset.Details",
				"name": "AssetField",
        "multiple":false,
        "jsonPath":"Asset",
				"fields": [
					// {
          //   "name": "No of Floors",
          //   "jsonPath": "Asset.floors",
          //   "label": "ac.create.No.of.Floors",
          //   "pattern": "",
          //   "type": "number",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "PlinthArea",
          //   "jsonPath": "Asset.plinthArea",
          //   "label": "ac.create.Plinth.Area",
          //   "pattern": "",
          //   "type": "number",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "CubicContents",
          //   "jsonPath": "Asset.cubicContents",
          //   "label": "ac.create.Cubic.Contents",
          //   "pattern": "",
          //   "type": "number",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
					// {
          //   "name": "floorWise",
          //   "jsonPath": "Asset.floorWise",
          //   "label": "Floor Wise Usage & Construction Class",
          //   "pattern": "",
          //   "type": "dialogBox",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "DimensionOfStructure(L,B,H)",
          //   "jsonPath": "Asset.length",
          //   "label": "ac.create.Dimension.of.Structure",
          //   "pattern": "",
          //   "type": "number",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
					// {
          //   "name": "DimensionOfStructure(L,B,H)",
          //   "jsonPath": "Asset.width",
          //   "label": "ac.create.Dimension.breadth",
          //   "pattern": "",
          //   "type": "number",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
					// {
          //   "name": "DimensionOfStructure(L,B,H)",
          //   "jsonPath": "Asset.height",
          //   "label": "ac.create.Dimension.height",
          //   "pattern": "",
          //   "type": "number",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
					// {
          //   "name": "Usage",
          //   "jsonPath": "Asset.usage",
          //   "label": "ac.create.Usage",
          //   "pattern": "",
          //   "type": "text",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
					{
            "name": "OriginalValueOfAsset",
            "jsonPath": "Asset.originalValue",
            "label": "ac.create.Original.Value.of.Asset",
            "pattern": "",
            "type": "number",
            "url": "",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "AnticipatedLifeOfAsset",
            "jsonPath": "Asset.anticipatedLife",
            "label": "ac.create.Anticipated.life.of.Asset",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": true,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "AreaofLandonwhichconstructed",
            "jsonPath": "Asset.totalArea",
            "label": "ac.create.areaOfLandWhichConstructed",
            "pattern": "",
            "type": "text",
            "url": "",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "OpeningDate",
            "jsonPath": "Asset.openingDate",
            "label": "ac.create.Opening.date",
            "pattern": "",
            "type": "datePicker",
            "url": "",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"maxDate":"today"
          },
          {
            "name": "OpeningWrittenDownValue",
            "jsonPath": "Asset.grossValue",
            "label": "ac.create.Opening.Written.down.Value",
            "pattern": "",
            "type": "number",
            "url": "",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "TitleDocumentsAvailable",
            "jsonPath": "Asset.titleDocumentsAvailable",
            "label": "ac.create.Title.documents.available",
            "pattern": "",
            "type": "textarea",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "SourceOfFunds",
            "jsonPath": "Asset.fundSource.code",
            "label": "ac.create.Source.of.funds",
            "pattern": "",
            "type": "singleValueList",
            "url": "/egov-mdms-service/v1/_get?&moduleName=egf-master&masterName=funds|$..code|$..name",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"isStateLevel":true
          },
					{
            "name": "SecurityDepositRetained",
            "jsonPath": "Asset.securityDepositRetained",
            "label": "ac.create.Security.deposit.retained",
            "pattern": "[0-9]{1,10}(\\.[0-9]{0,2})?",
            "type": "number",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "Please enter number only"
          },
          {
            "name": "SecurityDepositRealized",
            "jsonPath": "Asset.securityDepositRealized",
            "label": "ac.create.Security.deposit.realized",
            "pattern": "",
            "type": "number",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "DefectLiabilityPeriod",
            "jsonPath": "Asset.defectLiabilityPeriod.year",
            "label": "ac.create.Defect.liability.Period",
            "pattern": "",
            "type": "number",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "DefectLiabilityPeriod",
            "jsonPath": "Asset.defectLiabilityPeriod.month",
            "label": "ac.create.Defect.liability.Period.month",
            "pattern": "",
            "type": "number",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "DefectLiabilityPeriod",
            "jsonPath": "Asset.defectLiabilityPeriod.day",
            "label": "ac.create.Defect.liability.Period.day",
            "pattern": "",
            "type": "number",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "Warranty",
            "jsonPath": "Asset.warrantyAvailable",
            "label": "ac.create.Warranty",
            "pattern": "",
            "type": "radio",
            "url": "",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "values": [{"label":"Yes", "value":true},{"label":"No", "value":false}],
            "defaultValue":true
          },
          {
            "name": "WarrantyExpiryDate",
            "jsonPath": "Asset.warrantyExpiryDate",
            "label": "ac.create.Warranty.expiry.date",
            "pattern": "",
            "type": "datePicker",
            "url": "",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
					{
            "name": "AssetDescription",
            "jsonPath": "Asset.description",
            "label": "ac.create.Asset.description",
            "pattern": "",
            "type": "textarea",
            "url": "",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"fullWidth":true
          },
          // {
          //   "name": "AssetAcountCode",
          //   "jsonPath": "Asset.assetAccount",
          //   "label": "ac.create.Asset.account.code",
          //   "pattern": "",
          //   "type": "singleValueList",
					// 	//"url": "",
          //   "url": "/egf-masters/accountcodepurposes/_search?tenantId=default&name=Fixed Assets|$..name|$..name",
          //   "isRequired": true,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "AccumulatedDepreciationAccount",
          //   "jsonPath": "Asset.accumulatedDepreciationAccount",
          //   "label": "ac.create.Accumulated.Depreciation.Account",
          //   "pattern": "",
          //   "type": "singleValueList",
          //   "url": "/egf-masters/accountcodepurposes/_search?tenantId=default&name=Accumulated Depreciation|$..name|$..name",
          //   "isRequired": true,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "RevaluationReserveAccount",
          //   "jsonPath": "Asset.revaluationReserveAccount",
          //   "label": "ac.create.Revaluation.Reserve.Account",
          //   "pattern": "",
          //   "type": "singleValueList",
          //   "url": "/egf-masters/accountcodepurposes/_search?tenantId=default&name=Revaluation Reserve Account|$..name|$..name",
          //   "isRequired": true,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "DepreciationExpensesAccount ",
          //   "jsonPath": "Asset.depreciationExpenseAccount",
          //   "label": "ac.create.Depreciation.Expenses.Account",
          //   "pattern": "",
          //   "type": "singleValueList",
          //   "url": "/egf-masters/accountcodepurposes/_search?tenantId=default&name=Depreciation Expense Account|$..name|$..name",
          //   "isRequired": true,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },

				]
			},
      // {
			// 	"name": "TableField",
      //   "jsonPath":"Asset",
			// 	"fields": [
          // {
          //   "name": "AnticipatedLifeOfAsset",
          //   "label": "Anticipated life of Asset",
          //   "type": "dynamicTable"
          //   "resultList": {
          //     "resultHeader": [{"label": "asset.create.test"}],
          //     "resultValues": [[{}, ], [], []]
          //   }
          // },



          // {
          //   "name": "AdditionDate",
          //   "jsonPath": "Asset.",
          //   "label": "ac.create.Addition.Date",
          //   "pattern": "",
          //   "type": "datePicker",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "AdditionValue",
          //   "jsonPath": "Asset.",
          //   "label": "ac.create.Addition.Value",
          //   "pattern": "",
          //   "type": "text",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "RevaluationDate",
          //   "jsonPath": "Asset.",
          //   "label": "ac.create.Revaluation.date",
          //   "pattern": "",
          //   "type": "datePicker",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "RevaluationValue",
          //   "jsonPath": "Asset.",
          //   "label": "ac.create.Revaluation.Value",
          //   "pattern": "",
          //   "type": "text",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "DepreciationDate",
          //   "jsonPath": "Asset.",
          //   "label": "ac.create.Depreciation.Date",
          //   "pattern": "",
          //   "type": "datePicker",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "DepreciationValue",
          //   "jsonPath": "Asset.",
          //   "label": "ac.create.Depreciation.Value",
          //   "pattern": "",
          //   "type": "text",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "Closing date",
          //   "jsonPath": "Asset.",
          //   "label": "ac.create.Closing.Date",
          //   "pattern": "",
          //   "type": "datePicker",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // },
          // {
          //   "name": "ClosingValue",
          //   "jsonPath": "Asset.",
          //   "label": "ac.create.Closing.written.Down.Value",
          //   "pattern": "",
          //   "type": "datePicker",
          //   "url": "",
          //   "isRequired": false,
          //   "isDisabled": false,
          //   "requiredErrMsg": "",
          //   "patternErrMsg": ""
          // }

			// 	]
			// }
		]
	}
}

export default dat;
