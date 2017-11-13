INSERT INTO eg_wf_types (id,  type, link, createdby, createddate, lastmodifiedby, lastmodifieddate, typefqn, displayname, version, tenantid,enabled,grouped) values (nextval('seq_eg_wf_types'), 'SpilloverDetailedEstimate', '/works-estimate/detailedestimates/_search?tenantId=:tenantId&ids=:ID', 1, now(), 1, now(), 'org.egov.works.detailedestimate.entity.DetailedEstimate', 'Spillover Detailed Estimate', 0, 'default',true,true);

INSERT INTO EG_WF_MATRIX (id, department, objecttype, currentstate, currentstatus, pendingactions, currentdesignation, additionalrule, nextstate, nextaction,nextdesignation, nextstatus, validactions, fromqty, toqty, fromdate, todate, tenantid) VALUES (nextval('seq_eg_wf_matrix'), 'ANY', 'SpilloverDetailedEstimate', 'NEW', NULL, NULL, NULL, NULL, 'CREATED', 'Pending Approval', NULL, 'CREATED', 'Forward', 0, NULL, now(), now(), 'default');
INSERT INTO EG_WF_MATRIX (id, department, objecttype, currentstate, currentstatus, pendingactions, currentdesignation, additionalrule, nextstate, nextaction,nextdesignation, nextstatus, validactions, fromqty, toqty, fromdate, todate, tenantid) VALUES (nextval('seq_eg_wf_matrix'), 'ANY', 'SpilloverDetailedEstimate', 'CREATED', NULL, 'Pending Approval', NULL, NULL, 'APPROVED', 'END', NULL, NULL, 'Approve,Reject', 0, NULL, now(), now(), 'default');