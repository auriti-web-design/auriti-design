import Image from 'next/image'
import img from '@/public/hero/developer.png'

const DevImg = ({ containerStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={img} fill priority alt='' />
    </div>
  )
}

export default DevImg