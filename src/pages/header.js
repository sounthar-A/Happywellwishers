import { Outlet, Link} from "react-router-dom";
import logo11 from '../menulogo.png'
import logo8 from '../facebook.png'
 import logo9 from '../instagram.png'
 import logo10 from '../youtube.webp'


const Header = () => {
  return (
    <>
     <center>
   <div className='firstimage'>
    <img className='menuimage'src={logo11}/>
  <div className='menu'>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
    </ul>
  </div>
 
  </div>

  <Outlet/>
  <div className='content2'>
  <div className='part2'>
  <br></br>
    <h3>Contact</h3>
    HAPPY WELL WISHERS<br></br>
    500 Terry Francois Street<br></br>
    San Francisco, CA 94158
  </div>
  <div className='part2'> 
  <br></br>
  Tel 123-456-7890<br></br>
  Email info@mysite.com  
   <p>Book a Consulation</p>
   <img className='logoimages' src={logo8}/>
   <img className='logoimages1' src={logo9}/>
   <img className='logoimages2' src={logo10}/>


  </div>

  <div className='part2'>
  Subscribe to my Newsletter 
  <input className='w-78 p-2 ' type='email' placeholder='enter your email'/>
  <button className='joinbutton m-1 p-1 bg-dark rounded-0 text-white' type="button" >join</button>
    </div> 
  </div>
  </center>
  
  </>
  )
};

export default Header;