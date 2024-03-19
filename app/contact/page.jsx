import {MailIcon, HomeIcon, PhoneCall} from 'lucide-react'

const Contact = () => {
  return (
    <div className='container mx-auto'>
      {/* text & illustration */}
      <div>
        {/* text */}
        <div className='flex flex-col justify-center'>
          <div className='gap-x-4 text-primary flex items-center mb-4 text-lg'>
            <span className='w-[30px] h-[2px] bg-primary'></span>
            <div>Say Hello 👋🏽</div>
          </div>
        </div>
      </div>
      {/* info text & form */}
      <div>info text & form</div>
    </div>
  )
}

export default Contact