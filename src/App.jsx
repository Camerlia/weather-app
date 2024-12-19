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
    <div className="bg-zinc-300 text-zinc-950 h-screen">
     <div  className="max-w-7xl m-auto text-center py-8">
     <QueryClientProvider client={queryClient}>
     <Weather />
     </QueryClientProvider>
     </div> 
    </div>
  )
}

export default App
