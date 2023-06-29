import React, { useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components';
import { useSelector } from 'react-redux';
import { IRootState, useAppDispatch } from './store';
import { getProfile } from './store/auth/actionCreators';
import { JSX } from 'react/jsx-runtime';


function App() {

  const dispatch = useAppDispatch();
  const isLoggined = useSelector(
    (state: IRootState) => !!state.auth.authData.access
  );
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch])
  

  const ProtectedRoute = (e: JSX.Element) => {
    const isLoading = useSelector(
      (state: IRootState) => !!state.auth.authData.isLoading
    );
    if(isLoggined){
      return e;
    }
    else{}
    if(!isLoading){
      return <Navigate to="/"/>
    }
  }

  const IsAlreadyLoginned = (e:JSX.Element) => {

    const isLoading = useSelector(
      (state: IRootState) => !!state.auth.authData.isLoading
    );

    if(!isLoggined && !isLoading){
      return e;
    }

    if(!isLoading){
      return <Navigate to="/"/>
    }
    
  }

  
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path='/login' element={IsAlreadyLoginned(<LoginPage/>)}/>
          <Route path='/dashboard' element={ProtectedRoute(<Dashboard/>)}/>
      </Routes>
    </Router>
  );
}

export default App;
