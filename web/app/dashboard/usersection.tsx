import { useEffect, useState } from 'react'
import Image from'next/image'
import filler from '../../public/images/Default Avatar.png'
import { useAuth0 } from "@auth0/auth0-react"

const UserSection = () => {
  const {user, isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();
  const [userMetadata, setUserMetadata] = useState<any>(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      if(!!user){
        const domain = "dev-yy8fgw47geoyejns.us.auth0.com";
    
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const user_metadata = await metadataResponse.json();
        setUserMetadata(user_metadata);
      }
    };
  
    getUserMetadata();
  }, [user?.sub]);

  if(isLoading){
    return <div>Loading...</div>
  }


  return (
    isAuthenticated && <div className='bg-[var(--primary-color)] rounded-[8rem] flex flex-col p-8 drop-shadow-xl'>
      <div className='justify-center items-center my-8'>
        <Image className='rounded-full mx-auto' src={userMetadata?.picture || filler} alt='' width={300} height={300}/>
      </div>      
      <div className='justify-center items-center mx-auto text-center'>
        <h1 className='text-[48px]'>{userMetadata?.name}</h1>
        <h2 className='text-[30px]'>{userMetadata?.email}</h2>
      </div>
    </div>
  )
}

export default UserSection