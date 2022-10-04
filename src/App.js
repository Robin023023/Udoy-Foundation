import React,{ Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import {RotateLoader} from 'react-spinners'
const All = React.lazy(() => import('./components/All'));



const Client=new QueryClient()

export default function App() {
    
  return (
    <QueryClientProvider client={Client}>
    <Suspense fallback={<div className='pt-5'><RotateLoader color="#36d7b7" /></div>}>
      <All/>
    </Suspense> 
    </QueryClientProvider>
  )
}
