import ReactNode from 'react';
import { Navigate } from 'react-router';

const PrivateRoute = ({children} : {children: React.ReactNode}) => {
  const token = localStorage.getItem("token");

  if(!token){
    // Redirigir al login
    return <Navigate to='/login'/>
  }

  return <>{children}</>
}

export default PrivateRoute;