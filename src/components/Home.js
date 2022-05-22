import React from 'react';
import "./Home.css";
import Product from './Product';
import Slider from './Slider';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <Slider className='home_image'/>

            <div className='home_row'>
                <Product 
                    title="The lean startup" 
                    price={29.99} 
                    image="https:images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                    rating={5}
                />
                <Product
                    title="The lean startup" 
                    price={29.99} 
                    image="https:images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                    rating={5}
                />
                <Product/>
            </div>
            <div className='home_row'>
                <Product/>
                <Product/>
                <Product/>
            </div>
            <div className='home_row'>
                <Product/>
            </div>
        </div>
    </div>
  )
}

export default Home