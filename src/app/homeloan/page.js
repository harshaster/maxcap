"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingOverlay from "@/components/overlay";
import Loader from "@/components/loader";
import UploadWidget from "@/components/uploadFile";
import { auth } from "@/config";
import { getHomeLoanForm, setHomeLoanForm } from "@/apis";
import swal from "sweetalert";
import FormHeader from "@/components/formHeader";

export default function HomeLoanPage() {
	let router = useRouter();
	let [fullName, setFullName] = useState('');
	let [dateOfBirth, setDateOfBirth] = useState('');
	let [gender, setGender] = useState('');
	let [maritalStatus, setMaritalStatus] = useState('');
	let [panNumber, setPanNumber] = useState('');
	let [aadharNumber, setAadharNumber] = useState('');
	let [contactNumber, setContactNumber] = useState('');
	let [email, setEmail] = useState('');

	let [streetAddress, setStreetAddress] = useState('');
	let [city, setCity] = useState('');
	let [state, setState] = useState('');
	let [pincode, setPincode] = useState('');

	let [currentEmployer, setCurrentEmployer] = useState('');
	let [occupation, setOccupation] = useState('');
	let [monthlyIncome, setMonthlyIncome] = useState('');
	let [employmentStatus, setEmploymentStatus] = useState('');

	let [totalAnnualIncome, setTotalAnnualIncome] = useState('');
	let [otherIncome, setOtherIncome] = useState('');
	let [totalMonthlyExpenses, setTotalMonthlyExpenses] = useState('');
	let [existingLoan, setExistingLoan] = useState('');
	let [creditScore, setCreditScore] = useState('');

	let [propertyType, setPropertyType] = useState('');
	// apartment, villa, house
	let [propertyAddress, setPropertyAddress] = useState('');
	let [propertyPrice, setPropertyPrice] = useState('');
	let [loanAmount, setLoanAmount] = useState('');

	let [loading, setLoading] = useState(false);
	let [saving, setSaving] = useState(false);

	let [proofOfId, setProfOfId] = useState('');
	// aadhar, pan
	let [proofIdUpload, setProofIdUpload] = useState('');
	let [proofOfAddress, setProofOfAddress] = useState('');
	// aadhar card, utility bill(electricity,water,phone)
	let [proofAddressUpload, setProofAddressUpload] = useState('');
	let [proofOfIncome, setProofOfIncome] = useState('');
	// salary slip (last 3 months), income tax return
	let [proofIncomeUpload, setProofIncomeUpload] = useState('');
	let [employmentVerification, setEmploymentVerification] = useState('');
	let [bankStatement, setBankStatement] = useState(''); // last 6 months
	let [propertyDocuments, setPropertyDocuments] = useState('');
	// sale deed, sale agreement
	let [creditScoreReport, setCreditScoreReport] = useState('');

	function checkPersonalInfo() {
		if (fullName === '') {
			alert('Please enter your full name');
			return false;
		}
		if (dateOfBirth === '') {
			alert('Please enter your date of birth');
			return false;
		}
		if (panNumber === '') {
			alert('Please enter your PAN number');
			return false;
		}
		if (aadharNumber === '') {
			alert('Please enter your Aadhar number');
			return false;
		}
		if (contactNumber === '') {
			alert('Please enter your contact number');
			return false;
		}
		if (email === '') {
			alert('Please enter your email');
			return false;
		}
		return {
			fullName,
			dateOfBirth,
			gender,
			maritalStatus,
			panNumber,
			aadharNumber,
			contactNumber,
			email
		};
	}

	function checkAddressInfo() {
		if (streetAddress === '') {
			alert('Please enter your street address');
			return false;
		}
		if (city === '') {
			alert('Please enter your city');
			return false;
		}
		if (state === '') {
			alert('Please enter your state');
			return false;
		}
		if (pincode === '') {
			alert('Please enter your pincode');
			return false;
		}
		return {
			streetAddress,
			city,
			state,
			pincode
		};
	}

	function checkEmploymentInfo() {
		if (currentEmployer === '') {
			alert('Please enter your current employer');
			return false;
		}
		if (occupation === '') {
			alert('Please enter your occupation');
			return false;
		}
		if (monthlyIncome === '') {
			alert('Please enter your monthly income');
			return false;
		}
		return {
			currentEmployer,
			occupation,
			monthlyIncome,
			employmentStatus
		};
	}

	function checkFinancialInfo() {
		if (totalAnnualIncome === '') {
			alert('Please enter your total annual income');
			return false;
		}
		if (otherIncome === '') {
			alert('Please enter your other income sources');
			return false;
		}
		if (totalMonthlyExpenses === '') {
			alert('Please enter your total monthly expenses');
			return false;
		}
		if (creditScore === '') {
			alert('Please enter your credit score');
			return false;
		}
		return {
			totalAnnualIncome,
			otherIncome,
			totalMonthlyExpenses,
			existingLoan,
			creditScore
		};
	}

	function checkPropertyInfo() {
		if (propertyAddress === '') {
			alert('Please enter your property address');
			return false;
		}
		if (propertyPrice === '') {
			alert('Please enter your property price');
			return false;
		}
		if (loanAmount === '') {
			alert('Please enter your loan amount');
			return false;
		}
		return {
			propertyType,
			propertyAddress,
			propertyPrice,
			loanAmount
		};
	}

	function checkDocumentUpload() {
		if (!proofIdUpload) {
			alert('Please upload your proof of ID');
			return false;
		}
		if (!proofAddressUpload) {
			alert('Please upload your proof of address');
			return false;
		}
		if (!proofIncomeUpload) {
			alert('Please upload your proof of income');
			return false;
		}
		if (!employmentVerification) {
			alert('Please upload your employment verification');
			return false;
		}
		if (!bankStatement) {
			alert('Please upload your bank statement');
			return false;
		}
		if (!propertyDocuments) {
			alert('Please upload your property documents');
			return false;
		}
		if (!creditScoreReport) {
			alert('Please upload your credit score report');
			return false;
		}
		return {
			proofOfId,
			proofIdUpload,
			proofOfAddress,
			proofAddressUpload,
			proofOfIncome,
			proofIncomeUpload,
			employmentVerification,
			bankStatement,
			propertyDocuments,
			creditScoreReport
		};
	}


	function handleSave(){
		setSaving(true);
		let personalInfo = checkPersonalInfo();
		if (!personalInfo) {
			setSaving(false);
			return;
		}
		let addressInfo = checkAddressInfo();
		if (!addressInfo) {
			setSaving(false);
			return;
		}
		let employmentInfo = checkEmploymentInfo();
		if (!employmentInfo) {
			setSaving(false);
			return;
		}
		let financialInfo = checkFinancialInfo();
		if (!financialInfo) {
			setSaving(false);
			return;
		}
		let propertyInfo = checkPropertyInfo();
		if (!propertyInfo) {
			setSaving(false);
			return;
		}
		let documentUpload = checkDocumentUpload();
		if (!documentUpload) {
			setSaving(false);
			return;
		}
		let data = {
			personalInfo,
			addressInfo,
			employmentInfo,
			financialInfo,
			propertyInfo,
			documentUpload
		};
		let usrId = auth.currentUser.uid;
		setHomeLoanForm(usrId, data).then(() => {
			swal("Form Saved!", "Thankyou for filling up the form.", "success")
			.then(() => {
				router.push('/dashboard');
			})
		}).catch((e) => {
			console.log(e)
			alert(e.message);
		}).finally(() => {
			setSaving(false);
		});
	
	}

	useEffect(() => {
		setLoading(true);
		auth.onAuthStateChanged((user) => {
			if(!user){
				router.push('/login?redirect=/homeloan');
			}
			getHomeLoanForm(user.uid).then((data) => {
				if(data){
					let {personalInfo, addressInfo, employmentInfo, financialInfo, propertyInfo, documentUpload} = data;
					setFullName(personalInfo.fullName);
					setDateOfBirth(personalInfo.dateOfBirth);
					setGender(personalInfo.gender)
					setMaritalStatus(personalInfo.maritalStatus)
					setPanNumber(personalInfo.panNumber)
					setAadharNumber(personalInfo.aadharNumber)
					setContactNumber(personalInfo.contactNumber)
					setEmail(personalInfo.email)
	
					setStreetAddress(addressInfo.streetAddress)
					setCity(addressInfo.city)
					setState(addressInfo.state)
					setPincode(addressInfo.pincode)
	
					setCurrentEmployer(employmentInfo.currentEmployer)
					setOccupation(employmentInfo.occupation)
					setMonthlyIncome(employmentInfo.monthlyIncome)
					setEmploymentStatus(employmentInfo.employmentStatus)
	
					setTotalAnnualIncome(financialInfo.totalAnnualIncome)
					setOtherIncome(financialInfo.otherIncome)
					setTotalMonthlyExpenses(financialInfo.totalMonthlyExpenses)
					setExistingLoan(financialInfo.existingLoan)
					setCreditScore(financialInfo.creditScore)
	
					setPropertyType(propertyInfo.propertyType)
					setPropertyAddress(propertyInfo.propertyAddress)
					setPropertyPrice(propertyInfo.propertyPrice)
					setLoanAmount(propertyInfo.loanAmount)
	
					setProfOfId(documentUpload.proofOfId)
					setProofIdUpload(documentUpload.proofIdUpload)
					setProofOfAddress(documentUpload.proofOfAddress)
					setProofAddressUpload(documentUpload.proofAddressUpload)
					setProofOfIncome(documentUpload.proofOfIncome)
					setProofIncomeUpload(documentUpload.proofIncomeUpload)
					setEmploymentVerification(documentUpload.employmentVerification)
					setBankStatement(documentUpload.bankStatement)
					setPropertyDocuments(documentUpload.propertyDocuments)
					setCreditScoreReport(documentUpload.creditScoreReport)
				}
			}).catch((e) => {
				console.log(e)
				alert(e.message);
			}
			).finally(() => {
				setLoading(false);
			});
		});
		
	},[])

	return (
		<main>
			<FormHeader/>
			<div className="container" style={{ paddingTop: '100px'}}>
				{loading && <LoadingOverlay />}
				<h2 className="text-white">Home Loan Form</h2>
				<div className="row justify-content-center">
					<section className="row mb-3 p-4 bg-white border rounded shadow-sm">
						<h5>Section 1</h5>
						<h3>Personal Information</h3>
						<hr/>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="fullName" className="form-label">Full Name</label>
							<input type="text" className="form-control" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
							<input type="date" className="form-control" id="dateOfBirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="gender" className="form-label">Gender</label>
							<select className="form-select" value={gender} onChange={e => setGender(e.target.value)}>
								<option value={'Male'}>Male</option>
								<option value={'Female'}>Female</option>
							</select>
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="maritalStatus" className="form-label">Marital Status</label>
							<select className="form-select" value={maritalStatus} onChange={e => setMaritalStatus(e.target.value)}>
								<option value={'Married'}>Married</option>
								<option value={'Unmarried'}>Unmarried</option>
							</select>
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="panNumber" className="form-label">PAN Number</label>
							<input type="text" className="form-control" id="panNumber" value={panNumber} onChange={(e) => setPanNumber(e.target.value)} />
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="aadharNumber" className="form-label">Aadhar Number</label>
							<input type="text" className="form-control" id="aadharNumber" value={aadharNumber} onChange={(e) => setAadharNumber(e.target.value)} />
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="contactNumber" className="form-label">Contact Number</label>
							<input type="tel" className="form-control" id="contactNumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="email" className="form-label">Email</label>
							<input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
						</div>
					</section>

					<section className="row mb-3 p-4 bg-white border rounded shadow-sm">
						<h5>Section 2</h5>
						<h3>Address Information</h3>
						<hr/>
						<div className="col-12 mb-3">
							<label htmlFor="streetAddress" className="form-label">Street Address</label>
							<input type="text" className="form-control" id="streetAddress" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="city" className="form-label">City</label>
							<input type="text" className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="state" className="form-label">State</label>
							<input type="text" className="form-control" id="state" value={state} onChange={(e) => setState(e.target.value)} />
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="pincode" className="form-label">Pincode</label>
							<input type="text" className="form-control" id="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
						</div>
					</section>

					<section className="row mb-3 p-4 bg-white border rounded shadow-sm">
						<h5>Section 3</h5>
						<h3>Employment Information</h3>
						<hr/>
						<div className="col-12 mb-3">
							<label htmlFor="currentEmployer" className="form-label">Current Employer</label>
							<input type="text" className="form-control" id="currentEmployer" value={currentEmployer} onChange={(e) => setCurrentEmployer(e.target.value)} />
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="occupation" className="form-label">Occupation</label>
							<input type="text" className="form-control" id="occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="monthlyIncome" className="form-label">Monthly Income</label>
							<input type="text" className="form-control" id="monthlyIncome" value={monthlyIncome} onChange={(e) => setMonthlyIncome(e.target.value)} />
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="employmentStatus" className="form-label">Employment Status</label>
							<select className="form-select" value={employmentStatus} onChange={e => setEmploymentStatus(e.target.value)}>
								<option value={'Salaried'}>Salaried</option>
								<option value={'Self-Employed'}>Self-Employed</option>
							</select>
						</div>
					</section>

					<section className="row mb-3 p-4 bg-white border rounded shadow-sm">
						<h5>Section 4</h5>
						<h3>Financial Information</h3>
						<hr/>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="totalAnnualIncome" className="form-label">Total Annual Income</label>
							<input type="text" className="form-control" id="totalAnnualIncome" value={totalAnnualIncome} onChange={(e) => setTotalAnnualIncome(e.target.value)} />
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="otherIncome" className="form-label">Other Income</label>
							<input type="text" className="form-control" id="otherIncome" value={otherIncome} onChange={(e) => setOtherIncome(e.target.value)} />
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="totalMonthlyExpenses" className="form-label">Total Monthly Expenses</label>
							<input type="text" className="form-control" id="totalMonthlyExpenses" value={totalMonthlyExpenses} onChange={(e) => setTotalMonthlyExpenses(e.target.value)} />
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="existingLoan" className="form-label">Existing Loan</label>
							<input type="text" className="form-control" id="existingLoan" value={existingLoan} onChange={(e) => setExistingLoan(e.target.value)} />
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="creditScore" className="form-label">Credit Score</label>
							<input type="text" className="form-control" id="creditScore" value={creditScore} onChange={(e) => setCreditScore(e.target.value)} />
						</div>
					</section>

					<section className="row mb-3 p-4 bg-white border rounded shadow-sm">
						<h5>Section 5</h5>
						<h3>Property Information</h3>
						<hr/>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="propertyType" className="form-label">Property Type</label>
							<select className="form-select" value={propertyType} onChange={e => setPropertyType(e.target.value)}>
								<option value={'Apartment'}>Apartment</option>
								<option value={'Villa'}>Villa</option>
								<option value={'House'}>House</option>
							</select>
						</div>
						<div className="col-12 mb-3">
							<label htmlFor="propertyAddress" className="form-label">Property Address</label>
							<input type="text" className="form-control" id="propertyAddress" value={propertyAddress} onChange={(e) => setPropertyAddress(e.target.value)} />
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="propertyPrice" className="form-label">Property Price</label>
							<input type="text" className="form-control" id="propertyPrice" value={propertyPrice} onChange={(e) => setPropertyPrice(e.target.value)} />
						</div>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="loanAmount" className="form-label">Loan Amount</label>
							<input type="text" className="form-control" id="loanAmount" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
						</div>
					</section>

					<section className="row mb-3 p-4 bg-white border rounded shadow-sm">
						<h5>Section 6</h5>
						<h3>Document Upload</h3>
						<hr/>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="proofOfId" className="form-label">Select Proof of ID</label>
							<select className="form-select" value={proofOfId} onChange={e => setProfOfId(e.target.value)}>
								<option value={'Aadhar Card'}>Aadhar Card</option>
								<option value={'Pan'}>Pan</option>
							</select>
						</div>
						<UploadWidget
							uniq='proofIdUpload'
							text ='Upload Proof of ID'
							setStorageFileURL={(url) => setProofIdUpload(url)}
							upload ={proofIdUpload}
						/>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="proofOfAddress" className="form-label">Select Proof of Address</label>
							<select className="form-select" value={proofOfAddress} onChange={e => setProofOfAddress(e.target.value)}>
								<option value={'Aadhar Card'}>Aadhar Card</option>
								<option value={'Utility Bill'}>Utility Bill</option>
							</select>
						</div>
						<UploadWidget
							uniq='proofAddressUpload'
							text ='Upload Proof of Address'
							setStorageFileURL={(url) => setProofAddressUpload(url)}
							upload ={proofAddressUpload}
						/>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="proofOfIncome" className="form-label">Select Proof of Income</label>
							<select className="form-select" value={proofOfIncome} onChange={e => setProofOfIncome(e.target.value)}>
								<option value={'Salary Slip'}>Salary Slip</option>
								<option value={'Income Tax Return'}>Income Tax Return</option>
							</select>
						</div>
						<UploadWidget
							uniq='proofIncomeUpload'
							text ='Upload Proof of Income'
							setStorageFileURL={(url) => setProofIncomeUpload(url)}
							upload ={proofIncomeUpload}
						/>
						<UploadWidget
							uniq='employmentVerification'
							help='Employment Verification Letter/ Salary Certificate'
							text ='Upload Employment Verification'
							setStorageFileURL={(url) => setEmploymentVerification(url)}
							upload ={employmentVerification}
						/>
						<UploadWidget
							uniq='bankStatement'
							help='Last 6 months'
							text ='Upload Bank Statement'
							setStorageFileURL={(url) => setBankStatement(url)}
							upload ={bankStatement}
						/>
						<div className="col-12 col-md-6 mb-3">
							<label htmlFor="propertyDocuments" className="form-label">Select Property Document</label>
							<select className="form-select" value={propertyDocuments} onChange={e => setPropertyDocuments(e.target.value)}>
								<option value={'Sale Deed'}>Sale Deed</option>
								<option value={'Sale Agreement'}>Sale Agreement</option>
							</select>
						</div>
						<UploadWidget
							uniq='propertyDocuments'
							text ='Upload Property Document'
							setStorageFileURL={(url) => setPropertyDocuments(url)}
							upload ={propertyDocuments}
						/>
						<UploadWidget
							uniq='creditScoreReport'
							text ='Upload Credit Score Report'
							setStorageFileURL={(url) => setCreditScoreReport(url)}
							upload ={creditScoreReport}
						/>
					</section>

					<div className="col-12 mb-3 text-center">
						<button className="btn btn-primary" onClick={()=> handleSave()} disabled={saving}>{saving && <Loader/>}Save and Finish</button>
					</div>
				</div>
			</div>
		</main>

	);
}