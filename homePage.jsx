import React, { useEffect, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import Product from './products';
import Header from './header';
import Nav from './nav';
import '../css/homePage.css';
import { GetProduct } from '../utils/product.js';
import { setProducts } from '../features/productSlice.js'

function HomePage() {
    const dispatch = useDispatch();
    // שימוש במשתנה ששמרנו ברידקס - כשהיוזר מתחבר לאתר
    const logedUser = useSelector(state => state.user.logedUser);
    // שימוש בשתנה של מערך מוצרים ששמרנו בחלק של המוצרים בסלייס
    const products = useSelector(state => state.product.products);


    useEffect(() => {
        if(products.length === 0){
             GetProduct().then((data) => { //שליפת נתונים מהשרת
            //דחיפת הנתונים לריקדס
            dispatch(setProducts(data));
        }).catch((error) => {
                console.error('Error fetching data:', error);
            });
        }
    }, []);

    return (
        <div className='home-page'>
            <Header />
            <h1>ברוכים הבאים לחנות שיינ'ס סטוק</h1>
            {/* הצגה של השם שמחובר עכשיו לאתר - מהמשתנה שקיבלנו מהרידקס */}
            {logedUser != null ? <h3>hello {logedUser.name}</h3> : null}
            {/* {logedUser != null && <h3>hello {logedUser.name}</h3>} */}
            {/*react-router-dom של הספרייה Link תגית */}
            {/*url כשמשתמשים בזה - הלחיצה על הלינק משנה ישירות את הכתובת */}
            {/* App.js ואז מציג את הקומפוננטה המתאימה לפי קומפוננטת */}
            <div >
                <Nav />

            </div>
            <div>
                {products.map((product) => (
                    <Product key={product.id} name={product.name} price={product.prise} />
                ))}

            </div>
            <div>

                {/* תגית ששמים אותה כשרוצים לעשות ניווט מקונן - */}
                {/* הכוונה שרוצים להשאיר את כל הלינקים כתובים למעלה כמו ניווט ואז לשתול את התגית שמתאימה לניווט במקום שכתוב את התגית הזאת: */}
                {/* <Outlet></Outlet> */}
            </div>
        </div>);

};

export default HomePage;