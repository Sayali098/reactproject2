import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/imag/3.jpg";
import img2 from "../assets/imag/4.jpg";


function Services(){
    return (
        <div className="services">
            <Carousel 
            infiniteLoop
            autoPlay
            showStatus={false}
            showArrows={false}
            interval={1000}
            showThumbs={false}
            >

          <div>
            <img src={img1} alt="Item1"></img>
            <p className="legend">Full Stack</p>
            </div>
            
          <div>
          <img src={img2} alt="Item2"></img>
            <p className='legend'>Frond End Developer</p>
            
          </div>
        

            </Carousel>
            
        </div>
    );

}

export default Services;