import Carusel from "../utils/Carusel";
import SimpleCarousel from "../utils/SimpleCarusel";

export default function MenuContFood() {
  return (
    <>
      <div className="bg-black rounded-xl w-[89vw] h-[100vh]  flex flex-col xl:w-[72vw] xl:h-[80vh]">
        <h1 className="text-white text-center uppercase text-4xl p-4">
          Nivel 1
        </h1>
        <div
          id="nivel1"
          className="xl:p-5"
          style={{ height: "50%", position: "relative" }}
        >
          <SimpleCarousel />
          <Carusel />
        </div>
        <></>
        <h1 className="text-white text-center uppercase text-4xl p-4">
          Nivel 2
        </h1>
        <div id="nivel2" className="xl:p-5" style={{ height: "50%" }}>
          <SimpleCarousel />

          <Carusel />
        </div>
      </div>
    </>
  );
}
