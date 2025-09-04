import React from "react";

const BackgroundElements = () => {
  return (<div className='w-full h-full absolute z-[-1] blur-lg animate-pulse-slow' style={{
    transform: 'scale(1.5)',
  }}>
      <div className='absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-950 to-primary/15' />
    <div className='absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-950 to-primary/15' />
    <div className='absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-950 to-primary/15' />
    <div className='absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-950 to-primary/15' />

    {/* <div className='absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-950/5 to-primary/10 skew-y-12' />
    <div className='absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-950/5 to-primary/10 -skew-y-12' />
    <div className='absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-950/5 to-primary/10 -skew-y-12' />
    <div className='absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-950/5 to-primary/10 skew-y-12' /> */}
  </div>);
};

export default BackgroundElements;
