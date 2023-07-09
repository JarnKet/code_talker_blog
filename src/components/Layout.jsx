import { Header, SurveyForm, Footer } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className=" pt-10 lg:pt-[3rem]">{children}</div>
      <Footer />
      <div className=" backgroundGrid dark:backgroundGridDark fixed inset-0 z-[-10]" />
      <div className="fixed inset-0 gradient" />
    </>
  );
};

export default Layout;
