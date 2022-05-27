import React, {useState, useEffect} from 'react';
import {db} from '../firebase-config';
import "./Home.css";
import Product from './Product';
import Slider from './Slider';
import {collection, getDocs} from 'firebase/firestore';
import CategoryList from './CategoryList';
import { useStateValue } from '../helper/StateProvider';

function Home() {
    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [{user,products}, dispatch] = useStateValue();

    // fetch all the product from db once the page load
    const productCollectionRef = collection(db, "Products");
    const categoryCollectionRef = collection(db, 'categories');
    useEffect(()=>{
        const getCategories = async ()=>{
        const data = await getDocs(categoryCollectionRef);
            setCategories(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
            // setCategories(data.docs.map((((doc)=>(console.log(doc))))));
        }
        const getProducts = async ()=> {
            const data = await getDocs(productCollectionRef);
            setProductList(data.docs.map((doc)=>({...doc.data(), id: doc.id })))
        };

        getProducts();
        getCategories();
        loadingProduct();
    }, []);

    const loadingProduct = () => {
        dispatch({
            type: 'add_products',
            products: productList
        });
    };

    console.log(products);
    let productCollection = {};
    let topRating = [];
    categories.map((category)=>{
        productCollection[category.title] =[];
        productList.map((product)=>{
            if(product.category === category.title){
                productCollection[category.title].push(product);
            }
    });
    });
    for (let i =0; i< productList.length; i += 3){
        topRating.push(productList.slice(i,i+3));
    }
    console.log(productCollection, topRating);

    


  return (
    <div className='home'>
        <div className='home_container'>
            <Slider className='home_image'/>

                {topRating.map((list)=>(
                <div className='topRating_list'>
                <Product
                    id={list[0].id}
                    title={list[0].title}
                    brand={list[0].brand}
                    image={list[0].image}
                    rating={list[0].rating}
                    price={list[0].price}
                />
                <Product
                    id={list[1].id}
                    title={list[1].title}
                    brand={list[1].brand}
                    image={list[1].image}
                    rating={list[1].rating}
                    price={list[1].price}
                />
                <Product
                    id={list[2].id}
                    title={list[2].title}
                    brand={list[2].brand}
                    image={list[2].image}
                    rating={list[2].rating}
                    price={list[2].price}
                />
                </div>
                ))}
                <CategoryList productCollection={productCollection}/>
        </div>
    </div>
  )
}

export default Home