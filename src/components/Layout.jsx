import React from 'react';
import { Header, SurveyForm, Footer } from './';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <SurveyForm />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
