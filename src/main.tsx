import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import  {GlobalStyle}  from './GlobalStyle.ts'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import {queryClient} from "./libs/queryClient.ts"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle/>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
