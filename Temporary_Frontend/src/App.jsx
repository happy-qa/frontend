import { useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComingSoon from './Components/ComingSoon';
import About from './Components/About';

function App() {
  const [queryClient] = useState(() => new QueryClient)
  return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ComingSoon />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App
