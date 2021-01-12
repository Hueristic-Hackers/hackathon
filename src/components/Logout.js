import React from "react"
import { GoogleLogout } from "react-google-login"

const clientId =
  "908989225319-b6d80at9d1t9a383q3ck4rad2l49daj3.apps.googleusercontent.com"

function Logout() {
  const onSuccess = () => {
    alert("Logout made successfully")
  }

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  )
}

export default Logout
