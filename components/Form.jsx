'use client'

import {Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react'

const Form = () => {
  return (
    <form className='gap-y-4 flex flex-col'>
        {/* input */}
        <div className='relative flex items-center'>
            <Input type="text" placeholder="Your name" />
            <User className='right-6 absolute' />
        </div>
        {/* input */}
        <div className='relative flex items-center'>
            <Input type="email" placeholder="Your email" />
            <MailIcon className='right-6 absolute' />
        </div>
        {/* textarea */}
        <div className='relative flex items-center'>
            <Textarea placeholder="Type Your Message Here." />
            <MessageSquare className='right-6 top-4 absolute' />
        </div>
        <Button className="flex items-center max-w-[166px] gap-x-1">
            Let&apos;s Talk
            <ArrowRightIcon size={20} />
        </Button>
    </form>
  )
}

export default Form