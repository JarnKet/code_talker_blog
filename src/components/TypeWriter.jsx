import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <div className="text-center lg:text-left">
      <Typewriter
        onInit={(typewriter) => {
          typewriter

            .pauseFor(1000)
            .typeString("ບົດຄວາມ")
            .pauseFor(1000)

            .typeString("ເພື່ອໂປຣແກຣມເມີ")
            .pauseFor(1000)
            .typeString("ແລະ ຄົນທີ່ຕ້ອງການພັດທະນາຕົນເອງ")
            .pauseFor(1000)

            .deleteChars(45)
            .typeString("ປະສົບການ")
            .pauseFor(1000)

            .deleteChars(8)
            .typeString("ການພັດທະນາຕົນເອງ")
            .pauseFor(1000)

            .deleteChars(16)
            .typeString("ການຂຽນໂປຣແກຣມ")
            .pauseFor(1000)
            .start();
        }}
        options={{
          loop: true,
          autoStart: true,
        }}
      />
    </div>
  );
};

export default TypeWriter;
