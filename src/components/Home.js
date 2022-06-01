import React, {useState, useEffect} from 'react';
import {db} from '../firebase-config';
import "./Home.css";
import Product from './Product';
import Slider from './Slider';
import {collection, getDocs} from 'firebase/firestore';
import CategoryList from './CategoryList';

function Home() {
    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);

    // fetch all the product from db once the page load

    useEffect(()=>{
        const productCollectionRef = collection(db, "Products");
        const categoryCollectionRef = collection(db, 'categories');
        const getCategories = async ()=>{
        const data = await getDocs(categoryCollectionRef);
            setCategories(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
        }
        const getProducts = async ()=> {
            const data = await getDocs(productCollectionRef);
            setProductList(data.docs.map((doc)=>({...doc.data(), id: doc.id })))
        };

        getProducts();
        getCategories();

    }, []);

    let productCollection = {};
    let topRating = [];
    for(let i=0; i<categories.length; i++){
        let category = categories[i];
        productCollection[category.title] =[];
        for(let n = 0; n < productList.length; n++){
            let product = productList[n];
            if(product.category === category.title){
                productCollection[category.title].push(product);
            }
        };
        ;
    };
    const list = productList.filter((product)=> product.top);

    for (let i =0; i< list.length; i += 3){
        topRating.push(list.slice(i,i+3));
    }


    


  return (
    <div className='home'>
        <div className='home_container'>
            <Slider className='home_image'/>
            <CategoryList productCollection={productCollection}/>
            <div className='list_title'>NEW ARRIVALS</div>
                <div className='product_list'>
                    {topRating.map((list)=>(
                    <div className='topRating_list'>
                    <Product
                    id={list[0].id}
                    title={list[0].title}
                    brand={list[0].brand}
                    image={list[0].image}
                    rating={list[0].rating}
                    price={list[0].price}
                    category={list[0].category}
                    data={productCollection[list[0].category]}
                    />
                    <Product
                    id={list[1].id}
                    title={list[1].title}
                    brand={list[1].brand}
                    image={list[1].image}
                    rating={list[1].rating}
                    price={list[1].price}
                    category={list[1].category}
                    data={productCollection[list[1].category]}
                />
                <Product
                    id={list[2].id}
                    title={list[2].title}
                    brand={list[2].brand}
                    image={list[2].image}
                    rating={list[2].rating}
                    price={list[2].price}
                    category={list[2].category}
                    data={productCollection[list[1].category]}
                />
                </div>
                ))}
                </div>


        </div>
    </div>
  )
}

export default Home