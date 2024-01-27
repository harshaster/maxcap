"use client";
import hero from "@/img/hero.jpeg";
import { useState, useEffect } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import { auth } from "@/config";
import { useRouter } from "next/navigation";
import "firebase/auth";
import Loader from "@/components/loader";
import { useSearchParams } from "next/navigation";
import LoadingOverlay from "@/components/overlay";

export default function Login() {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [otp, setOtp] = useState("");
	const [confirmationResult, setConfirmationResult] = useState(null);
	const [otpSent, setOtpSent] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(null);
	const [error, setError] = useState(false);
	const [fetching, setFetching] = useState(false);

	const router = useRouter();
	const query = useSearchParams();

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

	useEffect(() => {
		setFetching(true)
		auth.onAuthStateChanged((user) => {
			if (user) {
				router.push("/dashboard");
			}
			setFetching(false)
		})
	},[])

	const handlePhoneNumberChange = (e) => {
		setPhoneNumber(e.target.value);
	};

	const handleOTPChange = (e) => {
		setOtp(e.target.value);
	};

	const handleSendOtp = (e) => {
		e.preventDefault()
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

	const handleOTPSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		try {
			await confirmationResult.confirm(otp);
			setOtp("");
			if (query.get("redirect")){
				router.push(router.query.redirect);
				return;
			}
			router.push("/dashboard");
			
		} catch (error) {
			console.log(error)
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
			{fetching ? <LoadingOverlay/> : ''}
			<div className='my-4 container'>
				<div className="row align-items-center justify-content-between">
					<div className="col-12 p-5 col-lg-9 col-xl-4 bg-white rounded">
					{(otpSent || error ) ? <div className={`alert alert-${otpSent && !error ? 'success' : 'danger'}`} role="alert">{message}</div> : ''}
						<h2 className="fancy-font mb-3">Login</h2>
						<form onSubmit={otpSent ? handleOTPSubmit : handleSendOtp} className="mb-4">
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
					<div className="col-12 col-lg-3 col-xl-8">
						<h2 className="fancy-font text-end text-white">
							<span className="display-3">Get started</span> <br/> with <br/><span className="display-2">Maxx Capital</span> <br/> and get your <span className=" p-2 bg-primary fw-bold">DREAMS</span> fulfilled.
						</h2>
					</div>
				</div>
			</div>
		</div>
	</main>
	);
}
