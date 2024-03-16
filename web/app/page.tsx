'use client'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./components/navigation/logoutbutton";

export default function Page() {
  const {isAuthenticated} = useAuth0()
  return (
  <>
      <p>kk</p>
      <a href='/login'>Login</a>
      {isAuthenticated && <LogoutButton/>}
  </>
  );
}
