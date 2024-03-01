import React, {useContext} from 'react'
import Navbar2 from '../components/Navbar2';
import ItemsListPage from './ItemsListPage';
import FlowerListPage from './FlowerListPage';
import { Button } from 'flowbite-react';
import Quote from '../components/Quote';
import Footer from '../components/Footer';
import AuthContext from '../context/AuthContext';
import home_bg from "../assets/home_bg.webp"; // Fix this
import Flowers from '../components/Flowers';

const HomePage = () => {
  let {user} = useContext(AuthContext)
  console.log("USER ", user);
  return (
    <div>
      <Navbar2/>
      <div className='block bg-blue-100 fill-current font-body '>
        <div style={{backgroundImage: `url:(${home_bg})`}}>
          <h1 className='w-full bg-lime-300 text-xl hover:font-medium'>Hello {user && user.username}</h1>
          <h1 className='pt-20 pb-2 h24 w48 text-4xl'>Popular products</h1>
          <h3 className='opacity-40 hover:opacity-100'>— — — — — — — — — — — — — — — — — — — —</h3>
          <FlowerListPage/>
          {/* <div className='flex  justify-center pb-10 overflow-x-auto'>
            <Flowers/>
            <Flowers/>
            <Flowers/>
          </div> */}
        </div>
        <div className='bg-lime-100'>
          <h1 className='pt-8 pb-2 h24 w48 text-4xl'>100%</h1>
          <p className='pt-1 pb-2 h24 w48 text-l'>Genuine</p>
          <h1 className='pt-10 pb-2 h24 w48 text-4xl'>Start buying today..</h1>
          <div className='flex flex-wrap gap-2 justify-center pt-4 pb-4'>
            <Button outline gradientDuoTone="greenToBlue" size="xl" href='/signup'>Sign up to get started</Button>
          </div>
          <Quote/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
