import React, { useState } from 'react';
import Navbar from '../../components/Navbar/';
import Explore from './explore.module.css'
import { Link } from "react-router-dom";
import ImageSlider from '../../components/carousel/ImageSlider';
import { SliderData } from '../../components/carousel/SliderData';
import ReactPlayer from "react-player";
import {WiDayCloudy} from 'react-icons/wi'
import { Carousel } from 'react-carousel-minimal';

const iconStyles = { color: "white", fontSize: "1.1em"};
const api = {
  key: "7d4ef5d23648c7c62acd3ccfa1a0a30b",
  base: "https://api.openweathermap.org/data/2.5/"
}

const data = [
  {
    image: "https://res.cloudinary.com/du2shbtpe/image/upload/v1649575469/travellers/altaiTavanBogd_kn1lwy.jpg",
    caption: "Altai tavan bogd"
  },
  {
    image: "https://res.cloudinary.com/du2shbtpe/image/upload/v1649575476/travellers/manzishurHiid_uh0kel.jpg",
    caption: "Manzishur hiid"
  },
  {
    image: "https://res.cloudinary.com/du2shbtpe/image/upload/v1649575477/travellers/shargaljuutiinhaluun_qqu5l1.jpg",
    caption: "Shargaljuutiin haluun"
  },
  {
    image: "https://res.cloudinary.com/du2shbtpe/image/upload/v1649575478/travellers/suwragahairhan_gcauii.jpg",
    caption: "Suvraga hairhan"
  },
  {
    image: "https://res.cloudinary.com/du2shbtpe/image/upload/v1649575478/travellers/shatarChuluu_d1zksn.gif",
    caption: "Shatar chuluu"
  },
  {
    image: "https://res.cloudinary.com/du2shbtpe/image/upload/v1649575479/travellers/shiweet_rjv8r8.jpg",
    caption: "Shiveet"
  },
  {
    image: "https://res.cloudinary.com/du2shbtpe/image/upload/v1649575485/travellers/SultaiHairhan_ukitgc.jpg",
    caption: "Sultai hairhan"
  },
  {
    image: "https://res.cloudinary.com/du2shbtpe/image/upload/v1649575481/travellers/mongolels_wby6bj.png",
    caption: "Mongol els"
  },
  {
    image: "https://res.cloudinary.com/du2shbtpe/image/upload/v1649575492/travellers/potani_vtoveu.jpg",
    caption: "Potaninii musun gol"
  },
  {
    image: "https://res.cloudinary.com/du2shbtpe/image/upload/v1649575480/travellers/bichigthad_olk367.jpg",
    caption: "Bichigt had"
  },
  {
    image: "https://res.cloudinary.com/du2shbtpe/image/upload/v1649575477/travellers/ihbogd_iwscu0.jpg",
    caption: "Ih bogd"
  },
  {
    image: "https://res.cloudinary.com/du2shbtpe/image/upload/v1649575469/travellers/altaiTavanBogd_kn1lwy.jpg",
    caption: "Altai tavan bogd"
  },

];

const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
}
const slideNumberStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
}

function Index() {
//   const [query, setQuery] = useState('');
//   const [weather, setWeather] = useState({});
//   fetch(`${api.base}weather?q=ulaanbaatar&units=metric&APPID=${api.key}`)
//   .then(res => res.json())
//   .then(result => {
//   setWeather(result);
//   setQuery('');
//   console.log(result);

// });
  return (
    <div className={Explore.main}>
      <Navbar/>
      
      <div className={Explore.weather}> 
        
         <h1 id={Explore.temp}>-3°C</h1>
         <h1 id={Explore.title}>Ulaanbaatar</h1>
          
         <input type="text" placeholder='Search' id={Explore.searchBar}/> 
       
      </div>
      <Carousel
            data={data}
            time={2000}
            width="1300px"
            height="600px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1300px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
    </div>
  )
}

export default Index