import React, { useState } from 'react';
import { AddUser } from '../utils/usersAPI';

const RegistrationForm = () => {
    //אתחול האובייקט באמצעות useState עם השדות הרלוונטיות להרשמה
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
        // Add more fields as needed
    });
    //במקרה של שגיאה
    const [error, setError] = useState('');

    //פונקציה שתעדכן את השדה המתאים באובייקט כאשר הערכים משתנים
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    //פונקציה המטפלת בהגשת הטופס וניגשת לכל נתוני רישום המשתמש המאוחסנים באובייקט
    const handleSubmit = async (e) => {
        e.preventDefault();
            await AddUser(formData).then(res => {
                console.log(res);
                if(res.status === 200){
                    alert("נרשמת בהצלחה:)");
                }
            }).catch((error) =>{
            setError('ההרשמה נכשלה, נסה שנית')
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Username" />
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" />
            {/* Add more input fields as needed */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;