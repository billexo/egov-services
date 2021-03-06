var dat = {
  "legal.update": {
    numCols: 4,
    title:"caseregistration.update.document.title",
    useTimestamp: true,
    objectName: "cases",
    searchUrl:
      "/lcms-services/legalcase/case/_search?code={id}",
    groups: [
      {
        name: "CaseTypeDetails",
        label: "legal.create.group.title.CaseTypeDetails",
        fields: [
          {
            name: "referenceNo",
            jsonPath: "cases[0].summon.summonReferenceNo",
            label: "legal.create.referenceNo",
            type: "text",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: ""
          },
          {
            name: "summonDate",
            jsonPath: "cases[0].summon.summonDate",
            label: "legal.create.summonDate",
            type: "datePicker",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: ""
          },
          {
            name: "year",
            jsonPath: "cases[0].summon.year",
            label: "legal.create.year",
            type: "singleValueList",
            isRequired: false,
            isDisabled: true,
            url:
              "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=year|$..code|$..name",
            patternErrorMsg: ""
          },
          {
            name: "caseType",
            jsonPath: "cases[0].summon.caseType.code",
            label: "legal.create.caseType",
            type: "singleValueList",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: "",
            url:
              "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=caseType|$..code|$..name"
          },
          {
            name: "plantiffName",
            jsonPath: "cases[0].summon.plantiffName",
            label: "legal.create.plantiffName",
            type: "text",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: ""
          },
          {
            name: "caseNo",
            jsonPath: "cases[0].summon.caseNo",
            label: "legal.create.caseNo",
            type: "text",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: ""
          },
          {
            name: "plantiffAddress",
            jsonPath: "cases[0].summon.plantiffAddress.addressLine1",
            label: "legal.create.plantiffAddress",
            type: "text",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: ""
          },
          {
            name: "caseDetails",
            jsonPath: "cases[0].summon.caseDetails",
            label: "legal.create.caseDetails",
            type: "text",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: ""
          },
          {
            name: "defendant",
            jsonPath: "cases[0].summon.defendant",
            label: "legal.create.defendant",
            type: "text",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: ""
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
            name: "courtName",
            jsonPath: "cases[0].summon.courtName.code",
            label: "legal.create.courtName",
            type: "singleValueList",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: "",
            url:
              "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=court|$..code|$..name"
          },
          {
            name: "hearingTime",
            jsonPath: "cases[0].summon.hearingTime",
            label: "legal.create.hearingTime",
            type: "timePicker",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: ""
          },
          {
            name: "hearingDate",
            jsonPath: "cases[0].summon.hearingDate",
            label: "legal.create.hearingDate",
            type: "datePicker",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: ""
          },
          {
            name: "side",
            jsonPath: "cases[0].summon.side.code",
            label: "legal.create.side",
            type: "singleValueList",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: "",
            url:
              "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=side|$..code|$..name"
          },
          {
            name: "ward",
            jsonPath: "cases[0].summon.ward",
            label: "legal.create.ward",
            type: "singleValueList",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: "",
            url:"/egov-location/boundarys/getByBoundaryType?tenantId=default&boundaryTypeId=10|$.Boundary.*.id|$.Boundary.*.name"
          },
          {
            name: "stamp",
            jsonPath: "cases[0].summon.register.code",
            label: "legal.create.stamp",
            type: "singleValueList",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: "",
            url:
              "lcms-services/legalcase/register/_search?|$..code|$..register"
          },
          {
            name: "bench",
            jsonPath: "cases[0].summon.bench.code",
            label: "legal.create.bench",
            type: "singleValueList",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: "",
            url:
              "/egov-mdms-service/v1/_get?&moduleName=lcms&masterName=bench|$..code|$..name"
          },
          {
            name: "sectionApplied",
            jsonPath: "cases[0].summon.sectionApplied",
            label: "legal.create.sectionApplied",
            type: "text",
            isRequired: false,
            isDisabled: true,
            patternErrorMsg: ""
          }
        ]
      },
      {
        name: "UploadDocument",
        label: "legal.create.group.title.DownloadDocument",
        fields: [
          {
            name: "File",
            jsonPath: "cases[0].summon.documents",
            type: "fileTable",
            isRequired: false,
            isDisabled: false,
            screenView:true,
            patternErrMsg: "",
            fileList:{
                name:"documentName",
                id:"fileStoreId"
            },
              fileCount:3
            
          }
        ]
      },
      {
        name: "caseDetails",
        label: "caseRegistration.create.group.title.caseDetails",
        fields: [
          {
            name: "referenceCaseNo",
            jsonPath: "cases[0].caseRefernceNo",
            label: "caseRegistration.create.referenceCaseNo",
            type: "text",
            isRequired: false,
            isDisabled: false,
            patternErrorMsg: ""
          },
          {
            name: "departmentConcernedPerson",
            jsonPath: "cases[0].departmentPerson",
            label: "caseRegistration.create.departmentConcernedPerson",
            type: "singleValueList",
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: "",
            defaultValue: [],
            url: ""
          },
          {
            name: "caseRegistrationDate",
            jsonPath: "cases[0].caseRegistrationDate",
            label: "caseRegistration.create.caseRegistrationDate",
            type: "datePicker",
            isRequired: true,
            isDisabled: false,
            patternErrorMsg: ""
          }
        ]
      }
    ],
    url: "/lcms-services/legalcase/case/_registration",
    tenantIdRequired: true
  }
};
export default dat;