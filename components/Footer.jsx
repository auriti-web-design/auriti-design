import Social from './Social'

const Footer = () => {
  return (
    <footer className='bg-secondary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          {/* Social */}
          <Social
            containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
            iconsStyles='text-primary text-[20px] dark:hover:text-white trasition-all duration-300 hover:text-neutral-900'
          />
          {/* copyright */}
          <div className='text-muted-foreground'>
            Copyright &copy; {new Date().getFullYear()} Juan Camilo Auriti
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer