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
          <Button onClick={logoutUser}>Logout</Button>  
        ): (
          <Button href='/login'>Get started</Button>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/shop">Shop</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Component