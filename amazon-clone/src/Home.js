import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                 <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheGentlemen/GENTL_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB404268992_.jpg" alt="" /> 
                 
                <div className="home_row">
                   <Product id="12343344" title='The lean startup' price= {29.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={5}/>
                   <Product id="49538094" title="kenwood kmix stand mixer for baking, 5 litre glass bowl" price={239.0} rating={4} image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD" />
                </div>
                <div className="home_row">
                   <Product />
                   <Product />  
                   <Product />  
                </div>
                <div className="home_row">
                   <Product /> 
                </div>
            </div>
        </div>
        
    )
}

export default Home

