import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import LoginPage from './pages/LoginPage/LoginPage';
import SingleBook from './pages/SingleBook/SingleBook';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import { IRootState, useAppDispatch } from './store';
import { JSX } from 'react/jsx-runtime';
import { useEffect, useRef } from 'react';
import { getProfile } from './store/auth/actionCreators';
import Loading from './components/Loading';


function App() {  
  
  const dispatch = useAppDispatch();
  const isLoggined = useSelector(
    (state: IRootState) => !!state.auth.authData.access
    );
    const isNotExecuted = useRef(true);
    useEffect(() => {
      if(isNotExecuted.current){
        isNotExecuted.current = false;
        dispatch(getProfile());
      }
    }, [dispatch])
  
  const ProtectedRoute = ({ isLoggined, children }:any) => {
    const isLoadingAuthData = useSelector(
      (state: IRootState) => !!state.auth.authData.isLoading
    );

      if(isLoggined){
        return children;
      }
      if(!isLoggined &&  !isLoadingAuthData){
        return <Loading/>
     }
      return <p>This book is not available</p>
  }

  const IfNotLoginned = (e:JSX.Element) => {

    const isLoading = useSelector(
      (state: IRootState) => !!state.auth.profileData.isLoading
    );
    if(isLoading){
      return <Loading/>
    }
    if(!isLoggined && !isLoading){
       return e;
    }
    return <Navigate to="/"/>
    
  }

  return (
    <Router>
      <Header/>
        <Routes>
          <Route path='/login' element={IfNotLoginned(<LoginPage/>)}/>
          <Route path="/book/:id" element={
                      <ProtectedRoute isLoggined={isLoggined}>
                      <SingleBook/>
                  </ProtectedRoute>
          }/>
          <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
