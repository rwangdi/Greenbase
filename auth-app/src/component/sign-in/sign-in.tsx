import { Button, Container } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import InputForm from "../common-component/input-form/input-form";

function SignIn() {
  const responseGoogle = (response: any) => {
    console.log(response);
  };
  return (
    <Container className="d-flex flex-column gap-4 p-60 bg-white w-30 rounded-2 blur-4">
      <div className="d-flex flex-column align-items-center">
        <h3>Create an Account</h3>
        <span className="d-inline-flex gap-3">
          <p className="fw-light">Have and Account?</p>
          <a href="https://myaccount.google.com/">Sign In</a>
        </span>
      </div>
      <div className="d-flex flex-column gap-4 py-60">
        <div>
          <InputForm name="Enter Email Address" type="email" id="email" />
        </div>
        <div>
          <InputForm name="Create Password" type="password" id="password" />
        </div>
      </div>
      <Button variant="primary" className="btn align-items-center">
        Create Account
      </Button>
      <div className="d-flex flex-column align-items-center">
        <p className="fs-10">By creating account, you agree to our</p>
        <a href="https://policies.google.com/terms?hl=en-US">
          Terms of Service
        </a>
      </div>
      <hr className="my-0" />
      <p className="align-self-center">Or create an account using:</p>
      <div className="py-12 d-flex flex-column">
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Continue with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          style={{ alignItems: "center" }}
        />
      </div>
    </Container>
  );
}
export default SignIn;
