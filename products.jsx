import React, {useEffect, useState} from 'react';//שימוש בהוק אפקט יביא נתוני מוצר כאשר נטען הרכיב
import { GetProduct } from '../utils/product';//באמצעות הפונקציה יביא רשימה של מוצרים
import Product from './Product';

const Products = () =>{
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async () => {
            const data = await GetProduct();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    //טיפול בתרחיש שבו המוצרים עדיין נשלפים מה-API
    //מאפשר להציג הודעת טעינה לפני שליפת המוצרים ועיבודם במסך
    if (products.length === 0){
        return <div>טוען מוצרים</div>; 
    }
     
    return(
        <div className='products'>
            {products.map((product)=>(
              <Product key={product.id} name={product.name} price={product.price} description={product.description}/>
            ))}
        </div>
    );
};

export default Products;