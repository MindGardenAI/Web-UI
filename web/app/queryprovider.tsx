'use client'
 
import { QueryClient, QueryClientProvider } from "react-query";
 
const queryClient = new QueryClient({})
export default function QueryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const base_url = process.env['NEXT_PUBLIC_BASE_URL'];
  return <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
}