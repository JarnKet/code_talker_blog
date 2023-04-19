import Link from 'next/link';

const SurveyForm = () => {
  return (
    <div className="w-full h-10 lg:h-16  themeComponent flex justify-center items-center">
      <span className="mr-4 text-lg hidden  lg:flex">
        ກະລຸນາຕອບແບບສອບຖາມ ເພື່ອການພັດທະນາ ແລະ ປັບປຸງເວັບໄຊທ໌
      </span>
      <button className="themeComponentRevert text-base p-1 lg:p-2 w-30 rounded-full  lg:text-lg hover:scale-105">
        <Link href={`/`}>📃 ແບບສອບຖາມ</Link>
      </button>
    </div>
  );
};

export default SurveyForm;
