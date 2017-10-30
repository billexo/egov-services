import React, {Component} from 'react';
import {Grid, Row, Col, Table, DropdownButton} from 'react-bootstrap';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class assetImmovableReport extends Component {
	render () {
		return (
			<Card className="uiCard">
			    <CardHeader title="Certificate" />
			    <CardText>
			        <Table responsive bordered condensed>
			            <tbody>
			                <tr>
			                    <td rowSpan={3} style={{textAlign: "left"}}>
			                        <img src="./temp/images/headerLogo.png" height="60" width="60" />
			                    </td>
			                    <td style={{textAlign: "center"}} >
			                        <b>PIMPRI CHINCHWAD MUNICIPAL CORPORATION</b>
			                    </td>
			                    <td rowSpan={3} style={{textAlign: "right"}}>
			                        <img src="./temp/images/AS.png" height="60" width="60" />
			                    </td>
			                </tr>
			                <tr>
			                    <td style={{textAlign: "center"}} >
			                       <b>नमुना  क्रमांक  १६</b>
			                    </td>

			                </tr>
			                <tr>
			                    <td style={{textAlign: "center"}} >
			                        <b>( नियम क्रमांक ६२ , १९१ पहा )</b>
			                    </td>
			                </tr>

			            </tbody>
									<tbody>
										<td  colSpan={3} style={{textAlign: "center"}}>
												<b>स्थावर  मालमत्तांची नोंदवही</b>
										</td>
									</tbody>

									<tbody>
										<td style={{textAlign: "center"}}>
												<b>मत्तेचे  नाव</b>
										</td>
										<td colSpan={1} style={{textAlign: "center"}}>
												<b>Storm Water Drain</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b>संपादनाची पद्धत</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b>New</b>
										</td>
									</tbody>

									<tbody>
										<td style={{textAlign: "center"}}>
												<b>मत्तेचा  ओळखपत्र क्रमांक</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b>ROH/SWD/IM/1234</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b> निधीचे स्रोत</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b>Own</b>
										</td>
									</tbody>

									<tbody>
											<tr>
													<td rowSpan={2} style={{textAlign: "left"}}>
															<b>मालमत्ता ज्या अन्वये संपादित केली होती</b>
													</td>
													<td  rowSpan={2} style={{textAlign: "center"}} >
															<b> GO/ROH/202 </b>
													</td>
													<td style={{textAlign: "right"}}>
															<b>अधिपत्र ( होय / नाही )</b>
													</td>
													<td style={{textAlign: "right"}}>
															<b>10 Years</b>
													</td>
											</tr>
											<tr>
													<td style={{textAlign: "center"}} >
														 <b>असल्यास , समाप्ती दिनांक</b>
													</td>
													<td style={{textAlign: "center"}} >
														 <b>05/10/2022</b>
													</td>
											</tr>
									</tbody>

									<tbody>
										<td style={{textAlign: "center"}}>
												<b>स्थान</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b>Gandhinagar</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b>दोषी दायित्व</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b></b>
										</td>
									</tbody>

									<tbody>
										<td style={{textAlign: "center"}}>
												<b>प्रगतिपथावरील बांधकाम नोंदवहीचा संदर्भ क्रमांक</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b></b>
										</td>
										<td style={{textAlign: "center"}}>
												<b>राखून ठेवलेली प्रतिभूती ठेव</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b></b>
										</td>
									</tbody>

									<tbody>
										<td style={{textAlign: "center"}}>
												<b></b>
										</td>
										<td style={{textAlign: "center"}}>
												<b></b>
										</td>
										<td style={{textAlign: "center"}}>
												<b>वसूल केलेली प्रतिभूति ठेव</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b>5000000</b>
										</td>
									</tbody>

									<tbody>
										<td style={{textAlign: "center"}}>
												<b>मजल्यांची संख्या :</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b>जोते क्षेत्र :</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b>दिनांक</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b></b>
										</td>
									</tbody>

									<tbody>
										<td style={{textAlign: "center"}}>
												<b> घनफळ</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b></b>
										</td>
										<td style={{textAlign: "center"}}>
												<b> रक्कम रु.</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b>310000000</b>
										</td>
									</tbody>

									<tbody>
										<td style={{textAlign: "center"}}>
												<b> ज्यावर बांधकाम केले आहे अशा जमिनीचा सर्वेक्षण क्रमांक</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b></b>
										</td>
										<td  colSpan={2} style={{textAlign: "center"}}>
												<b>विक्री करणे</b>
										</td>
									</tbody>

									<tbody>
										<td style={{textAlign: "center"}}>
												<b> संरचनेचा आकार</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b>L:20Kms B:3mts H:2mts</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b> ज्यास मत्ता विकण्यात आली त्या व्यक्तीचे नाव (asset sold to)</b>
										</td>
										<td style={{textAlign: "center"}}>
												<b></b>
										</td>
									</tbody>

									<tbody>
										<tr>
											<td style={{textAlign: "center"}}>
													<b>बांधण्यात आलेल्या जमिनीचे क्षेत्र</b>
											</td>
											<td style={{textAlign: "center"}}>
													<b></b>
											</td>
											<td rowSpan={4} colSpan={2} style={{textAlign: "center"}}>
													<b></b>
											</td>
										</tr>
										<tr>
											<td style={{textAlign: "center"}}>
													<b> उपलब्ध शीर्ष दस्तऐवज</b>
											</td>
											<td style={{textAlign: "center"}}>
													<b>Yes</b>
											</td>
											<td rowSpan={4} colSpan={2} style={{textAlign: "center"}}>
													<b></b>
											</td>
										</tr>
										<tr>
											<td style={{textAlign: "center"}}>
													<b>कोणाकडून संपादित केली</b>
											</td>
											<td style={{textAlign: "center"}}>
													<b>600 Sq.Meters</b>
											</td>
											<td rowSpan={4} colSpan={2} style={{textAlign: "center"}}>
													<b></b>
											</td>
										</tr>
										<tr>
											<td style={{textAlign: "center"}}>
													<b> मत्तेचे  अपेक्षित आयुर्मान</b>
											</td>
											<td style={{textAlign: "center"}}>
													<b>25 Years</b>
											</td>
											<td rowSpan={4} colSpan={2} style={{textAlign: "center"}}>
													<b></b>
											</td>
										</tr>
									</tbody>
			        </Table>


			        <Table responsive bordered condensed>
							<tbody>
									<tr>
											<td rowSpan={3} style={{textAlign: "left"}}>
													<b>नमुना  क्रमांक</b>
											</td>
											<td rowSpan={3} style={{textAlign: "left"}}>
													<b>नमुना  क्रमांक</b>
											</td>
											<td rowSpan={3} style={{textAlign: "left"}}>
													<b>नमुना  क्रमांक</b>
											</td>
											<td rowSpan={3} style={{textAlign: "left"}}>
													<b>नमुना  क्रमांक</b>
											</td>
											<td colSpan={4} style={{textAlign: "center"}} >
													<b>नमुना  क्रमांक</b>
											</td>
											<td  rowSpan={2} colSpan={4} style={{textAlign: "right"}}>
													<b>नमुना  क्रमांक</b>
											</td>
											<td rowSpan={2} colSpan={3} style={{textAlign: "right"}}>
													<b>नमुना  क्रमांक</b>
											</td>
											<td rowSpan={3} style={{textAlign: "right"}}>
													<b>नमुना  क्रमांक</b>
											</td>
											<td rowSpan={3} style={{textAlign: "right"}}>
													<b>नमुना  क्रमांक</b>
											</td>
									</tr>
									<tr>
											<td colSpan={4} style={{textAlign: "center"}} >
												 <b>नमुना  क्रमांक  १६</b>
											</td>

									</tr>
									<tr>
											<td style={{textAlign: "center"}} >
													<b>नियम क्रमांक ६२</b>
											</td>
											<td style={{textAlign: "center"}} >
													<b>नियम क्रमांक ६२</b>
											</td>
											<td style={{textAlign: "center"}} >
													<b>नियम क्रमांक ६२</b>
											</td>
											<td style={{textAlign: "center"}} >
													<b>नियम क्रमांक ६२</b>
											</td>
											<td style={{textAlign: "center"}} >
													<b>नियम क्रमांक ६२</b>
											</td>
											<td style={{textAlign: "center"}} >
													<b>नियम क्रमांक ६२</b>
											</td>
											<td style={{textAlign: "center"}} >
													<b>नियम क्रमांक ६२</b>
											</td>
											<td style={{textAlign: "center"}} >
													<b>नियम क्रमांक ६२</b>
											</td>
											<td style={{textAlign: "center"}} >
													<b>नियम क्रमांक ६२</b>
											</td>
											<td style={{textAlign: "center"}} >
													<b>नियम क्रमांक ६२</b>
											</td>
											<td style={{textAlign: "center"}} >
													<b>नियम क्रमांक ६२</b>
											</td>
									</tr>
							</tbody>

							<tbody>
							<tr>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
							</tr>
							</tbody>
							<tbody>
							<tr>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
									<td style={{textAlign: "center"}} >
											<b>नियम क्रमांक ६२</b>
									</td>
							</tr>
							</tbody>
			        </Table>
			    </CardText>
			</Card>
		);
	}
}