import React from 'react';
import { Carousel } from 'react-carousel-minimal';


const SliderWie = () => {

    const data = [
        {
          image: "/images/ACT1.png",
          caption: "Taller formativo programación con NAO, en conjunto con la empresa Alisys"
        },
        {
            image: '/images/ACT2.jpg' ,          
            caption: 'Visita al colegio "La Fuente", charla sobre el empoderamiento femenino y conocimiento sobre las distintas áreas de la ingeniería.'
        },
        {
          image: "/images/ACT3.jpg",
          caption: "Participación en feria de astrobiología en Cota"
        },
        {
          image: "/images/ACT4.jpg",
          caption: "Apoyo en huerta solidaria con la Universidad de la Sabana"
        }
      ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
 return(
<div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={5000}
            width="80vw"
            height="500px"
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
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
 );
};

export default SliderWie;