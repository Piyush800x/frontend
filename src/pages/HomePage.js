import React from 'react'
import Navbar2 from '../components/Navbar2';
import ItemsListPage from './ItemsListPage';
import { Button } from 'flowbite-react';
import Quote from '../components/Quote';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar2/>
      <div className='block bg-blue-100 fill-current font-body '>
        <h1 className='w-full bg-emerald-500 text-xl hover:font-medium'>Deep dive into Ocean</h1>
        <h1 className='pt-20 pb-2 h24 w48 text-4xl'>Popular products</h1>
        <h3 className='opacity-40 hover:opacity-100'>— — — — — — — — — — — — — — — — — — — —</h3>
        <ItemsListPage/>
        <h1 className='pt-8 pb-2 h24 w48 text-4xl'>99.99%</h1>
        <p className='pt-1 pb-2 h24 w48 text-l'>Uptime SLA for instances</p>
        <h1 className='pt-10 pb-2 h24 w48 text-4xl'>Start building today..</h1>
        <div className='flex flex-wrap gap-2 justify-center pt-4 pb-4'>
          <Button outline gradientDuoTone="greenToBlue" size="xl" href='/login'>Sign up to get started</Button>
        </div>
        <Quote/>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
