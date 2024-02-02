import React from 'react'
import {Link} from 'react-router-dom';
import BannerImage from '../assests/pizza.jpeg';
import '../styles/Home.css';
function Home() {
  return (
    
      <div className="home"style={{backgroundImage:`url(${BannerImage})`}}>
        <div className="headerContainer" >
          <h1>Tony's Pizzeria</h1>
          <p> PIZZA FIT TO ANY TASTE</p>
          <Link>
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
  );

}

export default Home;