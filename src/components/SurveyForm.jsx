import Link from 'next/link';
import { formLinks } from '../constants';

const SurveyForm = () => {
  return (
    <div className="flex items-center justify-center w-full mt-16 lg:mt-20 h-14 lg:h-16 themeComponent">
      <span className="hidden mr-4 text-lg lg:block">
        ກະລຸນາຕອບແບບສອບຖາມ ເພື່ອການພັດທະນາ ແລະ ປັບປຸງເວັບໄຊທ໌
      </span>
      <button className="p-1 text-base transition-all duration-500 rounded-full themeComponentRevert lg:p-2 w-30 lg:text-lg hover:scale-105">
        <Link href={formLinks.interview} target="_blank">
          📃 ແບບສອບຖາມ
        </Link>
      </button>
    </div>
  );
};

export default SurveyForm;
