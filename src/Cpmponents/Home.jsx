import './Home.css'
import logo from '../images/logo.png'
import toggle from '../images/toggle.png'
import two from '../images/two.jpg'
import five from '../images/five.jpg'
import ana from '../images/ana.jpg'
import comma from '../images/comma.png'
import { useState } from 'react';
const Home=()=>{
    const [isActive, setIsActive] = useState(false);

    const handleImageClick = () => {
        setIsActive(!isActive);
    };
    return(
        <>
   <section id='main'>
   
        <div className="container">
        <nav className='nav'>
        <img className='logo' src={logo} alt="" />
        <ul className={`nav-list ${isActive ? 'active' : ''}`}>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Service</a></li>
        <li><a>Contact</a></li>
        <li><button className='btn'>Rigiser</button></li>

       </ul>
       <img className='toggle' onClick={handleImageClick} src={toggle} alt="" />
       </nav>
       <div className='article'>
      
        <h1 className='intro-main'>We all love</h1>
        <h1 className='secondary-main'>nature</h1>
        <p>Look deep into nature and you will understand every thing better</p>
        <button className='btn-artice'>Get Started</button>
        
 
       </div>
        </div>
    
   
   </section>
   <section id='servece'>
    <div className="container">
        <div className="sectionTitle">
            <h1>Our Service</h1>
            <div className="line">
            </div>
        </div>
        <div className="services">
            <div className="service">
                <img className='img-serv' src={two} alt="" />
                <h3>Wep Desigen</h3>
                <p>Repellendus cum numquam, soluta consequuntur quam.</p>
            </div>
            <div className="service">
                <img className='img-serv' src={two} alt="" />
                <h3>Wep Desigen</h3>
                <p>Repellendus cum numquam, soluta consequuntur quam.</p>
            </div>
            <div className="service">
                <img className='img-serv' src={two} alt="" />
                <h3>Wep Desigen</h3>
                <p>Repellendus cum numquam, soluta consequuntur quam.</p>
            </div>
        </div>
    </div>
   </section>
   <section id='yarp'>
    <div className="container">
    <div className='div_profile' >
        <img className='comma' src={comma}/>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum in vitae aspernatur temporibus sed facere reprehenderit est aliquid, cupiditate, illum id obcaecati velit totam.</h4>
        <img className='profile' src={ana} alt="" />
    </div>
    </div>
 
   </section>
       <section id='about'>
        <div className="container">
        <div className='about'>
            <div className='details'>
                <span>Maison Ahmed</span>
                <h1>Complete Responsive Website Using HTML CSS | Responsive web design tutorial</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quo consequuntur provident accusamus ut iusto aliquam fuga, eius perspiciatis, expedita vitae voluptatem molestiae itaque porro facilis non modi incidunt nisi?</p>
                <button>HELLO WORLD</button>


            </div>
            <div>
                <img src={`https://cdn4.sharechat.com/img_889957_1639496_1676344885345_sc.jpg`} alt="" />
            </div>
        </div>
        </div>
       

       </section>
       <section id="last">
        <div className="container">
            <div className='last'>
                <h1>QUESTIONS?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt, illo suscipit necessitatibus magnam, dolorem quam ex saepe sunt itaque laudantium! Ea reiciendis, ad veniam magnam quasi distinctio enim perspiciatis!</p>
                <button>Lets Take Now</button>
            </div>
        </div>
       
       </section>
       <div id="footer">
        <div className="container">
            <div className='footer'>
            <ul className='footer-list'>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Service</a></li>
        <li><a>Contact</a></li>
       

       </ul>
       <img className='logo' src={logo} alt="" />
       <p>Love Nature by,Maisoon Ahmed</p>
            </div>
        </div>
       </div>
        </>
    )
}
export default Home;