import { Header, SurveyForm, Footer } from './';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SurveyForm />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
