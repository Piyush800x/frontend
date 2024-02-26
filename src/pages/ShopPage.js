import React from 'react'
import Navbar2 from '../components/Navbar2'
import ProductsList from '../components/ProductsList'
const ShopPage = () => {
  return (
    <div>
      <Navbar2/>
      <div className='bg-lime-100 text-2xl font-medium font-["montserrat"] font-medium '>
        <h2 className='pt-20 pb-1 tracking-wider'>Deep dive into the Ocean of CPUs</h2>
        <ul>
          <li className='text-sm pb-2'>✔ 24/7 Customer support</li>
        </ul>
      </div>
      <div className='bg-blue-100'>
        <ProductsList/>
      </div>
    </div>
  )
}

export default ShopPage
