import React, {useState} from 'react';
import {db} from '../firebase';
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
                    brand="ROCK YOUR KID"
                    title="ELSA MAGIC CIRCUS DRESS" 
                    price={63.96} 
                    image="https://www.davidjones.com/productimages/cart/1/2390864_21589467_6806640.jpg" 
                    rating={5}
                />
                <Product
                    id="2"                    
                    brand="ROCK YOUR KID"
                    title="ELSA MAGIC CIRCUS DRESS" 
                    price={63.96} 
                    image="https://www.davidjones.com/productimages/cart/1/2390864_21589467_6806640.jpg" 
                    rating={5}
                />
                <Product
                    id="3"
                    brand="ROCK YOUR KID"
                    title="ELSA MAGIC CIRCUS DRESS" 
                    price={63.96} 
                    image="https://www.davidjones.com/productimages/cart/1/2390864_21589467_6806640.jpg" 
                    rating={5}
                />
            </div>
            <div className='home_row'>
                <Product
                    id="4"
                    brand="ROCK YOUR KID"
                    title="ELSA MAGIC CIRCUS DRESS" 
                    price={63.96} 
                    image="https://www.davidjones.com/productimages/cart/1/2390864_21589467_6806640.jpg" 
                    rating={5}
                />
                <Product
                    id="5"
                    brand="ROCK YOUR KID"
                    title="ELSA MAGIC CIRCUS DRESS" 
                    price={63.96} 
                    image="https://www.davidjones.com/productimages/cart/1/2390864_21589467_6806640.jpg" 
                    rating={5}
                />
                <Product
                    id="6"
                    brand="ROCK YOUR KID"
                    title="ELSA MAGIC CIRCUS DRESS" 
                    price={63.96} 
                    image="https://www.davidjones.com/productimages/cart/1/2390864_21589467_6806640.jpg" 
                    rating={5}
                />
            </div>
            <div className='home_row'>
                <Product
                    id="7"
                    brand="ROCK YOUR KID"
                    title="ELSA MAGIC CIRCUS DRESS" 
                    price={63.96} 
                    image="https://www.davidjones.com/productimages/cart/1/2390864_21589467_6806640.jpg" 
                    rating={5}
                />
                <Product
                    id="8"
                    brand="ROCK YOUR KID"
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