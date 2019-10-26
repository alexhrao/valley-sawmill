import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidecar from './Sidecar';
import ProductCategory from './ProductCategory';

const products = [
  {
    name: "Lumber",
    description: "Valley Sawmill uses rough cut wood to produce a variety of size options as well as to fulfill customer requests. Our lumber stock varies in availability and price. Please call the Anchorage office if you have questions about our inventory.",
    products: [
      {
        imgLink: "lumber/01.jpg",
      },
      {
        imgLink: "lumber/02.jpg",
      },
      {
        imgLink: "lumber/03.jpg",
      },
      {
        imgLink: "lumber/04.jpg",
      },
      {
        imgLink: "lumber/05.jpg",
      },
      {
        imgLink: "lumber/06.jpg",
      },
    ]
  },
  {
    name: "Woodchips",
    description: "We offer plain, red, gold, and brown woodchips as well as playground fiber at our Anchorage location. All of our chips are priced at $65/cubic yard, $10/42 gallon bag, and $6/33 gallon bag.",
    products: [
      {
        name: "Gold Woodchips",
        description: "$65/Yard",
        imgLink: "woodchips/01.jpg",
      },
      {
        name: "Red Woodchips",
        description: "$65/Yard",
        imgLink: "woodchips/02.jpg",
      },
      {
        name: "Plain Woodchips",
        description: "$65/Yard",
        imgLink: "woodchips/03.jpg",
      },
      {
        name: "Playground Fiber",
        description: "$65/Yard",
        imgLink: "woodchips/04.jpg",
      },
      {
        name: "Brown Woodchips",
        description: "$65/Yard",
        imgLink: "woodchips/05.jpg",
      },
    ]
  },
  {
    name: "Logs",
    description: "",
    products: [
      {
        imgLink: "logs/01.jpg",
      },
      {
        imgLink: "logs/02.jpg",
      },
      {
        imgLink: "logs/03.jpg",
      },
      {
        imgLink: "logs/04.jpg",
      },
      {
        imgLink: "logs/05.jpg",
      },
      {
        imgLink: "logs/06.jpg",
      },
      {
        imgLink: "logs/07.jpg",
      },
      {
        imgLink: "logs/08.jpg",
      },
      {
        imgLink: "logs/09.jpg",
      },
      {
        imgLink: "logs/10.jpg",
      },
      {
        imgLink: "logs/11.jpg",
      },
      {
        imgLink: "logs/12.jpg",
      },
      {
        imgLink: "logs/13.jpg",
      },
      {
        imgLink: "logs/14.jpg",
      },
      {
        imgLink: "logs/15.jpg",
      },
      {
        imgLink: "logs/16.jpg",
      },
      {
        imgLink: "logs/17.jpg",
      },
    ]
  }
];

function App() {
  const cats = products.map(c => {
    return <ProductCategory key={c.name} category={c.name} description={c.description} products={c.products} />
  });
  const cName = window.innerWidth > 768 ? "main-view" : "main-view mobile";
  return (
    <div className="App">
      <div className={cName}>
        <div className="categories">
          {cats}
        </div>
        <Sidecar />
      </div>
    </div>
  );
}

export default App;
