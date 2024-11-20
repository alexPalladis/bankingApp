'use client';

import CountUp from "react-countup";

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div className="w-full">
        <CountUp 
        end={amount}
        decimal="."
        duration={1.50}
        decimals={2}
        />€
    </div>
  )
}

export default AnimatedCounter