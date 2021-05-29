import React from "react";
import "./css/Home.css";
import Product from "./Product.js";
function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__img"
          alt="BOTM"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
          id={1}
            title="New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Space Grey (Latest Model)"
            price={98969}
            image="https://images-na.ssl-images-amazon.com/images/I/71jG%2Be7roXL._SL1500_.jpg"
            rating={5}
          />
          <Product
          id={2}
            title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver"
            price={67990}
            image="https://images-na.ssl-images-amazon.com/images/I/51TdkJSqeQL._SL1000_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
          id={3}
            title="Apple iPhone 11 (64GB) - White (Includes EarPods, Power Adapter)"
            price={51999}
            image="https://images-na.ssl-images-amazon.com/images/I/51o5RmQtroL._SL1024_.jpg"
            rating={5}
          />
          <Product
          id={4}
            title="
            OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)"
            price={42990}
            image="https://images-na.ssl-images-amazon.com/images/I/71m05O2uNdL._SL1500_.jpg"
            rating={5}
          />
          <Product
          id={5}
            title="
            (Renewed) OnePlus Nord 5G (Blue Marble, 8GB RAM, 128GB Storage)"
            price={25999}
            image="https://images-na.ssl-images-amazon.com/images/I/61RdG7c%2BVUL._SL1000_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
          id={6}
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={120000}
            image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg"
            rating={5}
          />
          <Product
          id={7}
            title="Acer Nitro IPS 23.8 inch Full HD 1920 x 1080 1MS VRB 144 Hz Gaming Monitor I 2 X HDMI 1 X Display Port I HDR 10 Ready I VG240YP (Black)"
            price={14499}
            image="https://images-na.ssl-images-amazon.com/images/I/61S%2BPcVni6L._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
