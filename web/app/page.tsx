'use client'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./components/logoutButton/logoutbutton";

export default function Page() {
  const {isAuthenticated} = useAuth0()
  return (
  <>
  </>
  );
}
