import { Button } from './ui/button'
import Link from 'next/link'

const Cta = () => {
  return (
    <section className="bg-secondary dark:bg-secondary/40 py-24">
        <div className='container mx-auto'>
            <div className='flex flex-col items-center'>
                <h2 className='h2 max-w-xl mb-8 text-center'>
                    Prepared to turn your ideas into reality? I'm here to help you.
                </h2>
                <Link href='/contact'>
                    <Button>Contact Me</Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Cta