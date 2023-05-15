import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1215"
            title="The lean startup"
            price={29.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            }
            rating={5}
          />
          <Product
            id="12125"
            title="AmazonBasics Humidifier with Night Light and Aroma Diffuser - 4-Liter, White"
            price={209.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71JHDQfKgUL._AC_SL1500_.jpg"
            }
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="12125"
            title="
            TICARVE Cleaning Gel for Car Detailing Tools Keyboard Cleaner Automotive Dust Air Vent Interior Detail Detailing Putty Universal Dust Cleaner for Auto...
            "
            price={102.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71j60x8bWxL._AC_SL1500_.jpg"
            }
            rating={3}
          />
          <Product
            id="12125"
            title="AmazonBasics Humidifier with Night Light and Aroma Diffuser - 4-Liter, White"
            price={239.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/A166C71eR-L._AC_UY500_.jpg"
            }
            rating={3}
          />
          <Product
            id="12125"
            title="Colgate Extra Clean Toothbrush, Full Head, Soft - 6 Count"
            price={259.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81l2bK1kAcL._SL1500_.jpg"
            }
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="121"
            title="
            Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode,..."
            price={599.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
            }
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
