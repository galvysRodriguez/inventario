"use client"
import { UserProvider } from "@/app/context/user" 

const Layout = ({ children }) => {
  return (
    <UserProvider>
        {children}
    </UserProvider>
  );
};

export default Layout;