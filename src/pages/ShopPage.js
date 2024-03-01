import React from 'react'
import Navbar2 from '../components/Navbar2'
import ProductsList from '../components/ProductsList'
import Footer from '../components/Footer'
import shared_cpu from "../assets/shared_cpu.svg"
import FlowerList from '../components/FlowerList'


const ShopPage = () => {
  return (
    <div>
      <Navbar2/>
      <div className='bg-lime-100 text-2xl font-medium font-["montserrat"] font-medium '>
        <h2 className='pt-20 pb-1 tracking-wider'>Deep dive into the Ocean of Flowers</h2>
        <ul>
          <li className='text-sm pb-2'>✔ On time delivery</li>
        </ul>
      </div>
      <div className='pb-10 flex justify-center'>
        <img style={{width: 200}} src={shared_cpu} alt='shared_cpu'/>
      </div>
      <div className='font-["montserrat"] justify-center'>
        <h1 className='pb-6 text-4xl font-semibold '>Fresh Flowers</h1>
        <p className='text-xl font-normal'>Fresh flowers: nature's vibrant gift, infusing spaces with positivity, color, </p>
        <p className='text-xl font-normal pb-6'>and a gentle reminder of life's beauty.</p>
      </div>
      <div className='bg-yellow-300'>
        <FlowerList/>
      </div>
      <div className='bg-sky-200 font-["montserrat"] justify-center'>
        <h1 className='pt-10 pb-4 text-2xl font-medium'>Ready to get started or have questions?</h1>
        <p className='text-xl font-normal'>Set up your free account today or contact us to learn more.</p>
      </div>
      <div className='bg-sky-200 flex flex-wrap justify-center gap-5 font-["montserrat"] pt-5 pb-5'>
        <button class="inline-flex items-center rounded-3xl bg-indigo-600 px-3 py-2 text-xl font-normal text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><a className='pt-2 pb-2 pl-4 pr-4' href='/signup'>Create Account</a></button>
        <button class="inline-flex items-center rounded-3xl bg-indigo-600 px-3 py-2 text-xl font-normal text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><a className='pt-2 pb-2 pl-4 pr-4' href='/contact'>Contact Us</a></button>
      </div>
      <Footer/>
    </div>
  )
}

export default ShopPage
