import { Header, SurveyForm, Footer } from "./";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <div className=" pt-10 lg:pt-[3rem]">{children}</div>
      <Footer />
      <div className="backgroundGrid dark:backgroundGridDark absolute inset-0 z-[-10]" />
      <div className="fixed inset-0 gradient" />
    </div>
  );
};

export default Layout;
