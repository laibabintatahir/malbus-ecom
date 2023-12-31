import '../asets/header.css';
import { Link } from 'react-router-dom';
function Header() {
  // const nav=useNavigate();
  // const handleadmin=()=>{
  //     nav('/Components/admin');
  // }
  return (
    <div className='nav-bar'>
      <div className='free-ship'>
        <h6>Free shipping for orders above than Rs.5000</h6>
      </div>
      <div className='d1'>
        <img src='..\images\Logo.jpg' alt='logo' className='logo' />
        <div className='nav-div'>
          <nav>
            <ul>
              <Link to='/Components/home'>
                <li>HOME</li>
              </Link>
              <Link to='/abaya'>
                <li>ABAYAS</li>
              </Link>
              <Link to='/Components/hijab'>
                <li>HIJABS</li>
              </Link>
              <Link to='/Components/hijabbundles'>
                <li>ACCESSIORIES</li>
              </Link>
              <Link to='/Components/about'>
                <li>ABOUT US</li>
              </Link>
              <Link to='/Components/contact'>
                <li>CONTACT US</li>
              </Link>
              <Link to='/Components/admin'>
                <li>Admin</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className='logo-div'>
          {/* <img src='../images/wishlist.png' alt='button' className='bimg' onClick={handleadmin}/> */}
          <Link to='/Components/cartdetail'>
            <img src='../images/cartlogo.png' alt='button' className='bimg' />
          </Link>
          <Link to='/Components/loginform'>
            <img
              src='../images/loginbutton.png'
              alt='button'
              className='bimg'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
