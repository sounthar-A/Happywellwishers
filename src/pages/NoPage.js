import { Outlet, Link} from "react-router-dom";


const NoPage = () => {
    return(
      <>
      <h2>A 404 error is when a website’s server can’t find the page you’re trying to access via a hyperlink or typing a URL in your browser.so please to home page</h2>
      
    
      <Link to="/">Home</Link>
     
      </>
    );
  }
  
  export default NoPage;