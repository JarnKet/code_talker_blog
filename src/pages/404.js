import Head from 'next/head';
import Image from 'next/image';
import { errorImg } from '/public';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Code Talker | ບໍ່ພົບໜ້າທີ່ທ່ານຕ້ອງການ</title>
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-screen">
        <Image
          src={errorImg}
          alt="error"
          width={400}
          height={400}
          loading="lazy"
        />
        <h1 className="mt-6 text-4xl font-bold ">ບໍ່ພົບໜ້າທີ່ທ່ານຕ້ອງການ!</h1>
      </section>
    </>
  );
};

export default Custom404;
