package org.egov.works.estimate.web.contract;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Objects;

/**
 * ModeOfAllotment
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-11-29T09:03:53.949Z")

public class ModeOfAllotment   {
  @JsonProperty("id")
  private String id = null;

  @JsonProperty("tenantId")
  private String tenantId = null;

  @JsonProperty("name")
  private String name = null;

  @JsonProperty("code")
  private String code = null;

  public ModeOfAllotment id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Unique Identifier of the Mode Of Allotment
   * @return id
  **/
  @ApiModelProperty(value = "Unique Identifier of the Mode Of Allotment")


  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public ModeOfAllotment tenantId(String tenantId) {
    this.tenantId = tenantId;
    return this;
  }

   /**
   * Tenant id of the Mode Of Allotment
   * @return tenantId
  **/
  @ApiModelProperty(required = true, value = "Tenant id of the Mode Of Allotment")
  @NotNull

 @Size(min=2,max=128)
  public String getTenantId() {
    return tenantId;
  }

  public void setTenantId(String tenantId) {
    this.tenantId = tenantId;
  }

  public ModeOfAllotment name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Unique name of the Mode Of Allotment
   * @return name
  **/
  @ApiModelProperty(required = true, value = "Unique name of the Mode Of Allotment")
  @NotNull

 @Pattern(regexp="[a-zA-Z0-9\\s\\.,]+") @Size(min=1,max=100)
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public ModeOfAllotment code(String code) {
    this.code = code;
    return this;
  }

   /**
   * Unique code of the Mode Of Allotment
   * @return code
  **/
  @ApiModelProperty(required = true, value = "Unique code of the Mode Of Allotment")
  @NotNull

 @Pattern(regexp="[a-zA-Z0-9-\\\\]+") @Size(min=1,max=100)
  public String getCode() {
    return code;
  }

  public void setCode(String code) {
    this.code = code;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ModeOfAllotment modeOfAllotment = (ModeOfAllotment) o;
    return Objects.equals(this.id, modeOfAllotment.id) &&
        Objects.equals(this.tenantId, modeOfAllotment.tenantId) &&
        Objects.equals(this.name, modeOfAllotment.name) &&
        Objects.equals(this.code, modeOfAllotment.code);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, tenantId, name, code);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ModeOfAllotment {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    tenantId: ").append(toIndentedString(tenantId)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

