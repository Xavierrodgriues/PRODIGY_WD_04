import js from '../assets/NoBG/js.png';
import ai from '../assets/NoBG/ai.png';
import miniCircle from '../assets/NoBG/miniCircle.png';
import flower from '../assets/NoBG/music.png';
import combineStar from '../assets/NoBG/combinestar.png';
import ss from '../assets/NoBG/smallstar.png';
import ex from '../assets/NoBG/ex.png'
import gsap from '../assets/NoBG/gsap.png'
const Fourth = () => {
  return (
    <section className='w-full h-screen flex flex-col lg:flex-row relative'>
      <img src={miniCircle} className='absolute lg:top-[9.5rem] top-[3rem] lg:h-[12.4rem] h-[12.5rem] lg:left-[12rem] lg:w-[35rem] w-[30rem]'></img>
      <p className='absolute font-[cursive] text-[1.3rem] left-[38rem] top-[3.7rem] text-center text-purple-400'>
        I'm always<br /> developing my<br /> skills
      </p>
      <p className='absolute font-[cursive] text-[2rem] left-[56rem] top-[9rem] text-center text-purple-400'>
        I love <br />to listening <br /> music
      </p>
      <p className='absolute font-[cursive] text-[1.3rem] left-[75rem] bottom-[5rem] text-center text-purple-400'>
        I have so many more <br /> in my wishlist...
      </p>
      <img src={flower} className='absolute left-[60rem] top-[11rem]'></img>
      <img src={combineStar} className='absolute left-[57rem] top-[28rem] w-[6rem]'></img>
      <img src={combineStar} className='absolute left-[77rem] top-[5rem] w-[6rem]'></img>
      <img src={ss} className='absolute left-[74rem] top-[28rem] w-[3rem]'></img>
      <img src={ss} className='absolute left-[66rem] top-[3rem] w-[3rem]'></img>
      <div className='w-full lg:w-[50vw] bg-purple-50 h-screen'>
        <h1 className='text-[2rem] sm:text-[4rem] lg:text-[6rem] font-[NotoSerifDisplay] pl-[2rem] sm:pl-[4rem] lg:pl-[12rem]'>
          Skills
        </h1>
        <div className='pl-[2rem] sm:pl-[4rem] pt-[3rem] lg:pl-[14rem]'>
          <div className='flex flex-wrap justify-center gap-[4rem]'>
            <img src={gsap} className='w-[3rem] h-[3rem]'></img>
            <img src={ai} className='w-[3.5rem] h-[3rem]'></img>
            <p className='font-sf-cartoonist text-[1.5rem] sm:text-[2rem] pt-[0.1rem]'>HTML</p>
          </div>
          <div className='flex flex-wrap justify-center gap-[4rem] pr-[0.4rem] pt-[1.5rem]'>
            <img src={js} className='w-[3rem] h-[3rem]'></img>
            <img src={ex} className='w-[4rem] h-[3.5rem]'></img>
            <p className='pt-[0.4rem] font-[cursive] text-[1.5rem] sm:text-[2rem] text-purple-400'>CSS</p>
          </div>
        </div>
        <div className='pl-[2rem] sm:pl-[4rem] lg:pl-[12rem] pt-[4rem]'>
          <ul className='font-semibold list-disc leading-[1.5rem] sm:leading-[2rem] text-sm sm:text-lg'>
            <li>Understanding and implementation of <br />
              visual and interaction design principles
            </li>
            <li>Understanding of accessibility and <br />
              inclusivity best practices for Digital Design
            </li>
          </ul>
        </div>
        <div className='pl-[2rem] sm:pl-[4rem] lg:pl-[12rem] pt-[1.8rem] flex flex-wrap lg:flex-nowrap'>
          <ul className='font-semibold list-disc leading-[1.5rem] sm:leading-[2rem] text-sm sm:text-lg'>
            <li>UX Research</li>
            <li>Team Collaboration</li>
            <li>Leadership</li>
            <li>Continuous Learning</li>
            <li>Creativity</li>
            <li>Self-Motivation</li>
          </ul>
          <ul className='font-semibold pl-[2rem] sm:pl-[3rem] list-disc leading-[1.5rem] sm:leading-[2rem] text-sm sm:text-lg'>
            <li>Responsive Web Design</li>
            <li>RESTful APIs</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Version Control (Git & GitHub)</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
      <div className='right w-full lg:w-[50vw] bg-purple-50 h-screen'></div>
    </section>
  );
}

export default Fourth;
