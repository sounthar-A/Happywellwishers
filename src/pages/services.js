import React from 'react';
import '../App.css';
import logo2 from '../Bootstrap5.webp'
import logo3 from '../jquery.png'
import logo4 from '../fullstack.png'
import logo5 from '../php.webp'
import logo6 from '../react.webp'
import logo7 from '../node.png'



const Services = () => {
    return (
        <>
       <div className='content1'>

<div className='image1'>
 <div className='part1'>
   <img className='part1' src={logo2}/>
 </div>
 <br></br>
 <h3>service 1</h3><hr/>
1hr<br/><br/>
$19.90<br/><br/>
<button type="button" class="btn bg-white">Book Now
</button>   </div>

<div className='image1'>
<div className='part1'>
<img className='part1' src={logo3}/>
</div>
<br></br>
 <h3>service 2</h3><hr></hr>
1hr<br/><br/>
$19.90<br/><br/>
<button type="button" class="btn bg-white">Book Now
</button>
</div>

<div className='image1'>
<div className='part1'>
<img className='part1' src={logo4}/>
</div>
<br></br>
 <h3>service 3</h3><hr></hr>
1hr<br/><br/>
$19.90<br/><br/>
<button type="button" class="btn bg-white">Book Now
</button>
</div>
</div>

<div className='content1'>

<div className='image1'>
 <div className='part1'>
 <img className='part1' src={logo5}/>

 </div>
 <br></br>
 <h3>service 4</h3><hr/>
1hr<br/><br/>
$19.90<br/><br/>
<button type="button" class="btn bg-white">Book Now
</button>   </div>

<div className='image1'>
<div className='part1'>
<img className='part1' src={logo6}/>

</div>
<br></br>
 <h3>service 5</h3><hr></hr>
1hr<br/><br/>
$19.90<br/><br/>
<button type="button" class="btn bg-white">Book Now
</button>
</div>

<div className='image1'>
<div className='part1'>
<img className='part1' src={logo7}/>

</div>
<br></br>
 <h3>service 6</h3><hr></hr>
1hr<br/><br/>
$19.90<br/><br/>
<button type="button" class="btn bg-white">Book Now
</button>
</div>
</div>  
    </>
    )
  };
  
  export default Services;