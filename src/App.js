import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigator from './Navigator';
import ProductCategory from './ProductCategory';
import isMobile from './isMobile';

const products = [
  {
    name: "Lumber",
    id: "lumber",
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
    id: "woodchips",
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
    id: "logs",
    description: "We provide wholesale turned log packages for projects like those seen in the gallery below",
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
      {
        imgLink: "logs/18.jpg",
      }
    ]
  },
];

const about = {
  name: "About the Company",
  id: "about",
  description: "Valley Sawmill has been Alaskan owned and operated since 1979. We currently have two locations; one in Anchorage and one at Pt. MacKenzie. We are dedicated to providing quality materials to all our customers, no matter the size.",
  products: [
    {
      name: "Gregory Bell",
      description: "President",
      imgLink: "about/greg.jpg",
    },
    {
      name: "Vern",
      description: "Manager & Sawyer",
      imgLink: "about/vern.jpg",
    },
    {
      name: "Charlie",
      description: "Sawmill Mechanic",
      imgLink: "about/charlie.jpg",
    },
  ]
};

function App() {
  const cats = products.map(c => {
    return <ProductCategory key={c.name} category={{name: c.name, id: c.id}} description={c.description} products={c.products} />
  });
  return (
    <div className={`App ${isMobile() ? 'mobile' : ''}`}>
      <Navigator />
      <div className='main-view'>
        <div className="categories">
          {cats}
        </div>
        <div className="contact">
          <div className="anchor">
            <a id="contact" href="#contact">&nbsp;</a>
            <h2>Contact Us</h2>
          </div>
          <p>Have questions? Want a quote? Let's get in touch!</p>
          <div className="contact-options">
            <p className="contact-phone"><strong>Phone:</strong> <a href="tel:+19075633436">+1 (907) 563-3436</a></p>
            <p className="contact-address-header"><strong>Address:</strong></p>
            <p className="contact-address">Valley Sawmill<br />10600 Cordova Street<br />Anchorage, AK 99515<br />United States of America</p>
          </div>

        </div>
        <ProductCategory key={about.name} category={{name: about.name, id: about.id}} description={about.description} products={about.products} />
      </div>
    </div>
  );
}

export default App;
