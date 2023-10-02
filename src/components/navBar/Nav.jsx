import React from 'react';
import Logo2 from '/images/HelpMeOut.png';

export default function Nav() {
  return (
    <div class='flex justify-between pt-6 pb-6 pl-16 pr-16 items-center font-def border-b'>
      <div>
        <img src={Logo2} alt='' srcset='' />
      </div>
      <div class='flex font-bold text-base'>
        <p class="mr-5">Features</p>
        <p>How it works</p>
      </div>
      <div>
        <p class="text-primary font-bold">Get Started</p>
      </div>
    </div>
  );
}
