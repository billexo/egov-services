package org.egov.works.workorder.web.contract;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.validation.Valid;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * Contract class to send response. Array of Track Milestone items are used in
 * case of search results, also multiple Track Milestone item is used for create
 * and update
 */
@ApiModel(description = "Contract class to send response. Array of Track Milestone items are used in case of search results, also multiple  Track Milestone item is used for create and update")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-11-21T10:42:18.195Z")

public class TrackMilestoneResponse {
	@JsonProperty("ResponseInfo")
	private ResponseInfo responseInfo = null;

	@JsonProperty("trackMilestones")
	private List<TrackMilestone> trackMilestones = null;

	public TrackMilestoneResponse responseInfo(ResponseInfo responseInfo) {
		this.responseInfo = responseInfo;
		return this;
	}

	/**
	 * Get responseInfo
	 * 
	 * @return responseInfo
	 **/
	@ApiModelProperty(value = "")

	@Valid

	public ResponseInfo getResponseInfo() {
		return responseInfo;
	}

	public void setResponseInfo(ResponseInfo responseInfo) {
		this.responseInfo = responseInfo;
	}

	public TrackMilestoneResponse trackMilestones(List<TrackMilestone> trackMilestones) {
		this.trackMilestones = trackMilestones;
		return this;
	}

	public TrackMilestoneResponse addTrackMilestonesItem(TrackMilestone trackMilestonesItem) {
		if (this.trackMilestones == null) {
			this.trackMilestones = new ArrayList<TrackMilestone>();
		}
		this.trackMilestones.add(trackMilestonesItem);
		return this;
	}

	/**
	 * Used for search result and create only
	 * 
	 * @return trackMilestones
	 **/
	@ApiModelProperty(value = "Used for search result and create only")

	@Valid

	public List<TrackMilestone> getTrackMilestones() {
		return trackMilestones;
	}

	public void setTrackMilestones(List<TrackMilestone> trackMilestones) {
		this.trackMilestones = trackMilestones;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		TrackMilestoneResponse trackMilestoneResponse = (TrackMilestoneResponse) o;
		return Objects.equals(this.responseInfo, trackMilestoneResponse.responseInfo)
				&& Objects.equals(this.trackMilestones, trackMilestoneResponse.trackMilestones);
	}

	@Override
	public int hashCode() {
		return Objects.hash(responseInfo, trackMilestones);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class TrackMilestoneResponse {\n");

		sb.append("    responseInfo: ").append(toIndentedString(responseInfo)).append("\n");
		sb.append("    trackMilestones: ").append(toIndentedString(trackMilestones)).append("\n");
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
