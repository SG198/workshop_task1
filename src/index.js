import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const BookDetails=[
  {
      id:1,
      title:"Atomic Habits",
      author:"James Clear",
      image:"https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL604_SR604,400_.jpg"
  },
  {
      id:2,
      title:"Psychology & Money",
      author:"Morgan Housel",
      image:"https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg"
  },
  {
      id:3,
      title:"The Courage To Be Disliked",
      author:"Ichiro Kishimi and Fumitake Koga",
      image:"https://images-eu.ssl-images-amazon.com/images/I/71k7V0QvcdL._AC_UL604_SR604,400_.jpg"
  },
  {
      id:4,
      title:"My First Library",
      author:"My First Library",
      image:"https://images-eu.ssl-images-amazon.com/images/I/711c-uf6AFL._AC_UL604_SR604,400_.jpg"
  },
  {
      id:5,
      title:"Word Power Made Easy",
      author:"Norman Lewis",
      image:"https://images-eu.ssl-images-amazon.com/images/I/818e+fq7+BL._AC_UL604_SR604,400_.jpg"
  },
  {
      id:6,
      title:"Rich Dad Poor Dad",
      author:"Robert T. Kiyosaki",
      image:"https://images-eu.ssl-images-amazon.com/images/I/81bsw6fnUiL._AC_UL604_SR604,400_.jpg"
  },
  {
      id:7,
      title:"DO EPIC SHIT",
      author:"Ankur Warikoo",
      image:"https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL604_SR604,400_.jpg"
  },
  {
      id:8,
      title:"The Alchemist",
      author:"Paulo Coelho",
      image:"https://images-eu.ssl-images-amazon.com/images/I/71aFt4+OTOL._AC_UL604_SR604,400_.jpg"
  },
  {
      id:9,
      title:"Ikigai",
      author:"Héctor García",
      image:"https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL604_SR604,400_.jpg"
  },
  {
      id:10,
      title:"Life's Amazing Secrets",
      author:"Gaur Gopal Das",
      image:"https://images-eu.ssl-images-amazon.com/images/I/81N7FmJhbhL._AC_UL604_SR604,400_.jpg"
  },
  {
      id:11,
      title:"The Power of Your Subconscious Mind",
      author:"Joseph Murphy",
      image:"https://images-eu.ssl-images-amazon.com/images/I/71sBtM3Yi5L._AC_UL604_SR604,400_.jpg"
  },
  {
      id:12,
      title:"Sapiens",
      author:"Yuval Noah Harari",
      image:"https://images-eu.ssl-images-amazon.com/images/I/713jIoMO3UL._AC_UL604_SR604,400_.jpg"
  },
];


const BookList=()=>{
  return (
  <>
  <div className="boxModel">
  {BookDetails.map((book)=>{
    // const {id,title,author,image}=book;
    return <Book book={book} key={book.id}/>
  })}
  </div>
  </>
  )
}

const Book=(props)=>{
  const {title,author,image}=props.book;
 return (
       
    <>
    <div className="box" >
    <div className="boxcontent">
        <div className="images">
            <img src={image} alt="boxImage"/>
        </div>
        <div className="myBtn">
            <button className="btnBox">{title}</button>
        </div>
        <a href='/'>{author}</a>
        <hr/>
        <div className="another">
            <div className="first">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <div className="second">
                <i className="fas fa-arrow-right"></i>
            </div>
        </div>
    </div>
</div>
</>
      

    )
}

ReactDOM.render(
  <BookList/>,
  document.getElementById('root')
);

