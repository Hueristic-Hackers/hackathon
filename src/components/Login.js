import React from "react"
import { GoogleLogin } from "react-google-login"

const clientId =
  "908989225319-b6d80at9d1t9a383q3ck4rad2l49daj3.apps.googleusercontent.com"

function Login() {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj)
  }

  const onFailure = (res) => {
    console.log("[Login failed] res:", res)
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  )
}

export default Login
