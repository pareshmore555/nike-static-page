import React from 'react'
import "../src/App.css"
const App = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='logo'>
          <img src="/images/brand_logo.png" alt="" height={42.75} width={76} />
        </div>
        <ul className='ulnav'>
          <li href="#">
            Menu
          </li>
          <li href="#">
            Location
          </li>
          <li href="#">
            Contact
          </li>
          <li href="#">
            About
          </li>
        </ul>
        <button className='loginbutton'>
          LogIn
        </button>
      </nav>
      <div className='centerdiv'>
        <div className='centercard'>
          <h1 className='headtext'>
            YOUR FEET DESERVE THE BEST
          </h1>

          <p className='subheadline'>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          </p>
          <div className='shopnowbutton'>
            <button className='shopbutton'>ShopNow</button>
            <button className='catogerybutton'>Category</button>


          </div>
          <p>Also Available On</p>
          <div className='icons'>
            <img src="/images/flipcart.png" alt="" height={32} width={32} />
            <img src="/images/amazon.png" alt="" height={32} width={32} />
          </div>

        </div>
        <img src="/images/shoe_image.png" alt="" width={530} height={487.06} />

      </div>

    </div>
  )
}

export default App

