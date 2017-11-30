var dat = {
  "swm.search":{
     "numCols":4,
     "useTimestamp":true,
     "objectName":"vehicleMaintenances",
     "url":"/swm-services/vehiclemaintenances/_search",
     "groups":[
      {
         "name":"VehicleMaintenanceDetails",
         "label":"swm.create.group.title.VehicleMaintenanceDetails",
         "fields":[
          {
            "name":"regNumber",
            "jsonPath":"regNumber",
            "label":"swm.vehicles.create.regNumber",
            "pattern":"",
            "type":"autoCompelete",
            "isDisabled":false,
            "defaultValue":"",
            "maxLength":12,
            "minLength":6,
            "patternErrorMsg":"",
            "url": "swm-services/vehicles/_search?|$.vehicles.*.regNumber|$.vehicles.*.regNumber",
          }
        ]
      }
    ],
     "result":{
        "header":[
           {
              "label":"swm.vehicles.create.vehicleType"
           },
           {
              "label":"swm.vehicles.create.regNumber"
           },
           {
              "label":"swm.create.maintenanceAfter"
           },
	   {
              "label":"swm.create.maintenanceUom"
           },
           {
              "label":"swm.create.downtimeforMaintenance"
           },
 	   {
              "label":"swm.create.downtimeforMaintenanceUom"
           }
        ],
        "values":[
           "vehicle.vehicleType.name",
           "vehicle.regNumber",
           "maintenanceAfter",
           "maintenanceUom",
           "downtimeforMaintenance",
	   "downtimeforMaintenanceUom"
        ],
        "resultPath":"vehicleMaintenances",
        "rowClickUrlUpdate":"/update/swm/vehiclemaintenances/{code}",
        "rowClickUrlView":"/view/swm/vehiclemaintenances/{code}"
     }
  },
  "swm.create":{
     "numCols":3,
     "useTimestamp":true,
     "objectName":"vehicleMaintenances",
     "idJsonPath": "vehicleMaintenances[0].code",
     "title": "swm.create.page.title.VehicleMaintenanceDetails",
     "groups":[
      {
         "name":"VehicleMaintenanceDetails",
         "fields":[
          {
            "name":"regNumber",
            "jsonPath":"vehicleMaintenances[0].vehicle.regNumber",
            "label":"swm.vehicles.create.regNumber",
            "pattern":"",
            "type":"autoCompelete",
            "isRequired":true,
            "isDisabled":false,
            "defaultValue":"",
            "maxLength":12,
            "minLength":6,
            "patternErrorMsg":"",
            "url": "swm-services/vehicles/_search?|$.vehicles.*.regNumber|$.vehicles.*.regNumber",
            "autoCompleteDependancy": {
              "autoCompleteUrl": "/swm-services/vehicles/_search?regNumber={vehicleMaintenances[0].vehicle.regNumber}",
              "autoFillFields": {
                "vehicleMaintenances[0].vehicle.vehicleType.code": "vehicles[0].vehicleType.name"
              }
            }
          },
          {
             "name":"name",
             "jsonPath":"vehicleMaintenances[0].vehicle.vehicleType.code",
             "label":"swm.vehicles.create.vehicleType",
             "pattern":"",
             "type":"text",
             "isRequired":false,
             "isDisabled":true,
             "defaultValue":"",
             "maxLength":128,
             "minLength":1,
             "patternErrorMsg":"",
             "url": ""
          },
          {
             "name":"maintenanceAfter",
             "jsonPath":"vehicleMaintenances[0].maintenanceAfter",
             "label":"swm.create.maintenanceAfter",
             "pattern":"",
             "type":"number",
             "isRequired":true,
             "isDisabled":false,
             "defaultValue": "",
             "patternErrorMsg":""
          },
          {
             "name":"maintenanceUom",
             "jsonPath":"vehicleMaintenances[0].maintenanceUom",
             "label":"swm.create.maintenanceUom",
             "pattern":"",
             "type":"singleValueList",
             "isRequired":true,
             "isDisabled":false,
             "defaultValue": [
                {
                  key: "Kms",
                  value: "Kms"
                },
                {
                  key: "Days",
                  value: "Days"
              }],
             "maxLength":5,
             "minLength":2,
             "patternErrorMsg":""
          },
          {
             "name":"downtimeforMaintenance",
             "jsonPath":"vehicleMaintenances[0].downtimeforMaintenance",
             "label":"swm.create.downtimeforMaintenance",
             "pattern":"",
             "type":"number",
             "isRequired":true,
             "isDisabled":false,
             "defaultValue":"",
             "patternErrorMsg":""
          },
          {
             "name":"downtimeforMaintenanceUom",
             "jsonPath":"vehicleMaintenances[0].downtimeforMaintenanceUom",
             "label":"swm.create.downtimeforMaintenanceUom",
             "pattern":"",
             "type":"singleValueList",
             "isRequired":true,
             "isDisabled":false,
             "defaultValue": [
                {
                  key: "Hrs",
                  value: "Hrs"
                },
                {
                  key: "Days",
                  value: "Days"
              }],
             "maxLength":5,
             "minLength":3,
             "patternErrorMsg":""
          }
        ]
      }
    ],
     "url":"/swm-services/vehiclemaintenances/_create",
     "tenantIdRequired":true
  },
  "swm.view":{
     "numCols":3,
     "useTimestamp":true,
     "objectName":"vehicleMaintenances",
     "searchUrl": "swm-services/vehiclemaintenances/_search?code={code}",     
     "groups":[
      {
         "name":"VehicleMaintenanceDetails",
         "label":"swm.create.group.title.VehicleMaintenanceDetails",
         "fields":[
          {
            "name":"regNumber",
            "jsonPath":"vehicleMaintenances[0].vehicle.regNumber",
            "label":"swm.vehicles.create.regNumber",
            "pattern":"",
            "type":"autoCompelete",
            "isRequired":true,
            "isDisabled":false,
            "defaultValue":"",
            "maxLength":12,
            "minLength":6,
            "patternErrorMsg":""
          },
          {
             "name":"name",
             "jsonPath":"vehicleMaintenances[0].vehicle.vehicleType.code",
             "label":"swm.vehicles.create.vehicleType",
             "pattern":"",
             "type":"text",
             "isRequired":false,
             "isDisabled":false,
             "defaultValue":"",
             "maxLength":128,
             "minLength":1,
             "patternErrorMsg":"",
             "url": ""
          },
          {
             "name":"maintenanceAfter",
             "jsonPath":"vehicleMaintenances[0].maintenanceAfter",
             "label":"swm.create.maintenanceAfter",
             "pattern":"",
             "type":"number",
             "isRequired":true,
             "isDisabled":false,
             "defaultValue": "",
             "patternErrorMsg":""
          },
          {
             "name":"maintenanceUom",
             "jsonPath":"vehicleMaintenances[0].maintenanceUom",
             "label":"swm.create.maintenanceUom",
             "pattern":"",
             "type":"singleValueList",
             "isRequired":true,
             "isDisabled":false,
             "defaultValue": [
                {
                  key: "Kms",
                  value: "Kms"
                },
                {
                  key: "Days",
                  value: "Days"
              }],
             "maxLength":5,
             "minLength":2,
             "patternErrorMsg":""
          },
          {
             "name":"downtimeforMaintenance",
             "jsonPath":"vehicleMaintenances[0].downtimeforMaintenance",
             "label":"swm.create.downtimeforMaintenance",
             "pattern":"",
             "type":"number",
             "isRequired":true,
             "isDisabled":false,
             "defaultValue":"",
             "patternErrorMsg":""
          },
          {
             "name":"downtimeforMaintenanceUom",
             "jsonPath":"vehicleMaintenances[0].downtimeforMaintenanceUom",
             "label":"swm.create.downtimeforMaintenanceUom",
             "pattern":"",
             "type":"singleValueList",
             "isRequired":true,
             "isDisabled":false,
             "defaultValue": [
                {
                  key: "Hrs",
                  value: "Hrs"
                },
                {
                  key: "Days",
                  value: "Days"
              }],
             "maxLength":5,
             "minLength":3,
             "patternErrorMsg":""
          }
        ]
      }
   ],
     "tenantIdRequired":true,
     "url":"/swm-services/vehiclemaintenances/_search?code={code}"
  },
  "swm.update":{
     "numCols": 3,
     "useTimestamp":true,
     "objectName":"vehicleMaintenances",
     "searchUrl": "swm-services/vehicleMaintenances/_search?code={code}",
     "idJsonPath": "vehicleMaintenances[0].code",
     "groups":[
        {
           "name":"VehicleMaintenanceDetails",
           "label":"swm.create.group.title.VehicleMaintenanceDetails",
           "fields":[
            {
              "name":"regNumber",
              "jsonPath":"vehicleMaintenances[0].vehicle.regNumber",
              "label":"swm.vehicles.create.regNumber",
              "pattern":"",
              "type":"autoCompelete",
              "isRequired":true,
              "isDisabled":true,
              "defaultValue":"",
              "maxLength":12,
              "minLength":6,
              "patternErrorMsg":"",
              "url": "swm-services/vehicles/_search?|$.vehicles.*.regNumber|$.vehicles.*.regNumber",
              "autoCompleteDependancy": {
                "autoCompleteUrl": "/swm-services/vehicles/_search?regNumber={vehicleMaintenances[0].vehicle.regNumber}",
                "autoFillFields": {
                  "vehicleMaintenances[0].vehicle.vehicleType.code": "vehicles[0].vehicleType.name"
                }
              }
            },
            {
               "name":"name",
               "jsonPath":"vehicleMaintenances[0].vehicle.vehicleType.code",
               "label":"swm.vehicles.create.vehicleType",
               "pattern":"",
               "type":"text",
               "isRequired":false,
               "isDisabled":true,
               "defaultValue":"",
               "maxLength":128,
               "minLength":1,
               "patternErrorMsg":"",
               "url": ""
            },
            {
               "name":"maintenanceAfter",
               "jsonPath":"vehicleMaintenances[0].maintenanceAfter",
               "label":"swm.create.maintenanceAfter",
               "pattern":"",
               "type":"number",
               "isRequired":true,
               "isDisabled":false,
               "defaultValue": "",
               "patternErrorMsg":""
            },
            {
               "name":"maintenanceUom",
               "jsonPath":"vehicleMaintenances[0].maintenanceUom",
               "label":"swm.create.maintenanceUom",
               "pattern":"",
               "type":"singleValueList",
               "isRequired":true,
               "isDisabled":false,
               "defaultValue": [
                  {
                    key: "Kms",
                    value: "Kms"
                  },
                  {
                    key: "Days",
                    value: "Days"
                }],
               "maxLength":5,
               "minLength":2,
               "patternErrorMsg":""
            },
            {
               "name":"downtimeforMaintenance",
               "jsonPath":"vehicleMaintenances[0].downtimeforMaintenance",
               "label":"swm.create.downtimeforMaintenance",
               "pattern":"",
               "type":"number",
               "isRequired":true,
               "isDisabled":false,
               "defaultValue":"",
               "patternErrorMsg":""
            },
            {
               "name":"downtimeforMaintenanceUom",
               "jsonPath":"vehicleMaintenances[0].downtimeforMaintenanceUom",
               "label":"swm.create.downtimeforMaintenanceUom",
               "pattern":"",
               "type":"singleValueList",
               "isRequired":true,
               "isDisabled":false,
               "defaultValue": [
                  {
                    key: "Hrs",
                    value: "Hrs"
                  },
                  {
                    key: "Days",
                    value: "Days"
                }],
               "maxLength":5,
               "minLength":3,
               "patternErrorMsg":""
            }
          ]
        }
     ],
     "url":"/swm-services/vehiclemaintenances/_update",
     "tenantIdRequired":true,
     "searchUrl":"/swm-services/vehiclemaintenances/_search?code={code}"
  }
}
 export default dat;