class ViewDCB extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        agreement: {},
        demandDetails:{}
      }

      this.setInitialState = this.setInitialState.bind(this);

    }

    setInitialState(initState) {
      this.setState(initState);
    }
    componentDidMount() {

      if (window.opener && window.opener.document) {
        var logo_ele = window.opener.document.getElementsByClassName("homepage_logo");
        if (logo_ele && logo_ele[0]) {
          document.getElementsByClassName("homepage_logo")[0].src = window.location.origin + logo_ele[0].getAttribute("src");
        }
      }
      var _this = this;
      var agreement = commonApiPost("lams-services",
        "agreements",
        "_search", {
          agreementNumber: getUrlVars()["agreementNumber"],
          tenantId
        }).responseJSON["Agreements"][0] || {};
      console.log(agreement);
      var demandDetails = commonApiPost("demand-services",
        "demand",
        "_search", {
          demandId:agreement["demands"][0] ,
          tenantId
        }).responseJSON["Demand"][0]["demandDetails"] || {};
        console.log(demandDetails);
      this.setState({
        ...this.state,
        agreement: agreement,
        demandDetails:demandDetails

      });
      }
    render() {
        var _this = this;
        {/*let {agreement} = this.state;
        let {allottee, asset, rentIncrementMethod, workflowDetails, cancellation,
              renewal, eviction, objection, judgement, remission} = this.state.agreement;
        let {assetCategory, locationDetails} = this.state.agreement.asset;*/}
        let {agreement,demandDetails} = this.state;
        const renderOption = function(data) {
            if (data) {
              return data.map((item, ind) => {
                  return (<option key = {ind} value = {typeof item == "object" ? item.id : item}>
                              {typeof item == "object" ? item.name : item}
                          </option>)
                  })
              }
            }
            const renderAgreementDetails = function () {
              return (
                <div className="form-section" id="agreementDetailsBlock">
                  <h3>Agreement Details </h3>
                  <div className="form-section-inner">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-sm-6 label-text">
                            <label htmlFor="agreementNumber"> Agreement Number :</label>
                          </div>
                          <div className="col-sm-6 label-view-text">
                            <label id="agreementNumber" name="agreementNumber">
                              {agreement.agreementNumber ? agreement.agreementNumber : "N/A"}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-sm-6 label-text">
                            <label htmlFor="expiryDate">Expiry Date:</label>
                          </div>
                          <div className="col-sm-6 label-view-text">
                            <label id="expiryDate" name="expiryDate">
                              {agreement.expiryDate ? agreement.expiryDate : "N/A"}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-sm-6 label-text">
                            <label htmlFor="assetName"> Asset Name :</label>
                          </div>
                          <div className="col-sm-6 label-view-text">
                            <label id="assetName" name="assetName">
                              {agreement.asset.name ? agreement.asset.name : "N/A"}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-sm-6 label-text">
                            <label htmlFor="assetType">Asset Type:</label>
                          </div>
                          <div className="col-sm-6 label-view-text">
                            <label id="assetType" name="assetType">
                              {agreement.asset.assetCategory.name ? agreement.asset.assetCategory.name : "N/A"}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-sm-6 label-text">
                            <label htmlFor="allotteeName"> Allottee Name :</label>
                          </div>
                          <div className="col-sm-6 label-view-text">
                            <label id="allotteeName" name="allotteeName">
                              {agreement.allottee.name ? agreement.allottee.name : "N/A"}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-sm-6 label-text">
                            <label htmlFor="mobileNumber">Mobile Number:</label>
                          </div>
                          <div className="col-sm-6 label-view-text">
                            <label id="mobileNumber" name="mobileNumber">
                              {agreement.allottee.mobileNumber ? agreement.allottee.mobileNumber : "N/A"}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-sm-6 label-text">
                            <label htmlFor="rent">Rent :</label>
                          </div>
                          <div className="col-sm-6 label-view-text">
                            <label id="rent" name="rent">
                              {agreement.rent ? agreement.rent : "N/A"}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-sm-6 label-text">
                            <label htmlFor="securityDeposit">Advace Collection:</label>
                          </div>
                          <div className="col-sm-6 label-view-text">
                            <label id="securityDeposit" name="securityDeposit">
                              {agreement.securityDeposit ? agreement.securityDeposit : "N/A"}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-sm-6 label-text">
                            <label htmlFor="paymentCycle">PaymentCycle :</label>
                          </div>
                          <div className="col-sm-6 label-view-text">
                            <label id="paymentCycle" name="paymentCycle">
                              {agreement.paymentCycle ? agreement.paymentCycle : "N/A"}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-sm-6 label-text">
                            <label htmlFor="natureOfAllotment">Allotment Type :</label>
                          </div>
                          <div className="col-sm-6 label-view-text">
                            <label id="natureOfAllotment" name="natureOfAllotment">
                              {agreement.natureOfAllotment ? agreement.natureOfAllotment : "N/A"}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );

            }

        const showTable=function()
        {

              return (
                <div className="form-section" id="demandDetailsBlock">
                    <h3>Demand Details </h3>
                <table id="demandTable" className="table table-bordered">
                    <thead>
                    <tr>
                        <th></th>
                        <th colSpan='3'>Demand</th>
                        <th colSpan='3'>Collection</th>
                        <th colSpan='3'>Balance</th>

                    </tr>
                        <tr>
                            <th>Installment </th>
                            <th>Rent    </th>
                            <th>Penalty </th>
                            <th> S.Tax</th>
                            <th>Rent </th>
                            <th>Penalty</th>
                            <th>S.Tax</th>
                            <th>Rent </th>
                            <th>Penalty</th>
                            <th>S.Tax</th>
                        </tr>
                    </thead>
                    <tbody id="agreementSearchResultTableBody">
                        {
                            renderBody()
                        }
                    </tbody>
                </table>
                    Note: Advance tax will be adjusted to last installment.
                  </div>
              )

        }
        const renderBody=function()
        {
          console.log(demandDetails);
          if (demandDetails.length>0) {

            return demandDetails.map((item,index)=>
            {                   return (<tr key={index}>
                                      <td>{trim(item.taxPeriod)}[{item.taxReason}] </td>
                                      <td>{item.taxAmount}</td>
                                      <td>{0}</td>
                                      <td>{0}</td>
                                      <td>{item.collectionAmount}</td>
                                      <td>{0}</td>
                                      <td>{0}</td>
                                      <td>{item.taxAmount-item.collectionAmount}</td>
                                      <td>{0}</td>
                                      <td>{0}</td>

                      </tr>
                  );

            })
          }

        }
function trim(value){
  return(value.replace("LAMS_",""))
}
    return(
      <div>
      <h3> </h3>
      <form  >
      <fieldset>

              {renderAgreementDetails()}
               {showTable()}
              <br/>
                  <div className="text-center">
                    <button type="button" className="btn btn-close" onClick={(e)=>{this.close()}}>Close</button>
                  </div>

      </fieldset>
      </form>
      </div>
    );
  }

}
ReactDOM.render(
  <ViewDCB />,
  document.getElementById('root')
);
