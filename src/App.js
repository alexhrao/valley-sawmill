import React from 'react';
import ImageGallery from 'react-image-gallery';
import './App.css';
import Navigator from './Navigator';
import ProductCategory from './ProductCategory';
import isMobile from './isMobile';

const products = [
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
      },
      {
        imgLink: "logs/19.jpg",
      },
    ]
  },
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
    name: "Equipment",
    id: "equipment",
    description: "We are currently looking at leasing a Morbark 4600 track Horizontal Wood Grinder",
    products: [
      {
        name: "",
        description: "",
        imgLink: "equipment/01.jpg",
      },
      {
        name: "",
        description: "",
        imgLink: "equipment/02.jpg",
      },
      {
        name: "",
        description: "",
        imgLink: "equipment/03.jpg",
      },
    ]
  },
];

const about = {
  name: "About the Company",
  id: "about",
  description: "Serving Alaskans for over 40 Years!",
  products: [
    {
      name: "Greg Bell",
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
  const cats = [...products, about].map(c => {
    return <ProductCategory key={c.name} category={c} products={c.products} />
  });
  return (
    <div className={`app ${isMobile() ? 'mobile' : ''}`}>
      <Navigator />
      <div className="gallery">
        <ImageGallery
          showThumbnails={false}
          showBullets={true}
          autoPlay={true}
          items={[
          {
            original: "slideshow/01.jpg"
          },
          {
            original: "slideshow/02.jpg"
          },
          {
            original: "slideshow/03.jpg"
          },
          {
            original: "slideshow/04.jpg"
          },
          {
            original: "slideshow/05.jpg"
          },
        ]} />
      </div>
      <div className="categories">
        {cats}
      </div>
      <div className="contact">
        <div className="anchor">
          <a id="contact" href="#contact">&nbsp;</a>
          <h2>Contact Us</h2>
        </div>
        <div className="contact-options">
          <p>Have questions? Want a quote? Let's get in touch!</p>
          <p className="contact-email"><strong>Email:</strong> <a href="mailto:valleysawmill@yahoo.com">valleysawmill@yahoo.com</a></p>
          <p className="contact-phone"><strong>Phone:</strong> <a href="tel:+19075633436">+1 (907) 563-3436</a></p>
          <p className="contact-address-header"><strong>Address:</strong></p>
          <p className="contact-address">Valley Sawmill<br />19155 Rex Bell Road<br />Wasilla, AK 99587<br />United States of America</p>
        </div>
      </div>
    </div>
  );
}

export default App;
