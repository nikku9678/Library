import React from 'react';
import './AddBooks.css'; // Make sure to link the CSS file
import img2 from '../../assets/image2.jpg'
import Navbar from '../../components/Navbar/Navbar';
const AddBooks = () => {
  return (
    <>
    <Navbar/>
    <div className="book-form-container">
      <div className="book-form-image">
        <img src={img2} alt="Book" />
      </div>
      <div className="book-form-content">
        <h2>Add a New Book</h2>
        <form>
          <div className="input-group">
            <label>Title:</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Author:</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Genre:</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Publication Year:</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>ISBN:</label>
            <input type="text" />
          </div>
          <div className="btn">
          <button className="add-book-button">Add Book</button>
          
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddBooks;
