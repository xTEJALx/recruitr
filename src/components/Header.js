import React from 'react'

const Header = () => {
  return (
    <div className='header' >

        <div className='logo' style={{display: "inline-block"}}>
            Recruitr
        </div>
        {/* <div className='tagline'>
            Your gateway to success!
        </div> */}
        <input type="text" className='search' placeholder='Search Jobs...' />
        
        <button>
            <img src="./fi-rr-apps.png" alt="" />
            <span>Dashboard</span>
        </button>
        <button>
            <img src="./Vector.png" alt="" />
        <span>Find Jobs</span>
        </button>
        <button>
            <img src="./checkmark-circle-2.png" alt="" />
            <span>Applied Jobs</span>
        </button>


        <div className='line'></div>
        <button>
            <img src="./message-circle.png" alt="" />
        </button>
        <button>
            <img src="bell.png" alt="" />
        </button>

        <div className='line'></div>


        <select className='dropdown' name="Robin" id="">
        <option value="name" defaultValue>
        <img src="./profile" alt="" />
        Robin
        </option>
        <option value="free">Free</option>
        
  <option value="bronze">Bronze</option>
  <option value="silver">Silver</option>
  <option value="Gold">Gold</option>
        </select>

        
    
    </div>
  )
}

export default Header