import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react'
import Form from '../../components/Form'

const Contact = () => {
  return (
    <div className='container mx-auto'>
      {/* text & illustration */}
      <div className='xl:grid-cols-2 grid pt-12 xl:h-[480px] mb-6 xl:mb-24'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          <div className='gap-x-4 text-primary flex items-center mb-4 text-lg'>
            <span className='w-[30px] h-[2px] bg-primary'></span>
            Say Hello 👋🏽
          </div>
          <h1 className='h1 max-w-md mb-8'>Let's Work Together</h1>
          <p className='subtitle max-w-[400px]'>
            Lorem ipsum dolor, sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>
        </div>
        {/* illustration */}
        <div className='xl:flex bg-contact_illustration_light dark:bg-contact_illustration_dark hidden w-full bg-top bg-no-repeat bg-contain'></div>
      </div>
      {/* info text & form */}
      <div className='xl:grid-cols-2 xl-mb-32 grid mb-24'>
        {/* info text */}
        <div className='gap-y-4 xl:gap-y-14 xl:mb-24 xl:text-lg flex flex-col text-base'>
          {/* mail */}
          <div className='gap-x-8 flex items-center'>
            <MailIcon size={18} className='text-primary' />
            <div>info@auritidesign.com</div>
          </div>
          {/* address */}
          <div className='gap-x-8 flex items-center'>
            <HomeIcon size={18} className='text-primary' />
            <div>65010 Spoltore (PE), Via Arapietra 2</div>
          </div>
          {/* mail */}
          <div className='gap-x-8 flex items-center'>
            <PhoneCall size={18} className='text-primary' />
            <div>+39 321 012 3456</div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  )
}

export default Contact