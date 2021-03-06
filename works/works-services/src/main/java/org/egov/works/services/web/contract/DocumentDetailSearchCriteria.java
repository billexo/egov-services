package org.egov.works.services.web.contract;

import lombok.*;

import java.util.List;

import org.egov.works.services.web.contract.DocumentDetailSearchRequest;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DocumentDetailSearchCriteria {

    private String tenantId;

    private List<String> objectIds;

    private List<String> ids;

    private Integer pageSize;

    private Integer pageNumber;

    private String sortProperty;

    public DocumentDetailSearchCriteria toDomain(final DocumentDetailSearchRequest documentDetailSearchRequest) {
        return DocumentDetailSearchCriteria.builder().tenantId(documentDetailSearchRequest.getTenantId())
                .objectIds(documentDetailSearchRequest.getObjectIds())
                .ids(documentDetailSearchRequest.getIds())
                .pageSize(documentDetailSearchRequest.getPageSize())
                .pageNumber(documentDetailSearchRequest.getPageNumber())
                .sortProperty(documentDetailSearchRequest.getSortProperty()).build();
    }
 }
