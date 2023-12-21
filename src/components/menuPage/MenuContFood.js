import Carusel from "../utils/Carusel";
import SimpleCarousel from "../utils/SimpleCarusel";

export default function MenuContFood() {
  return (
    <>
      <div className="bg-black rounded-xl w-[89vw] h-[100vh]  flex flex-col xl:w-[72vw] xl:h-[80vh]">
        <div
          id="nivel1"
          className="xl:p-5"
          style={{ height: "50%", position: "relative" }}
        >
          <SimpleCarousel />
          <Carusel />
        </div>
        <div id="nivel2" className="xl:p-5" style={{ height: "50%" }}>
          <Carusel />
        </div>
      </div>
    </>
  );
}
