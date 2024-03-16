'use client'
 
import { Auth0Provider } from '@auth0/auth0-react';
 

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <Auth0Provider
  domain="dev-yy8fgw47geoyejns.us.auth0.com"
  clientId="QSmpCjrskjzMOJXn4lUP61MqmG7ulXtm"
  authorizationParams={{
      redirect_uri: 'https://mindgardenai.tech/'
  }}
  >
  {children}
  </Auth0Provider>
}