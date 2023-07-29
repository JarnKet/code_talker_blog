import { Header, Footer } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className=" pt-10 lg:pt-[3rem]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
