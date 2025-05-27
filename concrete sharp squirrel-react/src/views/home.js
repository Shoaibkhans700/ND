import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Concrete Sharp Squirrel</title>
        <meta property="og:title" content="Concrete Sharp Squirrel" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text10">Page Four Description</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text11">Main Action</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text12">#gallery</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text13">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text14">#home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text15">Contact</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text16">Gallery</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text17">#contact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text18">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text19">Page Two Description</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text20">#about</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text21">About Us</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">Page Three Description</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text23">Secondary Action</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text24">Learn More</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text25">Shop Now</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text26">Nida Fatima</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text27">
              Explore a wide selection of original artwork created by talented
              artists from around the world. Find the perfect piece to enhance
              your space and express your individuality.
            </span>
          </Fragment>
        }
        image1Src="/6174854686411179109-1500w.jpg"
        image2Src="/6174854686411179116-1500w.jpg"
        image3Src="/6174854686411179112-1500w.jpg"
        image7Src="/6174854686411179114-1500w.jpg"
        image8Src="/6174854686411179117-1500w.jpg"
        image9Src="/6174854686411179108-1500w.jpg"
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text28">
              Discover unique and original artworks
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text29">Explore Diverse Art Styles</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text30">Support independent artists</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text31">Beautiful Art Collection</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text32">
              Browse our curated selection of art pieces
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text33">Empower Artists</span>
          </Fragment>
        }
        feature1ImgSrc="/6174854686411179110-1400w.jpg"
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text34">Discover Unique Art Pieces</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text35">
              Explore our collection of handcrafted art pieces from talented
              artists around the world.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text36">Shop Now</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text37">
              Enjoy fast and reliable shipping for your art pieces.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text38">
              Discover one-of-a-kind artwork created by talented artists.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text39">Secure Purchases</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text40">Unique Artwork</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text41">
              Shop with confidence knowing that your purchases are secure.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text42">Fast Shipping</span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text43">
              Explore our wide selection of unique and captivating artwork
              created by talented artists.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text44">
              Enjoy a seamless and secure checkout process to complete your art
              purchase.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text45">Select Favorites</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text46">
              Choose your favorite pieces from our collection and add them to
              your cart for purchase.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text47">Browse Artwork</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text48">Secure Checkout</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text49">
              Sit back and relax as we ensure prompt delivery of your chosen
              artwork to your doorstep.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text50">Fast Shipping</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text51">Interior Designer</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text52">Art Enthusiast</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text53">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text54">David Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text55">
              The art pieces available on this website are so unique and
              versatile. They add a special touch to every space I design for my
              clients.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text56">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text57">First-time Buyer</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text58">Emily Brown</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text59">
              I have purchased multiple pieces from this website and each one
              has exceeded my expectations. The quality of the art is
              exceptional and the customer service is top-notch.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text60">Art Collector</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text61">
              Absolutely love the art I bought from here! Will definitely be
              coming back for more.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text62">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text63">
              I have been collecting art for years, and I must say that the
              collection offered here is truly impressive. The variety and
              quality are unmatched.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text64">
              As someone new to buying art, I was a bit hesitant at first. But
              after receiving my first piece, I was blown away by the beauty and
              craftsmanship. Highly recommend!
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text65">
              Have a question or need assistance? Feel free to reach out to us.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text66">Follow on Instagram- nidaft_art</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text67">Contact Us</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text68">
              For any inquiries or support needs, contact our customer support
              team.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text69">Art Gallery Headquarters</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text70">Customer Support Center</span>
          </Fragment>
        }
        location1ImageSrc="/6174854686411179127-1400w.jpg"
        location2ImageSrc="/6174854686411179128-1400w.jpg"
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text71">Privacy Policy</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text72">FAQs</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text73">About Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text74">Terms and Conditions</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text75">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text76">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text77">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text78">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
