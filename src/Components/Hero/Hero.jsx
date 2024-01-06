import React from 'react';
import './Hero.css';
import logo from '../Assests/Logo.png';
import product from '../Assests/product-header.png';
import model from '../Assests/model.png';
import play from '../Assests/play-btn.png';
const Hero = () => {
    return <>
        <div className="hero">
            <div className="hero-left">
                <div className="content">
                    <div className="txt-logo">
                        <p><span className="highlight">D FIT</span> Nutrition</p>
                    </div>
                    <div className="offer">
                        <p className="discount-text">Mass and weight gainers </p>
                        <p>up to 50% off</p>
                    </div>
                </div>
                <div className="product-icon">
                    <img src={product} alt="ProductImage" />
                </div>

                <div className="shop-now-btn">
                    Shop Now
                    <img src={play} alt="PlayButton" />
                </div>

            </div>
            <div className="hero-right">
                <img src={model} alt="Model" />

            </div>

        </div>
    </>
}
export default Hero;