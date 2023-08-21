import { useRouter } from "next/router";
import { Loader } from "../../components";
import { useEffect } from "react";

const dashboard = process.env.NEXT_PUBLIC_HOST_DASHBOARD_URL;
const loaderBg =
  "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5Q6iTwx2CBd0pFrD9vzZWK/e537e396e236e5daa54a31ff7056a77d/papercuts-dark.png";

const HostDashboard = () => {
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
        loaderStyle={`text-white translate-y-32`}
        textStyle={`text-2xl`}
      />
    </>
  );
};

export default HostDashboard;
