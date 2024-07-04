import smile from "../assets/NoBG/smile.png";
import arrow from "../assets/NoBG/arrow.png";

const Third = () => {
  return (
    <section className="w-full relative h-screen bg-purple-50 flex items-center p-5">
      <div className="flex flex-col lg:flex-row items-center text-[0.9rem] w-full h-full max-w-none">
        <div className="flex-1 p-4 lg:pl-[12rem] lg:pr-20 flex flex-col">
          <h1 className="font-[NotoSerifDisplay] text-[2rem] sm:text-[3rem] lg:text-[6rem] mb-4 lg:mb-8">
            Education
          </h1>
          <p className="text-sm sm:text-base lg:text-lg tracking-wide mb-4 lg:mb-8">
            I am a university student in the first year of my
            <br />
            Masters.
            <br />
            Don't worry, Some Universities have a different
            <br />
            modus operandi, so I don't have to attend
            <br />
            classes regularly and I can work full-time,
            <br />
            between my last exams.
          </p>
          <ul className="list-disc leading-[1.5rem] sm:leading-[1.75rem] lg:leading-[2rem] text-sm sm:text-base lg:text-lg">
            <li>Web Developement Itern, Prodigy, India</li>
            <li>Project Trainne , TechMicra IT Solution</li>
            <li>
              Participant in  -{" "}
              <b>
                IBMskillsBuild,
                <br className="hidden sm:block" />
                Internship Program
              </b>
              , Remote
              <br className="hidden sm:block" />
              Internship, India
            </li>
            <li>
              <b>St.Xaviers College Ahmedabad,</b>
              <br className="hidden sm:block" />
              UG Course BCA, India
            </li>
          </ul>
        </div>
        <div className="text-left flex-1 p-4 lg:p-0 mt-8 lg:mt-0">
          <div className="lg:hidden flex justify-between items-center">
            <div>
              <h1 className="font-[NotoSerifDisplay] text-[2rem] sm:text-[3rem] lg:text-[4rem] mt-4 lg:mt-8 mb-4 lg:mb-8">
                Languages
              </h1>
              <div className="flex">
                <p className="text-sm sm:text-base lg:text-lg tracking-widest font-semibold">
                  Native:
                </p>
                <p className="pl-[2rem] sm:pl-[4rem] lg:pl-[8rem] text-sm sm:text-base lg:text-lg font-[cursive] text-purple-300 font-semibold">
                  Indian
                </p>
              </div>
              <div className="flex mt-4">
                <p className="text-sm sm:text-base lg:text-lg tracking-widest font-semibold">
                  Others:
                </p>
                <p className="pl-[2rem] sm:pl-[4rem] lg:pl-[8rem] text-sm sm:text-base lg:text-lg font-[cursive] text-purple-300 font-semibold">
                  Hindi B1 <br /> English C1
                </p>
              </div>
            </div>
            <img
              src={smile}
              className="w-[10rem] sm:w-[12rem] lg:w-[15rem]"
            ></img>
          </div>
          <div className="hidden lg:block">
            <img
              src={smile}
              className="w-[15rem] mb-4"
            ></img>
            <h1 className="font-[NotoSerifDisplay] lg:text-[4rem] mb-8">
              Languages
            </h1>
            <div className="flex">
              <p className="lg:text-lg tracking-widest font-semibold">Native:</p>
              <p className="pl-[8rem] lg:text-lg font-[cursive] text-purple-300 font-semibold">
                Indian
              </p>
            </div>
            <div className="flex mt-7">
              <p className="lg:text-lg tracking-widest font-semibold">Others:</p>
              <p className="pl-[8rem] lg:text-lg font-[cursive] text-purple-300 font-semibold">
                Hindi B1 <br /> English C1
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute text-[1rem] sm:text-[1.5rem] lg:text-[2.5rem] left-[24.8rem] sm:left-[10rem] lg:left-[75rem] bottom-[10rem] lg:top-[20rem] font-[cursive] text-purple-300">
        my <br />
        curriculum
        <br />
        vitae
      </p>
      <p className="absolute text-[0.8rem] sm:text-[1rem] lg:text-[1rem] top-[28rem] sm:top-[4rem] lg:top-[9rem] rotate-[320deg] left-[14rem] sm:left-[4rem] lg:left-[54rem] font-[cursive] text-purple-300">
        (Behaves)
      </p>
      <img
        src={arrow}
        className="absolute w-[8rem] sm:w-[10rem] lg:w-[18rem] bottom-[15rem] sm:top-[8rem] lg:top-[4rem] left-[20rem] sm:left-[10rem] lg:left-[68rem] rotate-[360deg] lg:rotate-[380deg]"
      ></img>
    </section>
  );
};

export default Third;
