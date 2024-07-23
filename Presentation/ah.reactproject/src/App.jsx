import { useState, useEffect } from 'react'


import './App.css'
import CategoryComponent from './components/Category';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';

function App() {
    const [categories, setCategories] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        categoryGetir();
    }, []);

    const categoryGetir = async () => {
        const url = "http://localhost:5215/api/Category";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const categories = await response.json();
            setCategories(categories);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };

    


    return (
        <BrowserRouter>
           
            <Routes>

            <Route path="/*" element={<Loading/>}/>


            </Routes>

            <CategoryComponent categories={categories} />

            


        </BrowserRouter>
    )
}

export default App
