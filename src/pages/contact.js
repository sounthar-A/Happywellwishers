import { useState,useEffect } from "react";
import logo from '../100.jpg';
import logo1 from '../200.jpg';




function Contact() {
const [color,setcolor] = useState(<img className="usestateimage" src={logo} />);

const [timer,setCount] = useState(0);

  
    useEffect(() => {
      setTimeout(() => {
        setCount(timer + 1);
        console.log(timer);
      }, 1000);
    });



  return (
    <>
    <h1>your time starts now {timer} </h1>
    <h1>{color}</h1>
    <button onClick={() => setcolor( <img className="usestateimage"  src={logo1}/>)}>change image</button><br/>
    <button className="happy" onClick={() => setcolor("May your days be filled with joy, surrounded by happy well-wishers who celebrate your every success and share in your laughter.")}>view more about this image</button>

    </>
  )
    
  
}


export default Contact;



