import '../asets/content.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Carousel } from "react-responsive-carousel";

function Content() {
    const [abaya] = useState([
        { name: 'AYRA ABAYA White', price: 5000.00, image: '../images/s1.jpg' },
        { name: 'MARYA ABAYA Purpule', price: 6000.00, image: '../images/s3.jpg' },
        { name: 'MEHK ABAYA Blue', price: 3000.00, image: '../images/s5.jpg' },
        { name: 'NASHEE ABAYA White', price: 5000.00, image: '../images/s4.jpg' },
        { name: 'ALISH ABAYA Black', price: 9000.00, image: '../images/s7.jpg' },
        { name: 'OKAA ABAYA Black', price: 7000.00, image: '../images/s11.jpg' },
        { name: 'LORA ABAYA Pink', price: 6000.00, image: '../images/s12.jpg' },
        { name: 'ROSH ABAYA Purple', price: 5000.00, image: '../images/s13.jpg' },
        { name: 'POSH ABAYA Pinkish', price: 2000.00, image: '../images/s15.jpg' },
        { name: 'POSH ABAYA Pinkish', price: 2000.00, image: '../images/s10.jpg' }
    ])
    const [hijab] = useState([
        { name: 'Chiffon Bubble Purple', price: 700.00, image: '../images/h1.jpg' },
        { name: 'Chiffon Bubble Blue', price: 700.00, image: '../images/h2.jpg' },
        { name: 'Chiffon Bubble Blue', price: 700.00, image: '../images/h11.jpg' },
        { name: 'Chiffon Bubble Blue', price: 700.00, image: '../images/h7.jpg' },
        { name: 'Chiffon Bubble Green', price: 700.00, image: '../images/a5.jpg' },
        { name: 'Chiffon Bubble Green', price: 700.00, image: '../images/a7.jpg' },
        
        { name: 'Chiffon Bubble Green', price: 700.00, image: '../images/a10.jpg' }
    ])

    return (
        <div>
                    <div className="banner-container">
                        <Carousel autoPlay infiniteLoop showThumbs={false}>
                            <div>
                                <img src="../images/ss1.jpg" alt="Banner 1" />
                            </div>
                            <div>
                                <img src="../images/ss1.jpg" alt="Banner 2" />
                            </div>
                        </Carousel>

                        <div className="banner-content">
                            <h1>Welcome to our store!</h1>
                            <p>Discover the latest fashion trends and shop with us.</p>
                            <Link to="/abayapage" className="banner-button">
                                Shop Now
                            </Link>
                        </div>
                    </div>
  
            <h3 className="new-arr">
                OUR ABAYAS
            </h3>
            <div>
                <div className="abaya-container">
                    {abaya.map((abaya) => (
                        <div className="abaya-card" key={abaya.id}>
                            <Link to="/details" state={{ from: abaya }}><img src={abaya.image} alt={abaya.name} className="abaya-img" /></Link>
                            <div id="sm-cart">
                                <p style={{ marginTop: '1%', marginBottom: "1%" }}>{abaya.name}</p>
                                <h6>Rs. {abaya.price} PKR</h6>
                                <button className='b1' >
                                    <img src='../images/shopping-bag.png' alt='l' style={{ width: '21px', height: '21px', marginRight: '3%', marginBottom: '1%' }} />ADD TO CART</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <h3 className="new-arr">
                NEW ARRIVIALS
            </h3>
            <div>
                <div className="abaya-container">
                    {hijab.map((hijab) => (
                        <div className="abaya-card">
                            <Link to="/details" state={{ from: hijab }}><img src={hijab.image} alt={hijab.name} className="abaya-img" /></Link>
                            <div id="sm-cart">
                                <p style={{ marginTop: '1%', marginBottom: "1%" }}>{hijab.name}</p>
                                <h6>Rs. {hijab.price} PKR</h6>
                                <button className='b1' >
                                    <img src='../images/shopping-bag.png' alt='l' style={{ width: '21px', height: '21px', marginRight: '3%', marginBottom: '1%' }} />ADD TO CART</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
} export default Content;