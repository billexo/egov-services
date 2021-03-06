var dat ={
  "legal.update": {
    "testhearing": true,
    "numCols": 4,
    "title":"hearingdetails.update.document.title",
    "useTimestamp": true,
    "objectName": "cases",
    "searchUrl": "/lcms-services/legalcase/case/_search?code={id}",
    "groups": [
      {
        "name": "CaseDetails",
        "label": "legal.create.group.title.CaseDetails",
        "fields": [
          {
            "name": "caseNo",
            "jsonPath": "cases[0].summon.caseNo",
            "label": "legal.create.caseNo",
            "type": "text",
            "isRequired": false,
            "isDisabled": true,
            "patternErrorMsg": ""
          },
          {
            name: "caseType",
            jsonPath: "cases[0].summon.caseType.code",
            label: "legal.create.caseType",
            type: "singleValueList",
            isRequired: true,
            isDisabled: true,
            patternErrorMsg: "",
            url:
              "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=caseType|$..code|$..name"
          },
          {
            name: "caseType",
            jsonPath: "cases[0].summon.caseCategory.code",
            label: "legal.create.caseCategory",
            type: "singleValueList",
            isRequired: true,
            isDisabled: true,
            patternErrorMsg: "",
            url:
              "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=caseCategory|$..code|$..name"
          },
         {
            name: "courtName",
            jsonPath: "cases[0].summon.courtName.code",
            label: "legal.create.courtName",
            type: "singleValueList",
            isRequired: true,
            isDisabled: true,
            patternErrorMsg: "",
            url:
              "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=court|$..code|$..name"
          },
          {
            "name": "caseDate",
            "jsonPath": "cases[0].caseRegistrationDate",
            "label": "legal.create.caseRegistrationDate",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": true,
            "patternErrorMsg": ""
          },
          {
            name: "departmentName",
            jsonPath: "cases[0].summon.departmentName.id",
            label: "legal.create.departmentName",
            type: "singleValueList",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: "",
            url: "/egov-common-masters/departments/_search?|$..id|$..name",
             depedants: [
              {
                jsonPath: "cases[0].departmentPerson",
                type: "dropDown",
                pattern:
                  "/hr-employee/employees/_search?tenantId=default&departmentId={cases[0].summon.departmentName.id}|$..name|$..name"
              }
            ]
          },
          {
            name: "departmentConcernedPerson",
            jsonPath: "cases[0].departmentPerson",
            label: "caseRegistration.create.departmentConcernedPerson",
            type: "singleValueList",
            isRequired: true,
            isDisabled: true,
            patternErrorMsg: "",
            defaultValue: [],
            url: ""
          },
          {
            "name": "hearingTime",
            "jsonPath": "cases[0].summon.hearingTime",
            "label": "legal.create.hearingTime",
            "type": "timePicker",
             isNumber:true,
            "isRequired": false,
            "isDisabled": true,
            "patternErrorMsg": ""
          },
          {
            "name": "hearingDate",
            "jsonPath": "cases[0].summon.hearingDate",
            "label": "legal.create.hearingDate",
            "type": "datePicker",
            "isRequired": false,
            "isDisabled": true,
            "patternErrorMsg": ""
          }
        ]
      },
      {
        "name": "hearingDetails",
        "label": "legal.create.group.title.hearingDetails",
        "fields": [
          {
            "name": "caseStatus",
            "jsonPath": "cases[0].hearingDetails[0].caseStatus.code",
            "label": "legal.create.caseStatus",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": "",
            url:"/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=caseStatus|$..code|$..name"
          },
          {
            "name": "caseFinalDecision",
            "jsonPath": "cases[0].hearingDetails[0].caseFinalDecision",
            "label": "legal.create.caseFinalDecision",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "caseJudgeMent",
            "jsonPath": "cases[0].hearingDetails[0].caseJudgeMent",
            "label": "legal.create.caseJudgement",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "nextHearingDate",
            "jsonPath": "cases[0].hearingDetails[0].nextHearingDate",
            "label": "legal.create.nextHearingDate",
            "type": "datePicker",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          },
          {
            "name": "nextHearingTime",
            "jsonPath": "cases[0].hearingDetails[0].nextHearingTime",
            "label": "legal.create.nextHearingTime",
            "type": "timePicker",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": ""
          }
        ]
      },
      {
        "name": "attendeeDetails",
        "label": "legal.create.group.title.attendeeDetails",
        "fields": [
          {
            "name": "attendeeDetails",
            "type": "tableList",
            "jsonPath": "cases[0].hearingDetails[0].attendees",
            "tableList": {
              "header": [
                {
                  "label": "legal.create.attendeeName"
                },
                {
                  "label": "legal.create.gender"
                },
                {
                  "label": "legal.create.mobileNo"
                },
                {
                  "label": "legal.create.address"
                }
              ],
              "values": [
                {
                  "name": "attendeeName",
                  "pattern": "",
                  "type": "text",
                  "jsonPath": "cases[0].hearingDetails[0].attendees[0].name",
                  "isRequired": true,
                  "isDisabled": false,
                  "url": ""
                },
                {
                  "name": "gender",
                  "jsonPath": "cases[0].hearingDetails[0].attendees[0].gender",
                   "type": "radio",
                  "isRequired": true,
                  "isDisabled": false,
                  "patternErrorMsg": "",
                  "values": [
                    {
                      "label": "legal.create.male",
                      "value": true
                    },
                    {
                      "label": "legal.create.female",
                      "value": false
                    }
                  ]
                },
                {
                  "name": "mobileNo",
                  "pattern": "",
                  "type": "mobileNumber",
                  "jsonPath": "cases[0].hearingDetails[0].attendees[0].mobileNumber",
                  "isRequired": true,
                  "isDisabled": false,
                  "patternErrMsg": "The Phone number structure is as follows: 999XXXX999 "
                },
                {
                  "name": "address",
                  "pattern": "",
                  "type": "text",
                  "jsonPath": "cases[0].hearingDetails[0].attendees[0].address.addressLine1",
                  "isRequired": true,
                  "isDisabled": false
                }
              ]
            }
          }
        ]
      },
      {
        "name": "judgeDetails",
        "label": "legal.create.group.title.judgeDetails",
        "fields": [
          {
            "type": "tableList",
            "jsonPath": "cases[0].hearingDetails[0].judges",
            "tableList": {
              "header": [
                {
                  "label": "legal.create.judgeName"
                },
                {
                  "label": "legal.create.gender"
                },
                {
                  "label": "legal.create.mobileNo"
                },
                {
                  "label": "legal.create.address"
                }
              ],
              "values": [
                {
                  "name": "attendeeName",
                  "pattern": "",
                  "type": "text",
                  "jsonPath": "cases[0].hearingDetails[0].judges[0].name",
                  "isRequired": true,
                  "isDisabled": false,
                  "url": ""
                },
                {
                  "name": "gender",
                  "jsonPath": "cases[0].hearingDetails[0].judges[0].gender",
                  "type": "radio",
                  "isRequired": true,
                  "isDisabled": false,
                  "patternErrorMsg": "",
                  "values": [
                    {
                      "label": "legal.create.male",
                      "value": true
                    },
                    {
                      "label": "legal.create.female",
                      "value": false
                    }
                  ]
                },
                {
                  "name": "mobileNo",
                  "pattern": "",
                  "type": "mobileNumber",
                  "jsonPath": "cases[0].hearingDetails[0].judges[0].mobileNumber",
                  "isRequired": true,
                  "isDisabled": false,
                  "patternErrMsg": "The Phone number structure is as follows: 999XXXX999 "
                },
                {
                  "name": "address",
                  "pattern": "",
                  "type": "text",
                  "jsonPath": "cases[0].hearingDetails[0].judges[0].address.addressLine1",
                  "isRequired": true,
                  "isDisabled": false
                }
              ]
            }
          }
        ]
      }
    ],
    "url": "/lcms-services/legalcase/hearingdetails/_create",
    "tenantIdRequired": true
  }
}
   export default dat;