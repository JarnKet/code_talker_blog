import Typewriter from "typewriter-effect";

import { sectionDescription, formLinks } from "../constants";
const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full gap-y-14 lg:gap-y-10">
      <div className="flex flex-col items-center justify-center text-center gap-y-7 lg:gap-y-5">
        <h1 className="text-[2.5rem] lg:text-[5rem]   font-extrabold ">
          ບົດຄວາມເພື່ອ <span className="text-gradient">ໂປຣແກຣມເມີ</span> ແລະ
          ຄົນທີ່ຕ້ອງການ <span className="text-gradient">ພັດທະນາຕົນເອງ</span>
        </h1>
        <p className="p-2 card dark:cardDark rounded-2xl">
          ສິ່ງທີ່ເສີມສ້າງໃຫ້ກາຍເປັນ ໂປຣແກຣມເມີທີ່ດີ ບໍ່ແມ່ນຮູບແບບ, ເຄື່ອງມື,
          ພາສາ ຫຼື ອັລກໍຣິທຶມ. ແຕ່ວ່າແມ່ນ{" "}
          <span className="font-semibold">ຮາກຖານນິດໄສ</span>,{" "}
          <span className="font-semibold">ທັດສະນະຄະຕິ</span> ແລະ
          <span className="font-semibold">ຄວາມເຂົ້າໃຈໃນສາຍອາຊີບ.</span>
        </p>
      </div>
      <div className="flex items-center justify-center w-full gap-x-4">
        <a
          className="p-4 font-semibold transition-all duration-300 rounded-full themeComponent lg:text-xl hover:scale-110"
          href={"#postcard"}
        >
          ເລີ່ມຕົ້ນການອ່ານ
        </a>
        <a
          className="p-4 font-semibold transition-all duration-300 rounded-full themeComponentRevert lg:text-xl hover:scale-110"
          href={formLinks.interview}
          target="_blank"
        >
          📃 ແບບສອບຖາມ
        </a>
      </div>
    </main>
  );
};

export default Hero;
