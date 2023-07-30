import { Header, Footer } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="pt-10 lg:pt-[3rem]  relative">
        {children}
        <div className="background fixed inset-0 z-[-10]" />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
