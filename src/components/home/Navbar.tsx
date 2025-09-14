import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export const Navbar = () => {
  return (
    <div >
      <div className="container mx-auto 
      flex items-center justify-between py-4 px-8 ">
        <div>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            <h1>MA</h1>
          </Link>
        </div>

        <ul className="flex items-center gap-6">
          <li>Home</li>
          <li>Projects</li>
          <li>About Me</li>
          <li>Contact</li>
        </ul>
        <div>
          <Link href="/contact" className="">
            <Button>
              <span>Lets Talk</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
