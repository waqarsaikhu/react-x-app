import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import OtpInput from "otp-input-react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast, Toaster } from "react-hot-toast";

const LoginModal = ({ onClose }) => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const navigate = useNavigate();

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignUp();
          },
          "expired-callback": () => {},
        }
      );
    }
  }

  function onSignUp() {
    setLoading(true);
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending OTP:", error.message);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        setLoading(false);
        navigate("SignupForm/Home");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <Toaster toastOptions={{ duration: 4000 }} />
      <div id="recaptcha-container"></div>
      <div className="bg-gray-200 p-8 rounded-2xl h-96 w-96 relative">
        <button
          className="bg-whitw rounded-full m-2 px-2 mx-1 hover:bg-gray-300 absolute top-0 left-0"
          onClick={onClose}
        >
          <span className="text-black font-bold text-ellipsis">X </span>
        </button>
        <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
          {showOTP ? (
            <>
              <div className="bg-gray-200 text-sky-500 w-fit mx-auto p-4 rounded-full">
                <BsFillShieldLockFill size={30} />
              </div>
              <label
                htmlFor="otp"
                className="font-bold text-xl text-black text-center"
              >
                Enter your OTP
              </label>
              <div className="w-full">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container"
                  inputStyle={{
                    width: "100%",
                  }}
                />
              </div>
              <button
                onClick={onOTPVerify}
                className="bg-sky-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded-full hover:bg-sky-700"
              >
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
                <span>Verify OTP</span>
              </button>
            </>
          ) : (
            <>
              <div className="bg-gray-200 text-sky-500 w-fit mx-auto p-4 rounded-full">
                <BsTelephoneFill size={30} />
              </div>
              <label
                htmlFor=""
                className="font-bold text-xl text-black text-center"
              >
                Sign In with your Number
              </label>
              <div className="w-full">
                <PhoneInput
                  className=""
                  country={"pk"}
                  value={ph}
                  onChange={setPh}
                  inputStyle={{
                    width: "100%",
                  }}
                />
              </div>
              <button
                onClick={onSignUp}
                className="bg-sky-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded-full hover:bg-sky-700"
              >
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
                <span>Send code via SMS</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
