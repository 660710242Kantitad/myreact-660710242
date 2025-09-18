import { Link } from "react-router-dom";
import React from "react";

// import './HomePage.css';
// import './style/HomePage.css'; // ✨ Import from style folder

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Bookstore</h1>
            <p>Discover a world of books at your fingertips.</p>
            <p>Expore</p>
            <Link to="/books">Go to Book List</Link>
        </div>
    );
}

export default HomePage;
// bookstore-app/src/data/booksData.js
// ข้อมูลหนังสือ