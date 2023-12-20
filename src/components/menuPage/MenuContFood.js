import Carusel from "../utils/Carusel";

export default function MenuContFood() {
  return (
    <>
      <div
        style={{ width: "72vw", height: "80vh" }}
        className="bg-black rounded-xl flex flex-col"
      >
        <div
          id="nivel1"
          className="p-5"
          style={{ height: "50%", position: "relative" }}
        >
          <Carusel />
        </div>
        <div id="nivel2" className="p-5" style={{ height: "50%" }}>
          <Carusel />
        </div>
      </div>
    </>
  );
}
