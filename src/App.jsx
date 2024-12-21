/* eslint-disable no-unused-vars */
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Weather from "./components/Weather"

const queryClient = new QueryClient()

function App() {
  
  return (
    <div className="bg-zinc-300 text-zinc-950  min-h-screen">
     <div  className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center">
     <QueryClientProvider client={queryClient}>
     <Weather />
     </QueryClientProvider>
     </div> 
    </div>
  )
}

export default App
