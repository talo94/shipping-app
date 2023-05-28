import React from "react";
import Header from "../Header";

interface props {
  children: React.ReactNode;
  className?: string;
}
const MainLayout = ({ className, children }: props) => {
  return (
    <div className={className}>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
