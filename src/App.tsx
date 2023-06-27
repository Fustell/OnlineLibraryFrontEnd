import React from 'react';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import Main from './pages/Main/Main';
import Header from './components';
import { useSelector } from 'react-redux';
import { IRootState } from './store';

function App() {

  const isLoggined = useSelector(
      (state: IRootState) => !!state.auth.authData.accessToken
  )

  return (
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/dashboard' element={isLoggined ? <Dashboard/> : <Navigate to="/"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
