import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Table, DropdownButton } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import UiTextField from './UiTextField'
import UiSelectField from './UiSelectField'
import UiSelectFieldMultiple from './UiSelectFieldMultiple'
import UiCheckBox from './UiCheckBox'
import UiEmailField from './UiEmailField'
import UiMobileNumber from './UiMobileNumber'
import UiTextArea from './UiTextArea'
import UiMultiSelectField from './UiMultiSelectField'
import UiNumberField from './UiNumberField'
import UiDatePicker from './UiDatePicker'
import UiMultiFileUpload from './UiMultiFileUpload'
import UiSingleFileUpload from './UiSingleFileUpload'
import UiAadharCard from './UiAadharCard'
import UiPanCard from './UiPanCard'
import UiLabel from './UiLabel'
import UiRadioButton from './UiRadioButton'
import UiTextSearch from './UiTextSearch'
import UiDocumentList from './UiDocumentList'
import UiAutoComplete from './UiAutoComplete'
import UiDate from './UiDate';
import UiPinCode from './UiPinCode';
import UiArrayField from './UiArrayField';
import UiFileTable from './UiFileTable';
import { translate } from '../../common/common';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash';

class UiMultiFieldAddToTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      currentValue: '',
      valueList: [],
      formData: {},
      disableAdd: true,
      index: 0
    }
  }
  // componentWillReceiveProps(nextProps) {
  // let arrayValue = this.props.getVal(this.props.item.jsonPath);
  // console.log(arrayValue)

  // let { valueList } = this.state;
  // if (_.isArray(arrayValue) && JSON.stringify(arrayValue) != JSON.stringify(valueList)) {
  //   this.setState({
  //     valueList: arrayValue
  //   })
  // }
  // }

  handler = (e, property, isRequired, pattern, requiredErrMsg = "Required", patternErrMsg = "Pattern Missmatch", expression, expErr, isDate) => {
    let { formData } = this.state;
    _.set(formData, property, e.target.value);
    this.setState({
      formData
    }, function () { });
  }

  addToParent = () => {

    let formData = _.cloneDeep(this.props.formData);
    let formData2 = _.cloneDeep(this.state.formData);
    let myTableInParent = _.get(formData, this.props.item.jsonPath);
    let stateFormDataTable = _.get(formData2, this.props.item.jsonPath);

    if (!myTableInParent) {
      this.props.handler({ target: { value: stateFormDataTable } }, this.props.item.jsonPath);
    } else {
      myTableInParent.push(stateFormDataTable[0]);
      this.props.handler({ target: { value: myTableInParent } }, this.props.item.jsonPath);
    }
    let list = _.get(this.props.formData, this.props.item.jsonPath);
    this.setState({
      valueList: list,
      formData: {}
    })
  }

  deleteRow = (index) => {
    let formData = _.cloneDeep(this.props.formData);
    let myTableInParent = _.get(formData, this.props.item.jsonPath);
    myTableInParent.splice(index, 1);
    this.props.handler({ target: { value: myTableInParent } }, this.props.item.jsonPath);
    let list = _.cloneDeep(this.state.valueList);
    list.splice(index, 1)
    this.setState({
      valueList: list
    })

  }
  renderFields = (item, screen) => {
    if (screen == "view" && ["documentList", "fileTable", "arrayText", "arrayNumber"].indexOf(item.type) > -1) {
      if (item.type == "datePicker") {
        item.isDate = true;
      }
      item.type = "label";
    }
    switch (item.type) {
      case 'text':
        return <UiTextField ui={this.props.ui} getVal={this.getVal} item={item} fieldErrors={this.props.fieldErrors} handler={this.handler} />
      case 'textarea':
        return <UiTextArea ui={this.props.ui} getVal={this.getVal} item={item} fieldErrors={this.props.fieldErrors} handler={this.handler} />
      case 'singleValueListMultiple':
        return <UiSelectFieldMultiple ui={this.props.ui} useTimestamp={this.props.useTimestamp} getVal={this.getVal} item={item} fieldErrors={this.props.fieldErrors} handler={this.handler} />
      case 'singleValueList':
        return <UiSelectField ui={this.props.ui} useTimestamp={this.props.useTimestamp} getVal={this.getVal} item={item} fieldErrors={this.props.fieldErrors} handler={this.handler} />
      case 'multiValueList':
        return <UiMultiSelectField ui={this.props.ui} getVal={this.getVal} item={item} fieldErrors={this.props.fieldErrors} handler={this.handler} />
      case 'autoCompelete':
        return <UiAutoComplete ui={this.props.ui} getVal={this.getVal} item={item} fieldErrors={this.props.fieldErrors} handler={this.props.handler} autoComHandler={this.autoComHandler || ""} />
      case 'number':
        return <UiNumberField ui={this.props.ui} getVal={this.getVal} item={item} fieldErrors={this.props.fieldErrors} handler={this.handler} />
      case 'mobileNumber':
        return <UiMobileNumber ui={this.props.ui} getVal={this.getVal} item={item} fieldErrors={this.props.fieldErrors} handler={this.handler} />
      case 'checkbox':
        return <UiCheckBox ui={this.props.ui} getVal={this.getVal} item={item} fieldErrors={this.props.fieldErrors} handler={this.handler} />
      case 'email':
        return <UiEmailField ui={this.props.ui} getVal={this.getVal} item={item} fieldErrors={this.props.fieldErrors} handler={this.handler} />
      case 'datePicker':
        return <UiDatePicker ui={this.props.ui} getVal={this.getVal} item={item} fieldErrors={this.props.fieldErrors} handler={this.handler} />
      case 'singleFileUpload':
        return <UiSingleFileUpload ui={this.props.ui} getVal={this.getVal} item={item} fieldErrors={this.props.fieldErrors} handler={this.handler} />
      case 'multiFileUpload':
        return <UiMultiFileUpload ui={this.props.ui} getVal={this.getVal} item={item} fieldErrors={this.props.fieldErrors} handler={this.handler} />
      case 'pan':
        return <UiPanCard ui={this.props.ui} getVal={this.getVal} item={item} fieldErrors={this.props.fieldErrors} handler={this.handler} />
      case 'aadhar':
        return <UiAadharCard ui={this.props.ui} getVal={this.getVal} item={item} fieldErrors={this.props.fieldErrors} handler={this.handler} />
      case 'pinCode':
        return <UiPinCode ui={this.props.ui} getVal={this.getVal} item={item} fieldErrors={this.props.fieldErrors} handler={this.handler} />
      case 'label':
        return <UiLabel getVal={this.getVal} item={item} />
      case 'radio':
        return <UiRadioButton ui={this.props.ui} getVal={this.getVal} item={item} fieldErrors={this.props.fieldErrors} handler={this.handler} />
      case 'textSearch':
        return <UiTextSearch ui={this.props.ui} getVal={this.getVal} item={item} fieldErrors={this.props.fieldErrors} handler={this.props.handler} autoComHandler={this.autoComHandler} />
    }
  }

  renderArrayField = (item) => {
    switch (this.props.ui) {
      case 'google':
        return (
          <div>

            {/* this.renderField(item) */}
            <Dialog
              title={this.props.item.label}
              actions={
                <div>
                  <FlatButton
                    label={translate("pt.create.groups.ownerDetails.fields.add")}
                    secondary={true}
                    style={{ "marginTop": 39 }}
                    onClick={this.addToParent}
                  />
                  <FlatButton
                    label={translate("pt.create.button.viewdcb.close")}
                    primary={true}
                    onClick={this.handleClose}
                  />
                </div>
              }
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}>
              <Row>
                {
                  this.props.item.values.map((v, i) => {
                    return (
                      <Col xs={12} md={6}>
                        {this.renderFields(v, this.props.screen)}
                      </Col>
                    )
                  }
                  )
                }

                
              </Row>
              <br />

            </Dialog>
            <Table className="table table-striped table-bordered" responsive>
              <thead>
                <tr>
                  <th>#</th>
                  {this.props.item.header.map((v) => {
                    return(
                      <th>{translate(v.label)}</th>
                    )
                  })}
                  <th> Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.valueList.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td> {index + 1} </td>
                        {Object.values(item).map((v) => {
                          return (
                            <td>{v}</td>
                          )
                        })
                        }
                        <td>
                          <div className="material-icons" onClick={()=>{
                            this.deleteRow(index)
                          }}>delete</div>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
            <RaisedButton label={"Add"}
              onClick={(e) => {
                this.setState({ open: true })
              }}
              primary={true}
              style={{ float: "right"}} 
            />
          </div>
        );
    }
  }

  enableAdd = () => {

  }

  handleOpen = () => {
    this.setState({
      open: true
    });
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  }

  getVal = (path, dateBool) => {
    var _val = _.get(this.state.formData, path);

    if (dateBool && typeof _val == 'string' && _val && _val.indexOf("-") > -1) {
      var _date = _val.split("-");
      return new Date(_date[0], (Number(_date[1]) - 1), _date[2]);
    }
    return typeof _val != "undefined" ? _val : "";
  }

  valueFromList = (index) => {
    let list = [...this.state.valueList];
    list.splice(index, 1);
    this.setState({
      valueList: list
    }, () => {
      this.props.handler({ target: { value: this.state.valueList.length ? this.state.valueList : "" } }, this.props.item.jsonPath, this.props.item.isRequired ? true : false, '', this.props.item.requiredErrMsg, this.props.item.patternErrMsg);
    })
  }


  render() {
    return (<div>
      {this.renderArrayField(this.props.item)}
    </div>);
  }
}

const mapStateToProps = state => ({
  formData: state.frameworkForm.form
})

const mapDispatchToProps = dispatch => ({
  setFormData: (data) => {
    dispatch({ type: "SET_FORM_DATA", data });
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UiMultiFieldAddToTable);