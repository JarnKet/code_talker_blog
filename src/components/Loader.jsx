import Image from "next/image";

const Loader = ({ imgURL, loaderStyle, textStyle, ring }) => (
  <div className="flex flex-col items-center justify-center w-full min-h-screen text-center">
    {imgURL && (
      <Image
        src={imgURL}
        alt="loaderBg"
        className="inset-0 object-cover z-[-1]"
        fill
        sizes="100%"
        unoptimized
      />
    )}
    <div
      className={`${loaderStyle} flex flex-col gap-5 items-center justify-center`}
    >
      <h1 className={`${textStyle}  font-bold text-center `}>
        ກຳລັງໂຫຼດຂໍ້ມູນ
      </h1>
      <span className={`loading loading-ring loading-lg ${ring} `}></span>
    </div>
  </div>
);

export default Loader;
