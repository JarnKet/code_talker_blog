import { Header, SurveyForm, Footer } from "./";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {/* <SurveyForm /> */}
      <div className="relative mt-14 lg:mt-[4.5rem]">
        {children}
        <div className="backgroundGrid dark:backgroundGridDark absolute inset-0 z-[-10]" />
        <div className="fixed inset-0 gradient" />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
