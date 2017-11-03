package org.egov.works.estimate.web.contract;

import java.math.BigDecimal;
import java.util.Objects;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * An Object that hold Abstract Estimate Detail for a given Abstract Estimate
 */
@ApiModel(description = "An Object that hold Abstract Estimate Detail for a given Abstract Estimate")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-11-03T07:36:47.547Z")

public class AbstractEstimateDetails   {
  @JsonProperty("id")
  private String id = null;

  @JsonProperty("tenantId")
  private String tenantId = null;

  @JsonProperty("abstractEstimate")
  private AbstractEstimate abstractEstimate = null;

  @JsonProperty("nameOfWork")
  private String nameOfWork = null;

  @JsonProperty("estimateAmount")
  private BigDecimal estimateAmount = null;

  @JsonProperty("estimateNumber")
  private String estimateNumber = null;

  @JsonProperty("grossAmountBilled")
  private Double grossAmountBilled = null;

  @JsonProperty("projectCode")
  private ProjectCode projectCode = null;

  @JsonProperty("abstractEstimateAppropriations")
  private EstimateAppropriation abstractEstimateAppropriations = null;

  @JsonProperty("documentDetails")
  private DocumentDetail documentDetails = null;

  @JsonProperty("auditDetails")
  private AuditDetails auditDetails = null;

  public AbstractEstimateDetails id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Unique Identifier of the Abstract Estimate Detail
   * @return id
  **/
  @ApiModelProperty(value = "Unique Identifier of the Abstract Estimate Detail")


  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public AbstractEstimateDetails tenantId(String tenantId) {
    this.tenantId = tenantId;
    return this;
  }

   /**
   * Tenant id of the Abstract Estimate Details
   * @return tenantId
  **/
  @ApiModelProperty(required = true, value = "Tenant id of the Abstract Estimate Details")
  @NotNull

 @Size(min=4,max=128)
  public String getTenantId() {
    return tenantId;
  }

  public void setTenantId(String tenantId) {
    this.tenantId = tenantId;
  }

  public AbstractEstimateDetails abstractEstimate(AbstractEstimate abstractEstimate) {
    this.abstractEstimate = abstractEstimate;
    return this;
  }

   /**
   * Reference to Abstract Estimate Object
   * @return abstractEstimate
  **/
  @ApiModelProperty(value = "Reference to Abstract Estimate Object")

  @Valid

  public AbstractEstimate getAbstractEstimate() {
    return abstractEstimate;
  }

  public void setAbstractEstimate(AbstractEstimate abstractEstimate) {
    this.abstractEstimate = abstractEstimate;
  }

  public AbstractEstimateDetails nameOfWork(String nameOfWork) {
    this.nameOfWork = nameOfWork;
    return this;
  }

   /**
   * Name Of Work of the Abstract Estimate
   * @return nameOfWork
  **/
  @ApiModelProperty(required = true, value = "Name Of Work of the Abstract Estimate")
  @NotNull

 @Pattern(regexp="[0-9a-zA-Z_@./#&+-/!(){}\",^$%*|=;:<>?`~ ]+") @Size(min=1,max=1024)
  public String getNameOfWork() {
    return nameOfWork;
  }

  public void setNameOfWork(String nameOfWork) {
    this.nameOfWork = nameOfWork;
  }

  public AbstractEstimateDetails estimateAmount(BigDecimal estimateAmount) {
    this.estimateAmount = estimateAmount;
    return this;
  }

   /**
   * Estimate amount for the Abstract Estimate
   * @return estimateAmount
  **/
  @ApiModelProperty(required = true, value = "Estimate amount for the Abstract Estimate")
  @NotNull

  @Valid

  public BigDecimal getEstimateAmount() {
    return estimateAmount;
  }

  public void setEstimateAmount(BigDecimal estimateAmount) {
    this.estimateAmount = estimateAmount;
  }

  public AbstractEstimateDetails estimateNumber(String estimateNumber) {
    this.estimateNumber = estimateNumber;
    return this;
  }

   /**
   * Estimate number of the Abstract Estimate
   * @return estimateNumber
  **/
  @ApiModelProperty(required = true, value = "Estimate number of the Abstract Estimate")
  @NotNull

 @Pattern(regexp="[a-zA-Z0-9-\\\\]+") @Size(min=1,max=50)
  public String getEstimateNumber() {
    return estimateNumber;
  }

  public void setEstimateNumber(String estimateNumber) {
    this.estimateNumber = estimateNumber;
  }

  public AbstractEstimateDetails grossAmountBilled(Double grossAmountBilled) {
    this.grossAmountBilled = grossAmountBilled;
    return this;
  }

   /**
   * Gross Billed amount of the Abstract Estimate Details. This attribute is required only if billsCreated flag is true for Abstract Estimate.
   * @return grossAmountBilled
  **/
  @ApiModelProperty(value = "Gross Billed amount of the Abstract Estimate Details. This attribute is required only if billsCreated flag is true for Abstract Estimate.")


  public Double getGrossAmountBilled() {
    return grossAmountBilled;
  }

  public void setGrossAmountBilled(Double grossAmountBilled) {
    this.grossAmountBilled = grossAmountBilled;
  }

  public AbstractEstimateDetails projectCode(ProjectCode projectCode) {
    this.projectCode = projectCode;
    return this;
  }

   /**
   * Project code object refernce for the Abstract Estimate
   * @return projectCode
  **/
  @ApiModelProperty(value = "Project code object refernce for the Abstract Estimate")

  @Valid

  public ProjectCode getProjectCode() {
    return projectCode;
  }

  public void setProjectCode(ProjectCode projectCode) {
    this.projectCode = projectCode;
  }

  public AbstractEstimateDetails abstractEstimateAppropriations(EstimateAppropriation abstractEstimateAppropriations) {
    this.abstractEstimateAppropriations = abstractEstimateAppropriations;
    return this;
  }

   /**
   * This object holds Budget Appropriation details for the Abstract Estimate
   * @return abstractEstimateAppropriations
  **/
  @ApiModelProperty(value = "This object holds Budget Appropriation details for the Abstract Estimate")

  @Valid

  public EstimateAppropriation getAbstractEstimateAppropriations() {
    return abstractEstimateAppropriations;
  }

  public void setAbstractEstimateAppropriations(EstimateAppropriation abstractEstimateAppropriations) {
    this.abstractEstimateAppropriations = abstractEstimateAppropriations;
  }

  public AbstractEstimateDetails documentDetails(DocumentDetail documentDetails) {
    this.documentDetails = documentDetails;
    return this;
  }

   /**
   * This object holds Budget any documents attached while creating Abstract Estimate or any documents generated from the system or any photographs captured for the Abstract Estimate.
   * @return documentDetails
  **/
  @ApiModelProperty(value = "This object holds Budget any documents attached while creating Abstract Estimate or any documents generated from the system or any photographs captured for the Abstract Estimate.")

  @Valid

  public DocumentDetail getDocumentDetails() {
    return documentDetails;
  }

  public void setDocumentDetails(DocumentDetail documentDetails) {
    this.documentDetails = documentDetails;
  }

  public AbstractEstimateDetails auditDetails(AuditDetails auditDetails) {
    this.auditDetails = auditDetails;
    return this;
  }

   /**
   * Get auditDetails
   * @return auditDetails
  **/
  @ApiModelProperty(value = "")

  @Valid

  public AuditDetails getAuditDetails() {
    return auditDetails;
  }

  public void setAuditDetails(AuditDetails auditDetails) {
    this.auditDetails = auditDetails;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AbstractEstimateDetails abstractEstimateDetails = (AbstractEstimateDetails) o;
    return Objects.equals(this.id, abstractEstimateDetails.id) &&
        Objects.equals(this.tenantId, abstractEstimateDetails.tenantId) &&
        Objects.equals(this.abstractEstimate, abstractEstimateDetails.abstractEstimate) &&
        Objects.equals(this.nameOfWork, abstractEstimateDetails.nameOfWork) &&
        Objects.equals(this.estimateAmount, abstractEstimateDetails.estimateAmount) &&
        Objects.equals(this.estimateNumber, abstractEstimateDetails.estimateNumber) &&
        Objects.equals(this.grossAmountBilled, abstractEstimateDetails.grossAmountBilled) &&
        Objects.equals(this.projectCode, abstractEstimateDetails.projectCode) &&
        Objects.equals(this.abstractEstimateAppropriations, abstractEstimateDetails.abstractEstimateAppropriations) &&
        Objects.equals(this.documentDetails, abstractEstimateDetails.documentDetails) &&
        Objects.equals(this.auditDetails, abstractEstimateDetails.auditDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, tenantId, abstractEstimate, nameOfWork, estimateAmount, estimateNumber, grossAmountBilled, projectCode, abstractEstimateAppropriations, documentDetails, auditDetails);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AbstractEstimateDetails {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    tenantId: ").append(toIndentedString(tenantId)).append("\n");
    sb.append("    abstractEstimate: ").append(toIndentedString(abstractEstimate)).append("\n");
    sb.append("    nameOfWork: ").append(toIndentedString(nameOfWork)).append("\n");
    sb.append("    estimateAmount: ").append(toIndentedString(estimateAmount)).append("\n");
    sb.append("    estimateNumber: ").append(toIndentedString(estimateNumber)).append("\n");
    sb.append("    grossAmountBilled: ").append(toIndentedString(grossAmountBilled)).append("\n");
    sb.append("    projectCode: ").append(toIndentedString(projectCode)).append("\n");
    sb.append("    abstractEstimateAppropriations: ").append(toIndentedString(abstractEstimateAppropriations)).append("\n");
    sb.append("    documentDetails: ").append(toIndentedString(documentDetails)).append("\n");
    sb.append("    auditDetails: ").append(toIndentedString(auditDetails)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}
