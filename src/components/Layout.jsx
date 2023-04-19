import React from 'react';
import { Header, SurveyForm, Footer } from './';

const Layout = ({ children }) => {
  return (
    <>
      <SurveyForm />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
