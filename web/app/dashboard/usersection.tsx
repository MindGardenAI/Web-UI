import Image from'next/image'
import filler from '../../public/DefaultAvatar.png'
import { useAuth0 } from "@auth0/auth0-react"

const UserSection = () => {
  const {user, isAuthenticated, isLoading} = useAuth0();

  if(isLoading){
    return <div>Loading ...</div>
  }

  return (
    isAuthenticated && <div>
      <Image src={user?.picture || filler} alt='' width={480} height={480}/>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  )
}

export default UserSection