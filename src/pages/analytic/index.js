import { useRouter } from "next/router";
import { Loader } from "../../components";
import { useEffect } from "react";

const dashboard = process.env.NEXT_PUBLIC_ANALYTIC_DASHBOARD_URL;

const Dashboard = () => {
  const router = useRouter();

  function redirectToDashboard() {
    console.log(dashboard);
    const intervalId = setInterval(() => {
      router.push(`${dashboard}`);
      clearInterval(intervalId); // Clear the interval after redirecting
    }, 2000);
  }

  useEffect(() => {
    redirectToDashboard();
  }, []); // Run pushToDashboard only once, when the component mounts

  return (
    <>
      <Loader />
    </>
  );
};

export default Dashboard;
