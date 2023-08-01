import CardSlide from "../components/CardSlide";
import TypeWriter from "../components/TypeWriter";

const Hero = ({ posts }) => {
  return (
    <main className="container flex flex-col-reverse items-center justify-center w-full h-full px-8 py-10 mx-auto overflow-hidden lg:flex-row lg:gap-x-6 gap-y-14">
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="flex flex-col items-center justify-center text-center lg:text-left gap-y-7 lg:gap-y-5">
          <h1 className=" text-xl lg:text-[3rem] leading-normal hidden lg:block   font-extrabold ">
            <TypeWriter />
          </h1>
          <p className="p-2 lg:text-base text-small themeComponentRevert rounded-2xl">
            ສິ່ງທີ່ເສີມສ້າງໃຫ້ກາຍເປັນ ໂປຣແກຣມເມີທີ່ດີ ບໍ່ແມ່ນຮູບແບບ, ເຄື່ອງມື,
            ພາສາ ຫຼື ອັລກໍຣິທຶມ. ແຕ່ວ່າແມ່ນ{" "}
            <span className="font-semibold">ຮາກຖານນິດໄສ</span>,{" "}
            <span className="font-semibold">ທັດສະນະຄະຕິ</span> ແລະ{" "}
            <span className="font-semibold">ຄວາມເຂົ້າໃຈໃນສາຍອາຊີບ.</span>
          </p>
        </div>
        <div className="flex items-center justify-center w-full mt-4 lg:justify-start">
          <a
            className="p-4 font-semibold transition-all duration-300 rounded-full themeComponent lg:text-xl hover:scale-110"
            href={"#posts"}
          >
            ເລີ່ມຕົ້ນການອ່ານ
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-[1.5rem]  leading-normal lg:hidden text-center mb-6  font-extrabold ">
          <TypeWriter />
        </h1>
        <CardSlide posts={posts} />
      </div>
    </main>
  );
};

export default Hero;
