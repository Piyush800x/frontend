import { Button, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

function Component() {
  let {user, logoutUser} = useContext(AuthContext)

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">DeepOcean</span>
      </Navbar.Brand>
      <div className="flex  md:order-2 ">
        {user ? (
          <Button onClick={logoutUser} href='/login'>Logout</Button>  
        ): (
          <Button href='/signup'>Get started</Button>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/shop">Shop</Navbar.Link>
        
        <Navbar.Link href="/about">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Component