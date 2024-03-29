/* eslint-disable react/prop-types */
import { useSwiper } from "swiper/react";
const next = "NEXT";
const SwiperButton = ({ action }) => {
  const swiper = useSwiper();
  const nextLogic = () => action.toLowerCase() === next.toLowerCase();
  return (
    <button
      aria-label="navigation button"
      type="button"
      className={nextLogic() ? "swiper-button-next" : "swiper-button-prev"}
      onClick={() => (nextLogic() ? swiper.slideNext() : swiper.slidePrev())}
    >
      {nextLogic() ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      )}
    </button>
  );
};
export default SwiperButton;
