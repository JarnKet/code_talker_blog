import { Header, SurveyForm, Footer } from './';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <Header />
      <SurveyForm />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
