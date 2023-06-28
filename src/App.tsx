import React, { useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import Main from './pages/Main/Main';
import Header from './components';
import { useSelector } from 'react-redux';
import { IRootState, useAppDispatch } from './store';
import { getProfile } from './store/auth/actionCreators';


function App() {

  const dispatch = useAppDispatch();
  const isLoggined = useSelector(
    (state: IRootState) => !!state.auth.authData.access
  );
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch])
  

  const Element = () => {
    const isLoading = useSelector(
      (state: IRootState) => !!state.auth.authData.isLoading
    );
    console.log(isLoading)
    if(isLoggined){
      return <Dashboard/>
    }
    if(!isLoading){
      return <Navigate to="/"/>
    }
  }

  
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/dashboard' element={Element()}/>
      </Routes>
    </Router>
  );
}

export default App;
