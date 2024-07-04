import xavier from '../assets/NoBG/xavier.png'
import cs from '../assets/NoBG/combinestar.png'
import ss from '../assets/NoBG/smallstar.png'
import line from '../assets/NoBG/line.png'
const Second = () => {
  return (
    <section className='w-full relative bg-purple-50 h-screen flex items-center justify-center p-5'>
    <p className='absolute text-purple-300 font-[cursive] font-bold lg:top-[9rem] top-[3rem] lg:left-[31rem] left-[19rem] lg:text-[1.4rem]'>detail-oriented</p>
    <img src={cs} className='absolute lg:top-[4rem] top-[0.2rem] lg:left-[28.5rem] left-[17.3rem] lg:h-[7.5rem] h-[5rem]'></img>
    <p className='absolute text-purple-300 font-[cursive] font-bold lg:top-[8rem] top-[2rem] lg:left-[14rem] left-[8rem] lg:text-[1.3rem]'>creative</p>
    <img src={ss} className='absolute lg:top-[10rem] top-[3.5rem] lg:left-[15rem] left-[9.5rem] lg:h-[4rem] h-[3rem]'></img>
    <p className='absolute text-purple-300 font-[cursive] lg:top-[18rem] top-[8.5rem] lg:left-[11rem] left-[6.2rem] lg:text-[1.4rem] font-bold'>sociable</p>
    <p className='absolute text-purple-300 font-[cursive] lg:top-[25rem] top-[12.8rem] lg:left-[33rem] left-[20rem] lg:text-[1.4rem] font-bold'>emphatic</p>
    <p className='absolute text-purple-300 font-[cursive] lg:top-[35rem] top-[19rem] lg:left-[30rem] left-[18rem] lg:text-[1.4rem] font-bold'>fast learner</p>

    <img src={ss} className='absolute lg:top-[35.2rem] top-[19.4rem] lg:left-[28rem] left-[16.8rem] lg:h-[4rem] h-[2.5rem]'></img>

    <p className='absolute text-purple-300 font-[cursive] lg:top-[42rem] top-[22.5rem] lg:left-[10rem] left-[5.7rem] lg:text-[1.4rem] font-bold'>motivated</p>
    <img src={ss} className='absolute lg:top-[38rem] top-[20.4rem] lg:left-[13rem] left-[8.4rem] lg:w-[3rem] lg:h-[4rem] h-[2rem]'></img>
    <img src={ss} className='absolute lg:top-[40rem] lg:left-[16rem] left-[10rem] lg:w-[2rem] lg:h-[3rem] h-[1.8rem]'></img>
      <div className='lg:flex lg:justify-around lg:items-center w-full h-full max-w-none'>
        <div className='flex-1 flex justify-center mt-[-3rem]'>
          <img src={xavier} alt='Xavier' className="lg:w-[150rem] lg:h-[45rem]" /> {/* Updated size */}
        </div>
        <div className='flex-1 h-screen mt-[-5rem] lg:mt-[15.6rem]'>
          <h1 className='lg:text-[5rem] text-[8vw] mb-4 text-right lg:px-[9rem] text-lg font-semibold leading-[4rem] font-[NotoSerifDisplay]'>Hello,</h1>
          <p className='lg:text-xl tracking-widest leading-relaxed lg:text-justify text-justify lg:px-[9rem]'>
            As a junior Web Developement based in India, I get to combine my love for technology with my passion for art and design.I enjoy using my creativity and problem-solving skills to create digital experiences that not only look great but also work seamlessly for the user. When I'm not designing, you can usually find me exploring the city's many museums and galleries for inspiration. 
            I believe that continuous learning is the key to success, and I'm always on the lookout for fresh challenges to keep me motivated and engaged.
          </p>
        </div>
      </div>
      <img src={line} className='absolute w-[34rem] h-[1.2rem] top-[33.2rem] left-[55rem]'></img>
      <img src={line} className='absolute w-[8.4rem] h-[1rem] top-[31rem] left-[77rem]'></img>
      <img src={line} className='absolute w-[34.8rem] h-[1.2rem] top-[20.8rem] left-[54rem]'></img>
      <img src={line} className='absolute w-[29rem] h-[1.2rem] top-[19rem] left-[59rem]'></img>

      <img src={line} className='absolute w-[10rem] h-[1rem] top-[23rem] left-[55.8rem]'></img>
    </section>
  )
}

export default Second
