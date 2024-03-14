'use client'
import CountUp from "react-countup"

const Badge = ({ containerStyles, icon, endCountNum, endCountText, badgeText }) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-primary text-3xl">
        {icon}
      </div>
      <div className="gap-x-2 flex items-center">
        <div className="text-primary text-4xl font-bold leading-none">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div
          className="max-w-[70px] leading-none text-[15px] font-medium text-black"> {badgeText}
        </div>
      </div>
    </div>
  )
}

export default Badge