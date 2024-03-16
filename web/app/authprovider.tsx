'use client'
 
import { Auth0Provider } from '@auth0/auth0-react';
 

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const base_url = process.env['NEXT_PUBLIC_BASE_URL'];
  console.log(base_url)
  return <Auth0Provider
  domain="dev-yy8fgw47geoyejns.us.auth0.com"
  clientId="QSmpCjrskjzMOJXn4lUP61MqmG7ulXtm"
  authorizationParams={{
      redirect_uri: base_url
  }}
  >
  {children}
  </Auth0Provider>
}