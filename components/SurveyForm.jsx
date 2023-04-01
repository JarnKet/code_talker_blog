import Link from 'next/link';

const SurveyForm = () => {
  return (
    <div className="w-full h-16 bg-gradient flex justify-center items-center">
      <span className="mr-4 text-lg hidden text-white lg:flex">
        ກະລຸນາຕອບແບບສອບຖາມ ເພື່ອການພັດທະນາ ແລະ ປັບປຸງເວັບໄຊທ໌
      </span>
      <button className="themeComponent rounded-xl p-2 w-30  text-lg hover:scale-105">
        <Link href={`/`}>📃 ແບບສອບຖາມ</Link>
      </button>
    </div>
  );
};

export default SurveyForm;
