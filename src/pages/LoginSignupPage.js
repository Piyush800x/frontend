import React from 'react'
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'

const LoginSignupPage = () => {
  return (

    <div className="bg-blue-100">
        <Navbar2/>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="pt-10 pb-15 mx-auto max-w-md text-center ">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className=" mt-10 flex items-center justify-center gap-x-6 ">
              <a
                href="/userlogin"
                className="pb-10  rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-yellow-200"
              >
                Login
              </a>
              <a href="/usersignup" className="pb-8 text-sm font-semibold leading-6 text-white hover:text-yellow-200">
                Sign up <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default LoginSignupPage
