import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CategoryComponent from './components/CategoryComponent';

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
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    BURAK <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

            <CategoryComponent categories={categories} />

            


        </>
    )
}

export default App
