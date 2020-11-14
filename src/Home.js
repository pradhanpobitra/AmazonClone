import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img src='https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/7a2ef2c8-d54c-4da8-beba-f4e12a0f10d5._UR1280,600_SX1500_FMjpg_.jpg' className='home__image'/>
                
                <div className='home__row'>
                    <Product id={134562} title='Think Like a Monk'
                    rating={5} price={14.99} image='https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg'/>

                    <Product id={123564} image='https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg' title='Ikigai: The Japanese Secret to a Long and Happy Life' price={9.59} rating={5}/>
                </div>

                <div className='home__row'>
                    <Product image='https://images-na.ssl-images-amazon.com/images/I/81mtDLql%2BXL._SL1500_.jpg' id={123654} title='Redmi 9 (Sporty Orange, 4GB RAM, 64GB Storage) | 3 Months No Cost EMI on BFL' price={219.46} rating={4}/>
                    
                    <Product id={145632} title='LG 28 L Convection Microwave Oven (MC2846SL, Silver, With Starter Kit)' price={100.59} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/710KOY1c3wL._SL1500_.jpg'/>

                    <Product id={149632} title='Samsung 253L 3 Star Inverter Frost Free Double Door Refrigerator (RT28T3483S8/HL, Elegant Inox)' price={490.99} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/71WdrLib1GL._SL1500_.jpg'/>
                </div>

                <div className='home__row'>
                    <Product id={156432} title='Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL' rating={4} price={999.59} image='https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg'/>
                </div>
            </div>
        </div>
    )
}

export default Home
