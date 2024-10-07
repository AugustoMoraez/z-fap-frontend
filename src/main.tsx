import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import  {GlobalStyle}  from './GlobalStyle.ts'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import {queryClient} from "./libs/requests/queryClient.ts"
import { Provider } from 'react-redux'
import { store } from './libs/redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>

      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GlobalStyle/>
          <App />
        </BrowserRouter>
      </QueryClientProvider>

    </Provider>
  </StrictMode>,
)
