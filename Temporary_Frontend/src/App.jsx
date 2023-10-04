import { useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComingSoon from './Components/ComingSoon';
import About from './Components/About';
import Rewards from './Components/Rewards';
import MainPage from './Components/MainPage';

function App() {
  const [queryClient] = useState(() => new QueryClient)
  return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/critics' element={<ComingSoon />} />
            <Route path='/rewards' element={<Rewards />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App
