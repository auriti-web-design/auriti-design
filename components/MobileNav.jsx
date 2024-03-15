import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

import { AlignJustify } from "lucide-react"

import Nav from "./Nav"
import Logo from "./Logo"
import Social from "./Social"

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="gap-y-32 flex flex-col items-center">
            <Logo />
            <Nav containerStyles='flex flex-col items-center gap-y-6' linkStyles='text-xl' />
          </div>
          <Social containerStyles='flex gap-x-4' iconsStyles='text-xl'/>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav