import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import LoginPage from './pages/LoginPage/LoginPage';
import SingleBook from './pages/SingleBook/SingleBook';
import Header from './components';
import { useSelector } from 'react-redux';
import { IRootState, useAppDispatch } from './store';
import { JSX } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { getProfile } from './store/auth/actionCreators';


function App() {  
  
  const dispatch = useAppDispatch();
  const isLoggined = useSelector(
    (state: IRootState) => !!state.auth.authData.access
  );
  useEffect(() => {
    dispatch(getProfile());
  }, [])  
  
  const ProtectedRoute = (e: JSX.Element) => {
    const isLoading = useSelector(
      (state: IRootState) => !!state.auth.authData.isLoading
      );

      if(isLoggined && !isLoading){
        return e;
      }
      if(!isLoading){
        return <Navigate to="/"/>
      }
    else{}
  }

  const IfNotLoginned = (e:JSX.Element) => {

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
          <Route path='/login' element={IfNotLoginned(<LoginPage/>)}/>
          <Route path="/book/:id" element={ProtectedRoute(<SingleBook/>)}/>
          <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
