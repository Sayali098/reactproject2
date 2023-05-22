import vg from "../assets/imag/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";
function Home(){
    return(
        <>
        <div className="home" id="home">
          <main>
<h2>techystar</h2>
<p>solution to your all problems</p>
</main>  
        </div>
        <div className="home2">
            <img src={vg} alt="Graphics"></img>
            <div>

            <p>
            We are your one and only solution to the tech problem 
            you face
            every day we are  leading  tech company whose aim is to 
            increase the
            problem solving ability in childern
            </p>
            </div>
            
        </div>


        <div className="home3" id="about">
            <div>
                <h1>who are you</h1>
                <p>
                We are your one and only solution to the tech problem 
            you face
            every day we are  leading  tech company whose aim is to 
            increase the
            problem solving ability in childern
            We are your one and only solution to the tech problem 
            you face
            every day we are  leading  tech company whose aim is to 
            increase the
            problem solving ability in childern
                </p>
            </div>
        </div>
        <div className="home4" id="brands"> 
        <div>

            <h1>Brands</h1>
            <article>
                
                <div style={{
                    animationDelay:"0.3s"
                }}>
                    <AiFillGoogleCircle></AiFillGoogleCircle>
                    <p>Google</p>

                </div>

                <div style={{
                    animationDelay:"0.5s"
                }}>
                    <AiFillAmazonCircle></AiFillAmazonCircle>
                    <p>Amozon</p>

                </div>
                
                <div style={{
                    animationDelay:"0.7s"
                }}>
                    <AiFillYoutube></AiFillYoutube>
                    <p>Youtube</p>

                </div>
                
                <div style={{
                    animationDelay:"1s"
                }}>
                    <AiFillInstagram></AiFillInstagram>
                    <p>Instagram</p>

                </div>
            </article>
            </div>
            </div>
        </>
    );
}


export default Home;