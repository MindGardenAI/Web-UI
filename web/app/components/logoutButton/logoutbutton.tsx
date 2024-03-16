'use client'
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const base_url = process.env['NEXT_PUBLIC_BASE_URL'];
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: base_url } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;