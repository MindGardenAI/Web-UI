import Image from'next/image'
import filler from '../../public/images/Default Avatar.png'
import { useAuth0 } from "@auth0/auth0-react"

const UserSection = () => {
  const {user, isAuthenticated, isLoading} = useAuth0();

  if(isLoading){
    return <div>Loading ...</div>
  }

  return (
    isAuthenticated && <div className='bg-[var(--primary-color)] rounded-[8rem] flex flex-col p-8'>
      <div className='justify-center items-center my-8'>
        <Image className='rounded-full mx-auto' src={user?.picture || filler} alt='' width={300} height={300}/>
      </div>      
      <div className='justify-center items-center mx-auto text-center'>
        <h1 className='text-[48px]'>{user?.name}</h1>
        <h2 className='text-[30px]'>{user?.email}</h2>
      </div>
    </div>
  )
}

export default UserSection