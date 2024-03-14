'use client'

import {
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill
} from 'react-icons/ri'

import Link from 'next/link'

// icons
const icons = [
  {
    path: '/',
    name: <RiLinkedinFill />
  },
  {
    path: '/',
    name: <RiGithubFill />
  },
  {
    path: '/',
    name: <RiInstagramFill />
  }
]

const Social = ({ containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link
            href={icon.path}
            key={index}
            className={`${iconsStyles}`}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  )
}

export default Social