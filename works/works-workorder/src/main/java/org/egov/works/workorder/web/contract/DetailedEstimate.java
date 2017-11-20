package org.egov.works.workorder.web.contract;

import java.math.BigDecimal;
import java.util.Objects;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.egov.works.commons.web.contract.Beneficiary;
import org.egov.works.commons.web.contract.NatureOfWork;
import org.egov.works.commons.web.contract.TypeOfWork;
import org.egov.works.commons.web.contract.WorkCategory;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * An Object holds the basic data for a Detailed Estimate
 */
@ApiModel(description = "An Object holds the basic data for a Detailed Estimate")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-11-14T10:33:20.569Z")

public class DetailedEstimate {
	@JsonProperty("id")
	private String id = null;

	@JsonProperty("tenantId")
	private String tenantId = null;

	@JsonProperty("estimateNumber")
	private String estimateNumber = null;

	@JsonProperty("estimateDate")
	private Long estimateDate = null;

	@JsonProperty("nameOfWork")
	private String nameOfWork = null;

	@JsonProperty("description")
	private String description = null;

	@JsonProperty("department")
	private Department department = null;

	@JsonProperty("adminSanctionNumber")
	private String adminSanctionNumber = null;

	@JsonProperty("adminSanctionDate")
	private Long adminSanctionDate = null;

	@JsonProperty("adminSanctionBy")
	private User adminSanctionBy = null;

	@JsonProperty("status")
	private DetailedEstimateStatus status = null;

	@JsonProperty("workValue")
	private BigDecimal workValue = null;

	@JsonProperty("estimateValue")
	private BigDecimal estimateValue = null;

	@JsonProperty("parent")
	private String parent = null;

	@JsonProperty("copiedFrom")
	private String copiedFrom = null;

	@JsonProperty("approvedDate")
	private Long approvedDate = null;

	@JsonProperty("approvedBy")
	private User approvedBy = null;

	@JsonProperty("copiedEstimate")
	private Boolean copiedEstimate = false;

	@JsonProperty("beneficiary")
	private Beneficiary beneficiary = null;

	@JsonProperty("worksType")
	private TypeOfWork worksType = null;

	@JsonProperty("worksSubtype")
	private TypeOfWork worksSubtype = null;

	@JsonProperty("natureOfWork")
	private NatureOfWork natureOfWork = null;

	@JsonProperty("ward")
	private Boundary ward = null;

	@JsonProperty("location")
	private String location = null;

	@JsonProperty("latitude")
	private Double latitude = null;

	@JsonProperty("longitude")
	private Double longitude = null;

	@JsonProperty("workCategory")
	private WorkCategory workCategory = null;

	@JsonProperty("locality")
	private Boundary locality = null;

	@JsonProperty("councilResolutionNumber")
	private String councilResolutionNumber = null;

	@JsonProperty("councilResolutionDate")
	private Long councilResolutionDate = null;

	@JsonProperty("workOrderCreated")
	private Boolean workOrderCreated = false;

	@JsonProperty("billsCreated")
	private Boolean billsCreated = false;

	@JsonProperty("spillOverFlag")
	private Boolean spillOverFlag = false;

	@JsonProperty("grossAmountBilled")
	private BigDecimal grossAmountBilled = null;

	@JsonProperty("cancellationReason")
	private String cancellationReason = null;

	@JsonProperty("cancellationRemarks")
	private String cancellationRemarks = null;

	@JsonProperty("totalIncludingRE")
	private BigDecimal totalIncludingRE = null;

	public DetailedEstimate id(String id) {
		this.id = id;
		return this;
	}

	/**
	 * Unique Identifier of the Detailed Estimate
	 * 
	 * @return id
	 **/
	@ApiModelProperty(value = "Unique Identifier of the Detailed Estimate")

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public DetailedEstimate tenantId(String tenantId) {
		this.tenantId = tenantId;
		return this;
	}

	/**
	 * Tenant id of the Detailed Estimate
	 * 
	 * @return tenantId
	 **/
	@ApiModelProperty(required = true, value = "Tenant id of the Detailed Estimate")
	@NotNull

	@Size(min = 2, max = 128)
	public String getTenantId() {
		return tenantId;
	}

	public void setTenantId(String tenantId) {
		this.tenantId = tenantId;
	}

	public DetailedEstimate estimateNumber(String estimateNumber) {
		this.estimateNumber = estimateNumber;
		return this;
	}

	/**
	 * Unique number for the Detailed Estimate. If the detailed estimate is
	 * spillover then the Detailed Estimate number is user entered. Otherwise it
	 * is auto generated. This field is allowed to edit during rejected status
	 * or drafts for Spillover detailed estimates.
	 * 
	 * @return estimateNumber
	 **/
	@ApiModelProperty(required = true, value = "Unique number for the Detailed Estimate. If the detailed estimate is spillover then the Detailed Estimate number is user entered. Otherwise it is auto generated. This field is allowed to edit during rejected status or drafts for Spillover detailed estimates.")
	// @NotNull
	// TODO from UI its not mandatory

	@Pattern(regexp = "[a-zA-Z0-9-//]+")
	@Size(max = 50)
	public String getEstimateNumber() {
		return estimateNumber;
	}

	public void setEstimateNumber(String estimateNumber) {
		this.estimateNumber = estimateNumber;
	}

	public DetailedEstimate estimateDate(Long estimateDate) {
		this.estimateDate = estimateDate;
		return this;
	}

	/**
	 * Epoch time of the Detailed Estimate Created. Default the current date for
	 * new detailed estimates and do not allow to modify. This field is user
	 * entered for spillover detailed estimates. Allowed to edit during rejected
	 * status or drafts for Spillover Estimates. Future date is not allowed to
	 * enter in this field. Detailed Estimate date should be on or after the
	 * Admin Sanction date of Abstract Estimate. If the date is modified after
	 * the activities(Schedule A) are added from drafts - then reset the
	 * activities(Schedule A) with a warning message.
	 * 
	 * @return estimateDate
	 **/
	@ApiModelProperty(required = true, value = "Epoch time of the Detailed Estimate Created. Default the current date for new detailed estimates and do not allow to modify. This field is user entered for spillover detailed estimates. Allowed to edit during rejected status or drafts for Spillover Estimates. Future date is not allowed to enter in this field. Detailed Estimate date should be on or after the Admin Sanction date of Abstract Estimate. If the date is modified after the activities(Schedule A) are added from drafts - then reset the activities(Schedule A) with a warning message.")
	@NotNull

	public Long getEstimateDate() {
		return estimateDate;
	}

	public void setEstimateDate(Long estimateDate) {
		this.estimateDate = estimateDate;
	}

	public DetailedEstimate nameOfWork(String nameOfWork) {
		this.nameOfWork = nameOfWork;
		return this;
	}

	/**
	 * name of the work of Detailed Estimate Details
	 * 
	 * @return nameOfWork
	 **/
	@ApiModelProperty(required = true, value = "name of the work of Detailed Estimate Details")
	@NotNull

	@Pattern(regexp = "[0-9a-zA-Z_@./#&+-/!(){}\",^$%*|=;:<>?`~ ]+")
	@Size(min = 1, max = 1024)
	public String getNameOfWork() {
		return nameOfWork;
	}

	public void setNameOfWork(String nameOfWork) {
		this.nameOfWork = nameOfWork;
	}

	public DetailedEstimate description(String description) {
		this.description = description;
		return this;
	}

	/**
	 * description for the Detailed Estimate
	 * 
	 * @return description
	 **/
	@ApiModelProperty(required = true, value = "description for the Detailed Estimate")
	@NotNull

	@Pattern(regexp = "[0-9a-zA-Z_@./#&+-/!(){}\",^$%*|=;:<>?`~ ]+")
	@Size(min = 1, max = 1024)
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public DetailedEstimate department(Department department) {
		this.department = department;
		return this;
	}

	/**
	 * Department for which Detailed Estimate belongs to
	 * 
	 * @return department
	 **/
	@ApiModelProperty(required = true, value = "Department for which Detailed Estimate belongs to")
	@NotNull

	// @Valid

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	public DetailedEstimate adminSanctionNumber(String adminSanctionNumber) {
		this.adminSanctionNumber = adminSanctionNumber;
		return this;
	}

	/**
	 * Unique number after admin sanction for the Detailed Estimate
	 * 
	 * @return adminSanctionNumber
	 **/
	@ApiModelProperty(value = "Unique number after admin sanction for the Detailed Estimate")

	@Pattern(regexp = "[a-zA-Z0-9-\\\\]+")
	@Size(max = 50)
	public String getAdminSanctionNumber() {
		return adminSanctionNumber;
	}

	public void setAdminSanctionNumber(String adminSanctionNumber) {
		this.adminSanctionNumber = adminSanctionNumber;
	}

	public DetailedEstimate adminSanctionDate(Long adminSanctionDate) {
		this.adminSanctionDate = adminSanctionDate;
		return this;
	}

	/**
	 * Epoch time of when the admin santion is done. Admin Sanctioned date
	 * should be on or after the Detailed Estimate date.
	 * 
	 * @return adminSanctionDate
	 **/
	@ApiModelProperty(value = "Epoch time of when the admin santion is done. Admin Sanctioned date should be on or after the Detailed Estimate date.")

	public Long getAdminSanctionDate() {
		return adminSanctionDate;
	}

	public void setAdminSanctionDate(Long adminSanctionDate) {
		this.adminSanctionDate = adminSanctionDate;
	}

	public DetailedEstimate adminSanctionBy(User adminSanctionBy) {
		this.adminSanctionBy = adminSanctionBy;
		return this;
	}

	/**
	 * User who admin sanctioned Detailed Estimate
	 * 
	 * @return adminSanctionBy
	 **/
	@ApiModelProperty(value = "User who admin sanctioned Detailed Estimate")

	@Valid

	public User getAdminSanctionBy() {
		return adminSanctionBy;
	}

	public void setAdminSanctionBy(User adminSanctionBy) {
		this.adminSanctionBy = adminSanctionBy;
	}

	public DetailedEstimate status(DetailedEstimateStatus status) {
		this.status = status;
		return this;
	}

	/**
	 * Status of the Detailed Estimate
	 * 
	 * @return status
	 **/
	@ApiModelProperty(required = true, value = "Status of the Detailed Estimate")
	@NotNull

	@Valid

	public DetailedEstimateStatus getStatus() {
		return status;
	}

	public void setStatus(DetailedEstimateStatus status) {
		this.status = status;
	}

	public DetailedEstimate workValue(BigDecimal workValue) {
		this.workValue = workValue;
		return this;
	}

	/**
	 * Work value(Sum of SOR and NON SOR) of the Detailed Estimate
	 * 
	 * @return workValue
	 **/
	@ApiModelProperty(value = "Work value(Sum of SOR and NON SOR) of the Detailed Estimate")

	@Valid

	public BigDecimal getWorkValue() {
		return workValue;
	}

	public void setWorkValue(BigDecimal workValue) {
		this.workValue = workValue;
	}

	public DetailedEstimate estimateValue(BigDecimal estimateValue) {
		this.estimateValue = estimateValue;
		return this;
	}

	/**
	 * Estimate value (Sum of Schedule A and Schedule B) of the Detailed
	 * Estimate which excludes Estimate deductions.
	 * 
	 * @return estimateValue
	 **/
	@ApiModelProperty(value = "Estimate value (Sum of Schedule A and Schedule B) of the Detailed Estimate which excludes Estimate deductions.")

	@Valid

	public BigDecimal getEstimateValue() {
		return estimateValue;
	}

	public void setEstimateValue(BigDecimal estimateValue) {
		this.estimateValue = estimateValue;
	}

	public DetailedEstimate parent(String parent) {
		this.parent = parent;
		return this;
	}

	/**
	 * Parent Detailed Estimate Reference. This represents the Parent Estimate
	 * reference for the Revision Estimate.
	 * 
	 * @return parent
	 **/
	@ApiModelProperty(value = "Parent Detailed Estimate Reference. This represents the Parent Estimate reference for the Revision Estimate.")

	public String getParent() {
		return parent;
	}

	public void setParent(String parent) {
		this.parent = parent;
	}

	public DetailedEstimate copiedFrom(String copiedFrom) {
		this.copiedFrom = copiedFrom;
		return this;
	}

	/**
	 * Reference of the Detailed Estimate for teh Copy Estimate
	 * 
	 * @return copiedFrom
	 **/
	@ApiModelProperty(value = "Reference of the Detailed Estimate for teh Copy Estimate")

	public String getCopiedFrom() {
		return copiedFrom;
	}

	public void setCopiedFrom(String copiedFrom) {
		this.copiedFrom = copiedFrom;
	}

	public DetailedEstimate approvedDate(Long approvedDate) {
		this.approvedDate = approvedDate;
		return this;
	}

	/**
	 * Epoch time of when Detailed Estimate created
	 * 
	 * @return approvedDate
	 **/
	@ApiModelProperty(value = "Epoch time of when Detailed Estimate created")

	public Long getApprovedDate() {
		return approvedDate;
	}

	public void setApprovedDate(Long approvedDate) {
		this.approvedDate = approvedDate;
	}

	public DetailedEstimate approvedBy(User approvedBy) {
		this.approvedBy = approvedBy;
		return this;
	}

	/**
	 * User who approved the Detailed Estimate
	 * 
	 * @return approvedBy
	 **/
	@ApiModelProperty(value = "User who approved the Detailed Estimate")

	@Valid

	public User getApprovedBy() {
		return approvedBy;
	}

	public void setApprovedBy(User approvedBy) {
		this.approvedBy = approvedBy;
	}

	public DetailedEstimate copiedEstimate(Boolean copiedEstimate) {
		this.copiedEstimate = copiedEstimate;
		return this;
	}

	/**
	 * Boolean value to identify whether the Detailed Estimate is copied from
	 * another estimate.
	 * 
	 * @return copiedEstimate
	 **/
	@ApiModelProperty(value = "Boolean value to identify whether the Detailed Estimate is copied from another estimate.")

	public Boolean getCopiedEstimate() {
		return copiedEstimate;
	}

	public void setCopiedEstimate(Boolean copiedEstimate) {
		this.copiedEstimate = copiedEstimate;
	}

	public DetailedEstimate beneficiary(Beneficiary beneficiary) {
		this.beneficiary = beneficiary;
		return this;
	}

	/**
	 * The Beneficiary of this work
	 * 
	 * @return beneficiary
	 **/
	@ApiModelProperty(value = "The Beneficiary of this work")

	@Valid

	public Beneficiary getBeneficiary() {
		return beneficiary;
	}

	public void setBeneficiary(Beneficiary beneficiary) {
		this.beneficiary = beneficiary;
	}

	public DetailedEstimate worksType(TypeOfWork worksType) {
		this.worksType = worksType;
		return this;
	}

	/**
	 * The Type of work for which this Detailed Estimate belongs to
	 * 
	 * @return worksType
	 **/
	@ApiModelProperty(required = true, value = "The Type of work for which this Detailed Estimate belongs to")
	@NotNull

	// @Valid
	// TODO Handle only code validation

	public TypeOfWork getWorksType() {
		return worksType;
	}

	public void setWorksType(TypeOfWork worksType) {
		this.worksType = worksType;
	}

	public DetailedEstimate worksSubtype(TypeOfWork worksSubtype) {
		this.worksSubtype = worksSubtype;
		return this;
	}

	/**
	 * The Sub Type of work for which this Detailed Estimate belongs to
	 * 
	 * @return worksSubtype
	 **/
	@ApiModelProperty(value = "The Sub Type of work for which this Detailed Estimate belongs to")

	// @Valid
	// TODO Handle only code validation

	public TypeOfWork getWorksSubtype() {
		return worksSubtype;
	}

	public void setWorksSubtype(TypeOfWork worksSubtype) {
		this.worksSubtype = worksSubtype;
	}

	public DetailedEstimate natureOfWork(NatureOfWork natureOfWork) {
		this.natureOfWork = natureOfWork;
		return this;
	}

	/**
	 * The Nature of work for which this Detailed Estimate belongs to
	 * 
	 * @return natureOfWork
	 **/
	@ApiModelProperty(required = true, value = "The Nature of work for which this Detailed Estimate belongs to")
	@NotNull

	// @Valid

	public NatureOfWork getNatureOfWork() {
		return natureOfWork;
	}

	public void setNatureOfWork(NatureOfWork natureOfWork) {
		this.natureOfWork = natureOfWork;
	}

	public DetailedEstimate ward(Boundary ward) {
		this.ward = ward;
		return this;
	}

	/**
	 * Ward of the Detailed Estimate
	 * 
	 * @return ward
	 **/
	@ApiModelProperty(required = true, value = "Ward of the Detailed Estimate")
	@NotNull

	// @Valid
	// TODO code is required

	public Boundary getWard() {
		return ward;
	}

	public void setWard(Boundary ward) {
		this.ward = ward;
	}

	public DetailedEstimate location(String location) {
		this.location = location;
		return this;
	}

	/**
	 * Location of the Detailed Estimate where the work is executed
	 * 
	 * @return location
	 **/
	@ApiModelProperty(value = "Location of the Detailed Estimate where the work is executed")

	@Pattern(regexp = "[0-9a-zA-Z_@./#&+-/!(){}\",^$%*|=;:<>?`~ ]+")
	@Size(max = 512)
	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public DetailedEstimate latitude(Double latitude) {
		this.latitude = latitude;
		return this;
	}

	/**
	 * Latitude of the location
	 * 
	 * @return latitude
	 **/
	@ApiModelProperty(value = "Latitude of the location")

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public DetailedEstimate longitude(Double longitude) {
		this.longitude = longitude;
		return this;
	}

	/**
	 * Longitude of the location
	 * 
	 * @return longitude
	 **/
	@ApiModelProperty(value = "Longitude of the location")

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public DetailedEstimate workCategory(WorkCategory workCategory) {
		this.workCategory = workCategory;
		return this;
	}

	/**
	 * The Work Category of the Detailed Estimate
	 * 
	 * @return workCategory
	 **/
	@ApiModelProperty(value = "The Work Category of the Detailed Estimate")

	@Valid

	public WorkCategory getWorkCategory() {
		return workCategory;
	}

	public void setWorkCategory(WorkCategory workCategory) {
		this.workCategory = workCategory;
	}

	public DetailedEstimate locality(Boundary locality) {
		this.locality = locality;
		return this;
	}

	/**
	 * The Locality in which the Detailed Estimate belongs to
	 * 
	 * @return locality
	 **/
	@ApiModelProperty(value = "The Locality in which the Detailed Estimate belongs to")

	// @Valid

	public Boundary getLocality() {
		return locality;
	}

	public void setLocality(Boundary locality) {
		this.locality = locality;
	}

	public DetailedEstimate councilResolutionNumber(String councilResolutionNumber) {
		this.councilResolutionNumber = councilResolutionNumber;
		return this;
	}

	/**
	 * Council resolution number of the Detailed Estimate
	 * 
	 * @return councilResolutionNumber
	 **/
	@ApiModelProperty(value = "Council resolution number of the Detailed Estimate")

	@Pattern(regexp = "[a-zA-Z0-9-\\\\]+")
	@Size(max = 50)
	public String getCouncilResolutionNumber() {
		return councilResolutionNumber;
	}

	public void setCouncilResolutionNumber(String councilResolutionNumber) {
		this.councilResolutionNumber = councilResolutionNumber;
	}

	public DetailedEstimate councilResolutionDate(Long councilResolutionDate) {
		this.councilResolutionDate = councilResolutionDate;
		return this;
	}

	/**
	 * Epoch time of the council resolution date. The future date is now
	 * allowed.
	 * 
	 * @return councilResolutionDate
	 **/
	@ApiModelProperty(value = "Epoch time of the council resolution date. The future date is now allowed.")

	public Long getCouncilResolutionDate() {
		return councilResolutionDate;
	}

	public void setCouncilResolutionDate(Long councilResolutionDate) {
		this.councilResolutionDate = councilResolutionDate;
	}

	public DetailedEstimate workOrderCreated(Boolean workOrderCreated) {
		this.workOrderCreated = workOrderCreated;
		return this;
	}

	/**
	 * Boolean value to identify whether the work order created or not for
	 * spillover data.
	 * 
	 * @return workOrderCreated
	 **/
	@ApiModelProperty(value = "Boolean value to identify whether the work order created or not for spillover data.")

	public Boolean getWorkOrderCreated() {
		return workOrderCreated;
	}

	public void setWorkOrderCreated(Boolean workOrderCreated) {
		this.workOrderCreated = workOrderCreated;
	}

	public DetailedEstimate billsCreated(Boolean billsCreated) {
		this.billsCreated = billsCreated;
		return this;
	}

	/**
	 * Boolean value to identify whether the bills created or not for spillover
	 * data. The grossAmountBilled field needs to be shown if the billsCreated
	 * flag is true.
	 * 
	 * @return billsCreated
	 **/
	@ApiModelProperty(value = "Boolean value to identify whether the bills created or not for spillover data. The grossAmountBilled field needs to be shown if the billsCreated flag is true.")

	public Boolean getBillsCreated() {
		return billsCreated;
	}

	public void setBillsCreated(Boolean billsCreated) {
		this.billsCreated = billsCreated;
	}

	public DetailedEstimate spillOverFlag(Boolean spillOverFlag) {
		this.spillOverFlag = spillOverFlag;
		return this;
	}

	/**
	 * Boolean value to identify whether the Detailed Estimate is spillover or
	 * not.
	 * 
	 * @return spillOverFlag
	 **/
	@ApiModelProperty(value = "Boolean value to identify whether the Detailed Estimate is spillover or not.")

	public Boolean getSpillOverFlag() {
		return spillOverFlag;
	}

	public void setSpillOverFlag(Boolean spillOverFlag) {
		this.spillOverFlag = spillOverFlag;
	}

	public DetailedEstimate grossAmountBilled(BigDecimal grossAmountBilled) {
		this.grossAmountBilled = grossAmountBilled;
		return this;
	}

	/**
	 * Gross Amount Billed if billsCreated flag is true. This attribute is
	 * required only if billsCreated flag is true.
	 * 
	 * @return grossAmountBilled
	 **/
	@ApiModelProperty(value = "Gross Amount Billed if billsCreated flag is true. This attribute is required only if billsCreated flag is true.")

	@Valid

	public BigDecimal getGrossAmountBilled() {
		return grossAmountBilled;
	}

	public void setGrossAmountBilled(BigDecimal grossAmountBilled) {
		this.grossAmountBilled = grossAmountBilled;
	}

	public DetailedEstimate cancellationReason(String cancellationReason) {
		this.cancellationReason = cancellationReason;
		return this;
	}

	/**
	 * Reason for cancellation of the Detailed Estimate, Required only while
	 * cancelling Detailed Estimate
	 * 
	 * @return cancellationReason
	 **/
	@ApiModelProperty(value = "Reason for cancellation of the Detailed Estimate, Required only while cancelling Detailed Estimate")

	@Pattern(regexp = "[0-9a-zA-Z_@./#&+-/!(){}\",^$%*|=;:<>?`~ ]+")
	@Size(max = 100)
	public String getCancellationReason() {
		return cancellationReason;
	}

	public void setCancellationReason(String cancellationReason) {
		this.cancellationReason = cancellationReason;
	}

	public DetailedEstimate cancellationRemarks(String cancellationRemarks) {
		this.cancellationRemarks = cancellationRemarks;
		return this;
	}

	/**
	 * Remarks for cancellation of the Detailed Estimate, Required only while
	 * cancelling Detailed Estimate
	 * 
	 * @return cancellationRemarks
	 **/
	@ApiModelProperty(value = "Remarks for cancellation of the Detailed Estimate, Required only while cancelling Detailed Estimate")

	@Pattern(regexp = "[0-9a-zA-Z_@./#&+-/!(){}\",^$%*|=;:<>?`~ ]+")
	@Size(max = 512)
	public String getCancellationRemarks() {
		return cancellationRemarks;
	}

	public void setCancellationRemarks(String cancellationRemarks) {
		this.cancellationRemarks = cancellationRemarks;
	}

	public DetailedEstimate totalIncludingRE(BigDecimal totalIncludingRE) {
		this.totalIncludingRE = totalIncludingRE;
		return this;
	}

	/**
	 * Total Estimate Amount including Revision Estimates
	 * 
	 * @return totalIncludingRE
	 **/
	@ApiModelProperty(value = "Total Estimate Amount including Revision Estimates")

	@Valid

	public BigDecimal getTotalIncludingRE() {
		return totalIncludingRE;
	}

	public void setTotalIncludingRE(BigDecimal totalIncludingRE) {
		this.totalIncludingRE = totalIncludingRE;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		DetailedEstimate detailedEstimate = (DetailedEstimate) o;
		return Objects.equals(this.id, detailedEstimate.id) && Objects.equals(this.tenantId, detailedEstimate.tenantId)
				&& Objects.equals(this.estimateNumber, detailedEstimate.estimateNumber)
				&& Objects.equals(this.estimateDate, detailedEstimate.estimateDate)
				&& Objects.equals(this.nameOfWork, detailedEstimate.nameOfWork)
				&& Objects.equals(this.description, detailedEstimate.description)
				&& Objects.equals(this.department, detailedEstimate.department)
				&& Objects.equals(this.adminSanctionNumber, detailedEstimate.adminSanctionNumber)
				&& Objects.equals(this.adminSanctionDate, detailedEstimate.adminSanctionDate)
				&& Objects.equals(this.adminSanctionBy, detailedEstimate.adminSanctionBy)
				&& Objects.equals(this.status, detailedEstimate.status)
				&& Objects.equals(this.workValue, detailedEstimate.workValue)
				&& Objects.equals(this.estimateValue, detailedEstimate.estimateValue)
				&& Objects.equals(this.parent, detailedEstimate.parent)
				&& Objects.equals(this.copiedFrom, detailedEstimate.copiedFrom)
				&& Objects.equals(this.approvedDate, detailedEstimate.approvedDate)
				&& Objects.equals(this.approvedBy, detailedEstimate.approvedBy)
				&& Objects.equals(this.copiedEstimate, detailedEstimate.copiedEstimate)
				&& Objects.equals(this.beneficiary, detailedEstimate.beneficiary)
				&& Objects.equals(this.worksType, detailedEstimate.worksType)
				&& Objects.equals(this.worksSubtype, detailedEstimate.worksSubtype)
				&& Objects.equals(this.natureOfWork, detailedEstimate.natureOfWork)
				&& Objects.equals(this.ward, detailedEstimate.ward)
				&& Objects.equals(this.location, detailedEstimate.location)
				&& Objects.equals(this.latitude, detailedEstimate.latitude)
				&& Objects.equals(this.longitude, detailedEstimate.longitude)
				&& Objects.equals(this.workCategory, detailedEstimate.workCategory)
				&& Objects.equals(this.locality, detailedEstimate.locality)
				&& Objects.equals(this.councilResolutionNumber, detailedEstimate.councilResolutionNumber)
				&& Objects.equals(this.councilResolutionDate, detailedEstimate.councilResolutionDate)
				&& Objects.equals(this.workOrderCreated, detailedEstimate.workOrderCreated)
				&& Objects.equals(this.billsCreated, detailedEstimate.billsCreated)
				&& Objects.equals(this.spillOverFlag, detailedEstimate.spillOverFlag)
				&& Objects.equals(this.grossAmountBilled, detailedEstimate.grossAmountBilled)
				&& Objects.equals(this.cancellationReason, detailedEstimate.cancellationReason)
				&& Objects.equals(this.cancellationRemarks, detailedEstimate.cancellationRemarks)
				&& Objects.equals(this.totalIncludingRE, detailedEstimate.totalIncludingRE);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, tenantId, estimateNumber, estimateDate, nameOfWork, description, department,
				adminSanctionNumber, adminSanctionDate, adminSanctionBy, status, workValue, estimateValue, parent,
				copiedFrom, approvedDate, approvedBy, copiedEstimate, beneficiary, worksType, worksSubtype,
				natureOfWork, ward, location, latitude, longitude, workCategory, locality, councilResolutionNumber,
				councilResolutionDate, workOrderCreated, billsCreated, spillOverFlag, grossAmountBilled,
				cancellationReason, cancellationRemarks, totalIncludingRE);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class DetailedEstimate {\n");

		sb.append("    id: ").append(toIndentedString(id)).append("\n");
		sb.append("    tenantId: ").append(toIndentedString(tenantId)).append("\n");
		sb.append("    estimateNumber: ").append(toIndentedString(estimateNumber)).append("\n");
		sb.append("    estimateDate: ").append(toIndentedString(estimateDate)).append("\n");
		sb.append("    nameOfWork: ").append(toIndentedString(nameOfWork)).append("\n");
		sb.append("    description: ").append(toIndentedString(description)).append("\n");
		sb.append("    department: ").append(toIndentedString(department)).append("\n");
		sb.append("    adminSanctionNumber: ").append(toIndentedString(adminSanctionNumber)).append("\n");
		sb.append("    adminSanctionDate: ").append(toIndentedString(adminSanctionDate)).append("\n");
		sb.append("    adminSanctionBy: ").append(toIndentedString(adminSanctionBy)).append("\n");
		sb.append("    status: ").append(toIndentedString(status)).append("\n");
		sb.append("    workValue: ").append(toIndentedString(workValue)).append("\n");
		sb.append("    estimateValue: ").append(toIndentedString(estimateValue)).append("\n");
		sb.append("    parent: ").append(toIndentedString(parent)).append("\n");
		sb.append("    copiedFrom: ").append(toIndentedString(copiedFrom)).append("\n");
		sb.append("    approvedDate: ").append(toIndentedString(approvedDate)).append("\n");
		sb.append("    approvedBy: ").append(toIndentedString(approvedBy)).append("\n");
		sb.append("    copiedEstimate: ").append(toIndentedString(copiedEstimate)).append("\n");
		sb.append("    beneficiary: ").append(toIndentedString(beneficiary)).append("\n");
		sb.append("    worksType: ").append(toIndentedString(worksType)).append("\n");
		sb.append("    worksSubtype: ").append(toIndentedString(worksSubtype)).append("\n");
		sb.append("    natureOfWork: ").append(toIndentedString(natureOfWork)).append("\n");
		sb.append("    ward: ").append(toIndentedString(ward)).append("\n");
		sb.append("    location: ").append(toIndentedString(location)).append("\n");
		sb.append("    latitude: ").append(toIndentedString(latitude)).append("\n");
		sb.append("    longitude: ").append(toIndentedString(longitude)).append("\n");
		sb.append("    workCategory: ").append(toIndentedString(workCategory)).append("\n");
		sb.append("    locality: ").append(toIndentedString(locality)).append("\n");
		sb.append("    councilResolutionNumber: ").append(toIndentedString(councilResolutionNumber)).append("\n");
		sb.append("    councilResolutionDate: ").append(toIndentedString(councilResolutionDate)).append("\n");
		sb.append("    workOrderCreated: ").append(toIndentedString(workOrderCreated)).append("\n");
		sb.append("    billsCreated: ").append(toIndentedString(billsCreated)).append("\n");
		sb.append("    spillOverFlag: ").append(toIndentedString(spillOverFlag)).append("\n");
		sb.append("    grossAmountBilled: ").append(toIndentedString(grossAmountBilled)).append("\n");
		sb.append("    cancellationReason: ").append(toIndentedString(cancellationReason)).append("\n");
		sb.append("    cancellationRemarks: ").append(toIndentedString(cancellationRemarks)).append("\n");
		sb.append("    totalIncludingRE: ").append(toIndentedString(totalIncludingRE)).append("\n");
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