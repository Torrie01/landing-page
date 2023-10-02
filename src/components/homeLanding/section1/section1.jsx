import React from 'react';
import Gray from '/images/gridGray.png'
import Color from '/images/gridColor.png'
import ImgA from '/images/img1.png'
import ImgB from '/images/img2.png'
import ImgC from '/images/img3.png'

export default function section1() {
  return (
    <div class="flex items-center mt-16 justify-center ">
        <div class="mr-10">
        <p class="text-4xl font-bold font-sora">
        Show Them <br />
        Don't Just Tell
      </p>
      <p class="font-inter-400 text-xl mt-4 mb-10">
        Help your friends and loved ones by creating and sending <br />
        videos on how to get things done on a website.
      </p>
      <div class="flex w-60 border-2 bg-primary-100 text-white h-16 rounded-lg items-center justify-center">
        <p class="text-lg font-def">Install HelpMeOut</p>
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-5 h-5 ml-3'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
            />
          </svg>
        </span>
      </div>
        </div>
        <div class="flex">
           <div class="relative">
            <img class="w-80 h-52" src={ImgA} alt="woman with headset"/>
            <img class="w-80 h-52 mt-8" src={ImgB} alt="a Man with son"/>
            <img class="absolute w-76 top-235 right-10 -z-10" src={Color} alt="grid colors"/>
            </div> 
           <div class="relative">
           <img class="ml-8" src={ImgC} alt="woman with headset"/>
           <img class="absolute w-76 -top-14 -z-10 -right-12" src={Gray} alt="gray grid" />
           </div>
        </div>
     
    </div>
  );
}
