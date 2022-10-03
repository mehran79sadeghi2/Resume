import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Home from './views/pages/Home';
import NotFound from './views/pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/404' exact element={<NotFound />} />
      <Route path='*' element={<Navigate to='/404' />} />
    </Routes>
  );
}

export default App;
