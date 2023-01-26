import React, { FC, ReactNode } from "react";

import "./../../../assets/css/App.css";
interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = ({ children, ...props }) => {
  // const navigate = useNavigate();
  return (
    <div className="App">
    
      <header className="App-header">{children}</header>
    </div>
  );
};

export default Layout;
