import smallStar from "../assets/NoBG/smallstar.png";
import smallStar2 from "../assets/NoBG/smallStar2.png";
import year from "../assets/NoBG/2024.png";
import miniCircle from "../assets/NoBG/miniCircle.png";
import arrow from "../assets/NoBG/arrow.png";

const FIrst = () => {
  return (
    <section className=" bg-zinc-700 w-full h-screen relative">
      <img
        src={miniCircle}
        className="absolute lg:h-[20vh] h-[15vh] lg:w-[20rem] w-[15rem] lg:top-[30rem] top-[27rem] lg:left-[37rem] left-[7rem]"
      ></img>
      <img
        src={year}
        className="absolute lg:h-[5vh] h-[3.8vh] lg:w-9 lg:top-[55vh] top-[49.5vh] lg:left-[36.3vw] left-[23.8vw]"
      ></img>
      <img
        src={smallStar}
        className="absolute lg:top-[41vh] top-[18.5rem] lg:h-[3rem] h-[1.4rem] lg:left-[62.9vw] right-[6.5rem]"
      ></img>
      <img
        src={smallStar2}
        className="absolute lg:top-[39vh] top-[49.5vh] lg:h-[2rem] h-[2rem] lg:left-[64vw] left-[55.6vw]"
      ></img>
      <img
        src={smallStar2}
        className="absolute lg:h-[4rem] h-[1rem] lg:top-[53vh] top-[17.8rem] lg:left-[53vw] right-[6.3rem]"
      ></img>
      <img
        src={arrow}
        className="absolute lg:rotate-[300deg] rotate-[305deg] lg:h-[12rem] h-[8rem] lg:left-[46rem] left-[14rem] lg:top-[10rem] top-[12rem]"
      ></img>

      <p className="absolute font-sf-cartoonist text-purple-200 lg:text-[2.5rem] font-semibold lg:top-[30.5vh] top-[15.5rem] lg:right-[19vw] right-[2rem] tracking-wide">Xavier Rodgriues</p>
      <p className="absolute font-sf-cartoonist text-purple-200 lg:text-[2rem] lg:top-[26.5vw] top-[50vh] lg:right-[30.7vw] right-[4.2rem] font-semibold">cv</p>
      <div id="boxes" className="">
        <div id="one" className=" flex">
          <div className="border-r border-b px-[5rem] lg:px-[13.4rem] py-[2.2rem]"></div>
          <div className="border-r border-b px-[5rem] lg:px-[19.9vw] py-[2.2rem] border-white"></div>
          <div className="border-b lg:px-[16vw] px-[5rem] py-[2.2rem] border-white"></div>
        </div>
        <div id="two" className=" flex">
          <div
            id="div1"
            className="border-r py-[1rem] lg:text-lg px-[3.2rem] text-white border-white lg:px-[12.2rem]"
          >
            2024
          </div>
          <div
            id="div2"
            className="border-r py-[1rem] tracking-widest px-[2rem] text-white lg:px-[13.9rem] lg:text-lg border-white flex"
          >
            <p>Xavier</p>
            <p>&nbsp;Rodgriues</p>
          </div>
          <div
            id="div3"
            className="text-white tracking-widest py-[1rem] px-[2.3rem] border-white lg:px-[15.1rem]"
          >
            WebDev
          </div>
        </div>
      </div>

      <div id="content" className="pt-14">
        <div className="flex flex-col justify-center items-center h-[100%] pt-[14vh]">
          <h1 className="-tracking-tighter text-white font-[NotoSerifDisplay] text-[6rem] lg:text-[10rem]">
            Portfolio
          </h1>
          <h1 className="text-white lg:text-[2rem] lg:mt-[0rem] mt-[3rem] text-[1.5rem]">Web Developer</h1>
        </div>
      </div>
      <div>
        <hr className="text-white relative top-[6rem] lg:top-[6rem]"></hr>
      </div>
    </section>
  );
};

export default FIrst;
