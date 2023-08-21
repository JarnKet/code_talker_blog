import { useRouter } from "next/router";
import { Loader } from "../../components";
import { useEffect } from "react";

const dashboard = process.env.NEXT_PUBLIC_CMS_DASHBOARD_URL;

const loaderBg =
  "https://hygraph.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FeBI48jXnRyaKyRC5Sxxk&w=1200&q=75";

const CMSDashboard = () => {
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
      <Loader
        imgURL={loaderBg}
        loaderStyle={`-translate-y-48 text-white`}
        textStyle={`text-2xl lg:text-8xl`}
        ring={`lg:w-[100px]`}
      />
    </>
  );
};

export default CMSDashboard;
