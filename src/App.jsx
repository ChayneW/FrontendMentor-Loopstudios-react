import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'

// mobile menu icons:
import HamburgerMenu from './components/HamburgerMenu'
import mobileHero from './assets/images/mobile/image-interactive.jpg'

// icons
import facebookIcon from './assets/images/icon-facebook.svg'
import instagramIcon from './assets/images/icon-instagram.svg'
import pinterestIcon from './assets/images/icon-pinterest.svg'
import twitterIcon from './assets/images/icon-twitter.svg'

// card Mobile imgs:
import curiosityMCard from './assets/images/mobile/image-curiosity.jpg'
import deepEarthMCard from './assets/images/mobile/image-deep-earth.jpg'
import fisheyeMCard from './assets/images/mobile/image-fisheye.jpg'
import fromAboveMCard from './assets/images/mobile/image-from-above.jpg'
import nascarMCard from './assets/images/mobile/image-grid.jpg'
import arcadeMCard from './assets/images/mobile/image-night-arcade.jpg'
import skyMCard from './assets/images/mobile/image-pocket-borealis.jpg'
import soccerMCard from './assets/images/mobile/image-soccer-team.jpg'

// card Desktop:
import curiosityDCard from './assets/images/desktop/image-curiosity.jpg'
import deepEarthDCard from './assets/images/desktop/image-deep-earth.jpg'
import fisheyeDCard from './assets/images/desktop/image-fisheye.jpg'
import fromAboveDCard from './assets/images/desktop/image-from-above.jpg'
import nascarDCard from './assets/images/desktop/image-grid.jpg'
import arcadeDCard from './assets/images/desktop/image-night-arcade.jpg'
import skyDCard from './assets/images/desktop/image-pocket-borealis.jpg'
import soccerDCard from './assets/images/desktop/image-soccer-team.jpg'


function App() {

  const [screenSize, setScreenSize] = useState(getCurrentDimension())
  const [menuOpen, setMenuOpen] = useState(false)

  function getCurrentDimension(){
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  useEffect(() => {
    console.log('inside useEffect():')
    console.log(menuOpen)
    function updateDimension(){
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension)
    
    return (() => {
      window.removeEventListener('resize', updateDimension)
    })
  }, [screenSize])

  return (
    <>
      <div className='app'>
        
        {screenSize.width < 1025 ?
          (<section className='header'>
        
              <nav className='navbar'>
                <h1 className='title'>loopstudios</h1>

                  <div className='hamburger-div' onClick={() => setMenuOpen((prev) => !prev)}>
                    <HamburgerMenu isToggleOn={menuOpen} />
                  </div>
              </nav>

              <div className='hero-detail'>
                <h1 className='hero-sentence'>
                  IMMERSIVE 
                  <br></br>
                  EXPERIENCES 
                  <br></br>
                  THAT
                  <br></br>
                  DELIVER</h1>
              </div>
            </section> 
            
      ) : (
          <section className='header'>

            <nav className='navbar'>

                <h1 className='title'>loopstudios</h1>

                <div className='items'>
                  <div><button className='item-btn' href='#'>About</button></div>
                  <div><button className='item-btn' href='#'>Careers</button></div>
                  <div><button className='item-btn' href='#'>Events</button></div>
                  <div><button className='item-btn' href='#'>Products</button></div>
                  <div><button className='item-btn' href='#'>Support</button></div>
                </div>
            </nav>

            <div className='hero-detail'>
                <h1 className='hero-sentence'>
                  IMMERSIVE 
                  <br></br>
                  EXPERIENCES 
                  <br></br>
                  THAT DELIVER
                </h1>
            </div>
          </section>
      )}

         <section className='hero-info'>
          <div className='flex-section'>
           <img className='vr-goggles' src={mobileHero} alt='mobile-interactive'/>
            <div className='hero-intro'>
              <h1>THE LEADER IN <br></br> INTERACTIVE VR </h1>
              <p className='hero-paragraph'>
                Founded in 2011, Loopstudios has been producing world-class 
                virtual reality projects for some of the best companies around the 
                globe. Our award-winning creations have transformed 
                business through digital experiences that bid to their brand. 
              </p>
            </div>
          </div>
         </section>

         {screenSize.width < 1025 ?
         (
          <section className='creation-cont'>
           <div className=''>
             <span className='creation-text'> OUR CREATIONS</span>
             <br></br>
             
             <div className='cards-grid-columns'>
                <div className='card-item'>
                  <h1 className='text-img-overlay'>DEEP <br></br>EARTH</h1>
                  <img className='card-item-img' src={deepEarthMCard} alt=''/>
                </div>

                <div className='card-item'>
                  <h1 className='text-img-overlay'>NIGHT <br></br>ARCADE</h1>
                  <img className='card-item-img' src={arcadeMCard} alt=''/>
                </div>

                <div className='card-item'>
                  <h1 className='text-img-overlay'>SOCCER<br></br>TEAM VR</h1>
                  <img className='card-item-img' src={soccerMCard} alt=''/>
                </div>

                <div className='card-item'>
                  <h1 className='text-img-overlay'>THE<br></br>GRID</h1>
                  <img className='card-item-img' src={nascarMCard} alt=''/>
                </div>

                <div className='card-item'>
                  <h1 className='text-img-overlay'>FROM UP<br></br>ABOVE VR</h1>
                  <img className='card-item-img' src={fromAboveMCard} alt=''/>
                </div>

                <div className='card-item'>
                  <h1 className='text-img-overlay'>POCKET<br></br>BOREALIS</h1>
                  <img className='card-item-img' src={skyMCard} alt=''/>
                </div>

                <div className='card-item'>
                  <h1 className='text-img-overlay'>THE<br></br>CURIOSITY</h1>
                  <img className='card-item-img' src={curiosityMCard} alt=''/>
                </div>

                <div className='card-item'>
                  <h1 className='text-img-overlay'>MAKE IT<br></br>FISHEYE</h1>
                  <img className='card-item-img' src={fisheyeMCard} alt=''/>
                </div>

             </div>

             <div className='button-cont'>
               <button className='see-all'> SEE ALL</button>
             </div>
           </div>

         </section>

         ):(

          <section className='creation-cont'>
           <div className=''>
             
             <div className='creation-banner'>
              <span className='creation-text'> OUR CREATIONS</span>
              
              <div className='button-cont'>
               <button className='see-all'> SEE ALL</button>
              </div>
             </div>

             <br></br>
             
             <div className='cards-grid-columns'>
                <div className='card-item'>
                  <h1 className='text-img-overlay'>DEEP <br></br>EARTH</h1>
                  <img className='card-item-img' src={deepEarthDCard} alt=''/>
                </div>

              <div className='card-item'>
                <h1 className='text-img-overlay'>NIGHT <br></br>ARCADE</h1>
                <img className='card-item-img' src={arcadeDCard} alt=''/>
              </div>

              <div className='card-item'>
                <h1 className='text-img-overlay'>SOCCER<br></br>TEAM VR</h1>
                <img className='card-item-img' src={soccerDCard} alt=''/>
              </div>

              <div className='card-item'>
                <h1 className='text-img-overlay'>THE<br></br>GRID</h1>
                <img className='card-item-img' src={nascarDCard} alt=''/>
              </div>

              <div className='card-item'>
                <h1 className='text-img-overlay'>FROM UP<br></br>ABOVE VR</h1>
                <img className='card-item-img' src={fromAboveDCard} alt=''/>
              </div>

              <div className='card-item'>
                <h1 className='text-img-overlay'>POCKET<br></br>BOREALIS</h1>
                <img className='card-item-img' src={skyDCard} alt=''/>
              </div>

              <div className='card-item'>
                <h1 className='text-img-overlay'>THE<br></br>CURIOSITY</h1>
                <img className='card-item-img' src={curiosityDCard} alt=''/>
              </div>

              <div className='card-item'>
                <h1 className='text-img-overlay'>MAKE IT<br></br>FISHEYE</h1>
                <img className='card-item-img' src={fisheyeDCard} alt=''/>
              </div>

             </div>
           </div>

         </section>
          

         )}

        {screenSize.width < 1025 ?
        (
         <section className='footer'>
           <h1 className='footer-title'>loopstudios</h1>
          
           <div>
             <div className='footer-items'>
                 <div className='footer-item'><p className='footer-item-text'>About</p></div>
                 <div className='footer-item'><p className='footer-item-text'>Careers</p></div>
                 <div className='footer-item'><p className='footer-item-text'>Events</p></div>
                 <div className='footer-item'><p className='footer-item-text'>Products</p></div>
                 <div className='footer-item'><p className='footer-item-text'>Support</p></div>
             </div>

             <div className='footer-icons'>
               <div><img className='icon-svg' src={facebookIcon}></img></div>
               <div><img className='icon-svg' src={twitterIcon}></img></div>
               <div><img className='icon-svg' src={pinterestIcon}></img></div>
               <div><img className='icon-svg' src={instagramIcon}></img></div>
             </div>

             <h1 className='footer-rights'>© 2021 loopstudios. All rights reserved.</h1>
           </div>
         </section>
        ) : (
          <section className='footer'>
            <div className='footer-banner'>
              <h1 className='footer-title'>loopstudios</h1>

              <div className='footer-icons'>
                  <div><img className='icon-svg' src={facebookIcon}></img></div>
                  <div><img className='icon-svg' src={twitterIcon}></img></div>
                  <div><img className='icon-svg' src={pinterestIcon}></img></div>
                  <div><img className='icon-svg' src={instagramIcon}></img></div>
              </div>
            </div>
           
          
           <div className='footer-links'>
             <div className='footer-items'>
                 <div className='footer-item'><p className='footer-item-text'>About</p></div>
                 <div className='footer-item'><p className='footer-item-text'>Careers</p></div>
                 <div className='footer-item'><p className='footer-item-text'>Events</p></div>
                 <div className='footer-item'><p className='footer-item-text'>Products</p></div>
                 <div className='footer-item'><p className='footer-item-text'>Support</p></div>
             </div>


             <h1 className='footer-rights'>© 2021 loopstudios. All rights reserved.</h1>
           </div>
         </section>
        )}

       </div>  
    </>
  )
}

export default App
