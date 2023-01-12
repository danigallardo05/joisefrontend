
import { Link } from 'react-router-dom';
import josieLogo from '../images/josie-logo.png';

const NavBar = () => {
    return (
        <div className='navbar'>
          <img src={josieLogo} alt='josielogo' className='logo'/>
            <div className='navbar1'>
            <Link to='/home'> <p>Home</p> </Link>
            <Link to='/membership'> <p>Become a member</p> </Link>
            <Link to='/workshop'> <p>Learn more about workshops</p> </Link>
            <Link to='/login'> <p>My account</p> </Link>
            </div>
        </div>
    );
}

export default NavBar;
