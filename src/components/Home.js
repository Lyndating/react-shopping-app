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
                    id="1"
                    title="ELSA MAGIC CIRCUS DRESS" 
                    price={63.96} 
                    image="https://www.davidjones.com/productimages/cart/1/2390864_21589467_6806640.jpg" 
                    rating={5}
                />
                <Product
                    id="2"
                    title="ELSA MAGIC CIRCUS DRESS" 
                    price={63.96} 
                    image="https://www.davidjones.com/productimages/cart/1/2390864_21589467_6806640.jpg" 
                    rating={5}
                />
                <Product
                    id="3"
                    title="ELSA MAGIC CIRCUS DRESS" 
                    price={63.96} 
                    image="https://www.davidjones.com/productimages/cart/1/2390864_21589467_6806640.jpg" 
                    rating={5}
                />
            </div>
            <div className='home_row'>
                <Product
                    id="4"
                    title="ELSA MAGIC CIRCUS DRESS" 
                    price={63.96} 
                    image="https://www.davidjones.com/productimages/cart/1/2390864_21589467_6806640.jpg" 
                    rating={5}
                />
                <Product
                    id="5"
                    title="ELSA MAGIC CIRCUS DRESS" 
                    price={63.96} 
                    image="https://www.davidjones.com/productimages/cart/1/2390864_21589467_6806640.jpg" 
                    rating={5}
                />
                <Product
                    id="6"
                    title="ELSA MAGIC CIRCUS DRESS" 
                    price={63.96} 
                    image="https://www.davidjones.com/productimages/cart/1/2390864_21589467_6806640.jpg" 
                    rating={5}
                />
            </div>
            <div className='home_row'>
                <Product
                    id="7"
                    title="ELSA MAGIC CIRCUS DRESS" 
                    price={63.96} 
                    image="https://www.davidjones.com/productimages/cart/1/2390864_21589467_6806640.jpg" 
                    rating={5}
                />
                <Product
                    id="8"
                    title="ELSA MAGIC CIRCUS DRESS" 
                    price={63.96} 
                    image="https://www.davidjones.com/productimages/cart/1/2390864_21589467_6806640.jpg" 
                    rating={5}
                />
            </div>
        </div>
    </div>
  )
}

export default Home