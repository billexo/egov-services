insert into eg_roleaction(roleCode,actionid,tenantid)values('ULB Operator', (select id from eg_action where name = 'ViewAssetService' and tenantId='default' ),'default');

insert into eg_roleaction(roleCode,actionid,tenantid)values('Property Verifier', (select id from eg_action where name = 'ViewAssetService' and tenantId='default' ),'default');

insert into eg_roleaction(roleCode,actionid,tenantid)values('Property Approver', (select id from eg_action where name = 'ViewAssetService' and tenantId='default' ),'default');

insert into eg_roleaction(roleCode,actionid,tenantid)values('ULB Operator', (select id from eg_action where name = 'ViewAssetCategoryService' and tenantId='default' ),'default');

insert into eg_roleaction(roleCode,actionid,tenantid)values('Property Verifier', (select id from eg_action where name = 'ViewAssetCategoryService' and tenantId='default' ),'default');

insert into eg_roleaction(roleCode,actionid,tenantid)values('Property Approver', (select id from eg_action where name = 'ViewAssetCategoryService' and tenantId='default' ),'default');

