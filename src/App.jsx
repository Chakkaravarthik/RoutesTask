import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeRouter from './pages/home'
import AllTodolist from './pages/Routes/all'
import FUllTodolist from './pages/Routes/fullstack';
import DataTodolist from './pages/Routes/datascience';
import CyberTodolist from './pages/Routes/cybersecurity';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={
            <div style={{ display: 'flex' , flexDirection: 'column'}}>
              <HomeRouter />
              <div style={{ flex: 1 }}>
                <Routes>
                  <Route path="all" element={<AllTodolist />} />
                  <Route path="full-stack" element={<FUllTodolist />} />
                  <Route path="data-science" element={<DataTodolist />} />
                  <Route path="cyber-security" element={<CyberTodolist />} />
                </Routes>
              </div>
            </div>
          }/>
      </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
