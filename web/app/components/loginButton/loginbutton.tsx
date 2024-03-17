import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="w-[210px] h-[76px] rounded-3xl text-lg font-bold" style={{'background':'white'}} onClick={() => loginWithRedirect()}>Log In With OAuth</button>;
};

export default LoginButton;