import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/ad-logo-mark.svg' width={54} height={54} alt='Auriti Design Logo' className="fill-primary"/>
    </Link>
  )
}

export default Logo