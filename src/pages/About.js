import React from 'react';
import MultiplePizzas from '../assests/multiplePizzas.jpeg'; // Corrected typo in 'assets'
import '../styles/About.css';
function About() {
  return (
    <div className='about'>
      <div 
        className='aboutTop'
        style={{ backgroundImage: `url(${MultiplePizzas})` }}>
      </div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>
            "Tony's Pizzeria" is a delightful shop known for its mouthwatering pizzas and warm ambiance.
            Established in the heart of the city, this family-owned pizzeria has been serving delectable pizza creations for over two decades,
            earning a special place in the hearts of pizza enthusiasts.
            At Tony's Pizzeria,
            the secret lies in the perfect blend of high-quality ingredients,
            traditional recipes, and a passion for crafting exceptional pizzas.
            Each pizza is a culinary masterpiece, featuring a thin, crispy crust, rich tomato sauce, and a generous topping of fresh,
            locally sourced ingredients. 
            Whether you crave the classic Margherita or prefer adventurous flavors like BBQ Chicken or Mediterranean,
Tony's Pizzeria offers a diverse menu to satisfy every pizza lover's palate.
Beyond the delectable pizzas,
Tony's Pizzeria is more than just a food destination;
it's a community hub.
The welcoming atmosphere,
friendly staff, and cozy interior make it an ideal spot for family gatherings,
casual dates, or a quick solo bite.
With a commitment to excellent service and a passion for creating unforgettable dining experiences, 
Tony's Pizzeria continues to be a cherished pizza haven for locals and visitors alike. Come and savor the essence of Italy right in the heart of our city at Tony's Pizzeria –
where every slice tells a story of passion, tradition, and exceptional taste.
        </p>
      </div>
    </div>
  );
}

export default About;
