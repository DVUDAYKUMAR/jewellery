import { Carousel } from 'antd';
import "../styles/jew2.css"
import img1 from "../media/one.jpg";

import img2 from "../media/two.jpg";

import img3 from "../media/three.jpg";


const Banner = () => (
    <Carousel autoplay>
      <div className='scrolling'>
        <img  className='imgpiece1' src={img1}  />
        {/* <h1 className='qwery'>All jewellery</h1> */}
          <div className='qwery'>
            <h1>
            ALL JEWELLERY
            </h1>

            <button>SHOP NOW</button>
        </div>
      </div>
      <div className='scrolling1'>
      <img className='imgpiece' src={img2}  />
      </div>
      <div className='scrolling2'>
      <img className='imgpiece' src={img3}  />
      </div>
      
    </Carousel>
  );
  export default Banner;