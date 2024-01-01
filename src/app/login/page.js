"use client";
import style from "../page.module.css";
import hero from "@/img/hero.jpeg";
import React, { useState, useEffect } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { app } from "@/app/config";
import { useRouter } from "next/navigation";
import "firebase/auth";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otpSent, setOtpSent] = useState(false);

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
          alert("OTP sent");
        })
        .catch((error) => {
          setIsLoading(false);
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleOTPSubmit = async () => {
    try {
      await confirmationResult.confirm(otp);
      setOtp("");
      alert("OTP verified");
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <div
        className={" d-flex align-items-center"}
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.20) 100%), url(${hero.src})`,
        }}
      >
        <div
          className={`container d-flex align-items-center ${style.hero_label}`}
          style={{ marginTop: "296px", marginBottom: "500px" }}
        >
          <div className="row d-flex align-items-center">
            <div className="col-12 col-lg-9 col-xl-7 align-items-center">
              <div
                className="container bg-white rounded shadow mx-auto d-flex align-items-center justify-content-center"
                style={{
                  marginTop: "-125px",
                  position: "absolute",
                  height: "50%",
                  width: "25%",
                }}
              >
                <div className="col-12 text-primary py-4 px-4 d-flex flex-column align-items-center">
                  <span className="mb-3">Login</span>
                  <form className="mb-4">
                    <div className="row g-3">
                      <div className="col-12 mb-3">
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
                        <div className="col-12 mb-3">
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
                      <div className="col-12 mb-3">
                        <button
                          type="button"
                          className={`bg-${
                            otpSent ? "green" : "blue"
                          }-500 text-white border-0 rounded-3 py-2 px-3`}
                          style={{
                            backgroundColor: `${otpSent ? "green" : "blue"}`,
                          }}
                          onClick={otpSent ? handleOTPSubmit : handleSendOtp}
                        >
                          {otpSent ? "Submit OTP" : "Send OTP"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
