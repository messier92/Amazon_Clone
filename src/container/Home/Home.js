import React from 'react'
import "./Home.css";
import Product from "../../components/Product/Product"

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="coverPhoto"></img>

            <div className="home__row">
                <Product id='12345' title='The Lean Startup' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL._SX324_BO1,204,203,200_.jpg' rating={5}/>
                <Product id='12346' title='Scott Multiple Purpose Kitchen Towels' price={4.46} image='https://m.media-amazon.com/images/I/51lfpck2+VL._AC_SY400_.jpg' rating={4}/>
            </div>
            
            <div className="home__row">
                <Product id='12347' title='Simple Modern Wine Tumbler with Press-In Lid' price={19.84} image='https://images-na.ssl-images-amazon.com/images/I/81YuCfgHFRL._AC._SR360,460.jpg' rating={3}/>
                <Product id='12348' title='Apple MacBook Pro' price={2799.99} image='https://images-na.ssl-images-amazon.com/images/I/61tMElRCKbL._AC._SR360,460.jpg' rating={1}/>
                <Product id='12349' title='Victorinox Swiss Army Watch' price={1322.53} image='https://images-na.ssl-images-amazon.com/images/I/61BLkxNq0dL._AC._SR360,460.jpg' rating={2}/>
            </div>          

            <div className="home__row">
                <Product id='123450' title='Subaru Forester' price={1234} image='https://m.media-amazon.com/images/I/61hmW5WJ5AL._AC_UL480_FMwebp_QL65_.jpg' rating={3}/>
            </div>
        </div>    
    </div>
  )
}

export default Home