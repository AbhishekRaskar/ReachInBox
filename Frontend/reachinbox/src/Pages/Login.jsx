import React from "react";
import Logo from "../Images/Logo.png";
import Google from "../Images/Google.png";

const Login = () => {
  const handleGoogleSignUp = () => {
    // Construct the URL
    const googleAuthURL = "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fhiring.reachinbox.xyz%2Fapi%2Fv1%2Fauth%2Fgoogle-login%2Fcallback&scope=profile%20email&state=%7B%22redirectTo%22%3A%22http%3A%2F%2Flocalhost%3A3000%22%7D&client_id=353256760825-a1evig9h3b4f3mfdd2u0dvlqvtir07ib.apps.googleusercontent.com&service=lso&o2v=2&theme=mn&ddm=0&flowName=GeneralOAuthFlow";

    // Open the URL in a new window
    window.open(googleAuthURL);
  };

  return (
    <div style={{ backgroundColor: "black", color: "white", height: "100vh" }}>
      <div
        style={{
          boxShadow: "0px 0px 0px 1px rgba(246, 246, 246, 0.25)",
          height: "7%",
          margin: "auto",
        }}
      >
        <img src={Logo} alt="Logo" style={{ marginTop: 13 }} />
      </div>
      <br />
      <br />
      <br />
      <div
        style={{
          width: "25%",
          margin: "auto",
          background:
            "linear-gradient(to left, rgba(60, 60, 60, 0.504), rgba(60, 60, 60, 0.504))",
          borderRadius: 5,
        }}
        onClick={handleGoogleSignUp}
      >
        <br />
        <h3
          style={{
            fontSize: "22px",
            fontWeight: 10,
            cursor: "pointer",
          }}
        >
          Create a new account
        </h3>
        <div
          style={{
            width: "70%",
            margin: "auto",
            borderRadius: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(246, 246, 246, 0.25)",
            padding: 8,
          }}
        >
          <img
            src={Google}
            width={"15%"}
            alt="Google"
            style={{ marginRight: "5px" }}
          />
          <h3
            style={{
              margin: "0px 0px 2px 0",
              fontSize: "18px",
              fontWeight: 10,
            }}
          >
            Sign Up with Google
          </h3>
        </div>
        <br />
        <button
          style={{
            background: "linear-gradient(to right, #4B63DD, #0524BF)",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Create an Account
        </button>
        <br />
        <h2
          style={{
            color: "rgba(246, 246, 246, 0.25)",
            fontSize: "16px",
            fontWeight: 10,
          }}
        >
          Already have an account?{" "}
          <span style={{ color: "white", fontSize: "16px", fontWeight: 10 }}>
            Sign In
          </span>
        </h2>
        <br />
      </div>
    </div>
  );
};

export default Login;
