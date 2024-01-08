"use client";
import style from "../page.module.css";
import hero from "@/img/hero.jpeg";
import { useState, useEffect } from "react";
import {
	getAuth,
	RecaptchaVerifier,
	signInWithPhoneNumber,
} from "firebase/auth";
import { app } from "@/config";
import { useRouter } from "next/navigation";
import "firebase/auth";
import Loader from "@/components/loader";

export default function Login() {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [otp, setOtp] = useState("");
	const [confirmationResult, setConfirmationResult] = useState(null);
	const [otpSent, setOtpSent] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(null);
	const [error, setError] = useState(false);

	const auth = getAuth(app);
	const router = useRouter();

	useEffect(() => {
		window.recaptchaVerifier = new RecaptchaVerifier(
			auth,
			"recaptcha-container",
			{
				size: "normal",
				callback: (response) => {
					onSignup();
				},
				"expired-callback": () => {},
			}
		);
	}, [auth]);

	const handlePhoneNumberChange = (e) => {
		setPhoneNumber(e.target.value);
	};

	const handleOTPChange = (e) => {
		setOtp(e.target.value);
	};

	const handleSendOtp = () => {
		try {
			setError(false);
			setMessage(null)
			setIsLoading(true);
			const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g, "")}`;
			signInWithPhoneNumber(
				auth,
				formattedPhoneNumber,
				window.recaptchaVerifier
			)
			.then((confirmationResult) => {
				setConfirmationResult(confirmationResult);
				setOtpSent(true);
				setIsLoading(false);
				setMessage("OTP sent successfully")
				;
			})
			.catch((error) => {
				setIsLoading(false);
				setError(true);
				setMessage("Some erroe occured")
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleOTPSubmit = async () => {
		setIsLoading(true)
		try {
			await confirmationResult.confirm(otp);
			setOtp("");
			router.push("/dashboard");
			// I have to write code here
		} catch (error) {
			setError(true)
			setMessage("Invalid OTP")
		}
		finally{
			setIsLoading(false)
		}
	};

	return (
	<main>
		<div
			className="d-flex align-items-center"
			style={{
				background: `linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.20) 100%), url(${hero.src})`,
				paddingTop: "80px"
			}}
		>
			<div className='my-4 container'>
				<div className="row align-items-center">
					<div className="col-12 p-5 col-lg-9 col-xl-4 bg-white rounded">
					{(otpSent || error ) ? <div className={`alert alert-${otpSent && !error ? 'success' : 'danger'}`} role="alert">{message}</div> : ''}
						<h2 className="fancy-font mb-3">Login</h2>
						<form className="mb-4">
							<div className="my-3">
								<label
									htmlFor="phoneNumber"
									className="form-label text-primary label-style"
								>
									Phone Number:
								</label>
								<input
									type="tel"
									className="form-control border border-primary"
									id="phoneNumber"
									value={phoneNumber}
									placeholder="Enter Phone Number with Country Code"
									onChange={handlePhoneNumberChange}
								/>
							</div>
							{!otpSent ? <div id="recaptcha-container"></div> : null}
							{otpSent && (
								<div className="my-3">
									<label
									htmlFor="otp"
									className="form-label text-primary "
									>
									OTP:
									</label>
									<input
									type="text"
									className="form-control border border-primary"
									id="otp"
									value={otp}
									onChange={handleOTPChange}
									placeholder="Enter OTP"
									/>
								</div>
							)}
							<div className="my-3">
								<button
									type="button"
									className={`btn btn-${otpSent ? "success" : "primary"}
									border-0 rounded-3 py-2 px-3}`}
									disabled={isLoading}
									onClick={otpSent ? handleOTPSubmit : handleSendOtp}
								>
									{isLoading ? (<Loader/>) : ''}
									{otpSent ? "Submit OTP" : "Send OTP"}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</main>
	);
}
