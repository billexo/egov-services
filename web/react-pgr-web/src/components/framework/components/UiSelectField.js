import React, {Component} from 'react';
import {connect} from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Api from '../../../api/api';
import jp from "jsonpath";
import _ from 'lodash';



class UiSelectField extends Component {
	constructor(props) {
       super(props);
			 this.state={
				 dropDownData:[]
			 }
   	}

	componentDidMount()
	{
		let {item, setDropDownData, useTimestamp}=this.props;
		// console.log(this.props.item);
		if(item.hasOwnProperty("url") && item.url.search("\\|")>-1)
		{
			let splitArray=item.url.split("?");
			let context="";
			let id={};
			// id[splitArray[1].split("&")[1].split("=")[0]]=e.target.value;
			for (var j = 0; j < splitArray[0].split("/").length; j++) {
				context+=splitArray[0].split("/")[j]+"/";
			}

			var response=Api.commonApiPost(context, id, {}, "", useTimestamp || false).then(function(response) {
				
					let keys=jp.query(response,splitArray[1].split("|")[1]);
					let values=jp.query(response,splitArray[1].split("|")[2]);
					let dropDownData=[];
					for (var k = 0; k < keys.length; k++) {
							let obj={};
							obj["key"]=keys[k];
							obj["value"]=values[k];
							dropDownData.push(obj);
					}

					// console.log(dropDownData);


					// for (var l = 0; l < metaData.reportDetails.searchParams.length; l++) {
					// 	if (metaData.reportDetails.searchParams[l].type=="url" && metaData.reportDetails.searchParams[l].pattern.search(property)>-1) {
					// 			metaData.reportDetails.searchParams[l].defaultValue=defaultValue;
					// 	}
					// }
					// console.log(defaultValue);
					// console.log(i);
					// console.log(metaData);
					setDropDownData(item.jsonPath,dropDownData);
			},function(err) {
					console.log(err);
			});
		}
	}



	 renderSelect =(item) => {
		let {dropDownData}=this.props;
		// console.log(dropDownData.hasOwnProperty(item.jsonpath) && dropDownData[item.jsonpath].replace(".", "\."));
		// console.log(dropDownData);
		// console.log(dropDownData[item.jsonPath] );
		// console.log(dropDownData.hasOwnProperty(item.jsonPath));
		switch (this.props.ui) {
			case 'google':
				// let {dropDownData}=this.state;
				return (
					<SelectField
						fullWidth={true}
						floatingLabelText={item.label + (item.isRequired ? " *" : "")}
						value={this.props.getVal(item.jsonPath)}
						onChange={(event, key, value) =>{
							this.props.handler({target: {value: value}}, item.jsonPath, item.isRequired ? true : false, '', item.requiredErrMsg, item.patternErrMsg)
						}}
						disabled={item.isDisabled}
						errorText={this.props.fieldErrors[item.jsonPath]}
						maxHeight={200}>
				            {dropDownData.hasOwnProperty(item.jsonPath) && dropDownData[item.jsonPath].map((dd, index) => (
				                <MenuItem value={dd.key} key={index} primaryText={dd.value} />
				            ))}
		            </SelectField>
				);
		}
	}

	render () {
		return (
	      <div>
	        {this.renderSelect(this.props.item)}
	      </div>
	    );
	}
}

const mapStateToProps = state => ({dropDownData:state.framework.dropDownData});

const mapDispatchToProps = dispatch => ({
  setDropDownData:(fieldName,dropDownData)=>{
    dispatch({type:"SET_DROPDWON_DATA",fieldName,dropDownData})
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(UiSelectField);