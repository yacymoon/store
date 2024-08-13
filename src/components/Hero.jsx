import React from 'react'
import Clips from './utils/Clips'
import SocialLinks from './utils/SocialLinks'

const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
  return (
    <>
        <div className='relative h-auto w-auto flex flex-col'>
            <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
            <div className='mb-24 relative opacity-100 z-20 grid items-center justify-items-center nike-container'>
                <div className='grid items-center justify-items-center mt-28 md:mt-24'>
                    <h1 className='text-white text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-center'>{title}</h1>
                    <h1 className='text-white text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm'>{subtitle}</h1>
                    <button type='button' className='button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5'>{btntext}</button>
                    <div className='grid items-center gap-5 md:gap-3 absolute top-[38vh] lg:top-[32vh] xs:top-[43vh] left-[11%] xl:left-0 w-auto h-auto'>
                        {videos?.map((val, i) =>(
                            <Clips key={i} imgsrc={val.imgsrc} clip={val.clip}/>
                        ))}
                    </div>
                    <div className='grid items-center absolute top-[48vh] lg:top-[36vh] xs:top-[46vh] xs:filter xs:brightness-0 right-0 gap-3'>
                        {sociallinks?.map((val, i) => (
                            <SocialLinks key={i} icon={val.icon} />
                        ))}
                    </div>
                </div>
                <div className=''>
                    <img 
                        src={img} 
                        alt='hero-img/img' 
                        className='w-auto h-[40vh] lg:h-[26vh] md:h-[31vh] sm:h-[19vh] xsm:h-[19vh] mt-12 transition-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero