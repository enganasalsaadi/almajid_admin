import React, { FC ,ReactNode} from "react";
import { Navigate } from 'react-router-dom'
interface Props {
  isSignedIn?:boolean,
  children?: ReactNode
}

const Protected :FC<Props> =({isSignedIn,children }) => {
  if (!isSignedIn) {
    return <Navigate to="/" replace />
  }
  return <>{children}</>
}
export default Protected