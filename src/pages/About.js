import React from 'react';
import Team from "../assets/team.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${Team})`}}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at aliquet enim, non pharetra leo. Vestibulum fermentum ex nibh, et viverra nulla auctor cursus. Donec maximus lacus ac purus efficitur, ac viverra leo rutrum. Vestibulum volutpat neque sit amet sapien dapibus, a maximus diam gravida. Integer scelerisque eu eros quis posuere. Donec imperdiet a sapien ac tincidunt. Praesent malesuada diam a cursus gravida. Maecenas a sem porta, varius magna sit amet, congue urna. Maecenas nec dolor et dolor accumsan condimentum sit amet vel lectus. Suspendisse et libero nulla. Proin enim nulla, vestibulum id congue at, gravida vitae dolor. In faucibus tincidunt quam, non ullamcorper quam aliquet at.

            </p>
        </div>
    </div>
  )
}

export default About;