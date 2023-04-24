import Link from 'next/link';

const SurveyForm = () => {
  return (
    <div className="flex items-center justify-center w-full h-10 mt-20 lg:h-16 themeComponent">
      <span className="hidden mr-4 text-lg lg:block">
        ກະລຸນາຕອບແບບສອບຖາມ ເພື່ອການພັດທະນາ ແລະ ປັບປຸງເວັບໄຊທ໌
      </span>
      <button className="p-1 text-base transition-all duration-500 rounded-full themeComponentRevert lg:p-2 w-30 lg:text-lg hover:scale-105">
        <Link href={`/`}>📃 ແບບສອບຖາມ</Link>
      </button>
    </div>
  );
};

export default SurveyForm;
