import React from 'react'

const Profile = () => {
  return (
    <div>
        <h3>Profile</h3>

        {/* <div className='left'> */}
        <div className=' details'>
        
            <div className='left-top'>
            <img src="profile.png" alt="profile pic" />
            <p className='name'> Robin Singh</p>
            <p className='number'>+91 98765 43210</p>
            <div className='tags'>
                <span>UI/UX</span>
                <span>Full-time</span>
                <span>Perks</span>
                <span>Canteen</span>
            </div>
            <a href="./">
                Update Personal Details 
            </a>
        </div>


        <div className='options'>

        <div className='option'>
        <hr />
            
            <h5>Build Resume with a Recruitr</h5>
            <p>Update these details for better chances of selection, These Information can be view by Hiring Teams.</p>
        </div>
        <div className='option'>
            <hr />
            {/* <img src="./plus.png" alt="" /> */}
            <h5>Work Experience</h5>
            <p>Add all your Internships, Work Details...</p>
        </div>
        
        <div className='option'>
        <hr />
            <h5>Qualifications</h5>
            <p>Highlight your Education in the eye of recruiters...</p>
        </div>
        <div className='option'>
        <hr />
            <h5>Highlights, Sports...</h5>
            <p>Show your Highlights & Sports etc to recruiting te...</p>
        </div>
        <div className='option'>
            <hr />
            <h5>Recommendations</h5>
            <p>Provide Recommendations, get Recommendation...</p>
        </div>
        <div className='option'>
        <hr />
            <h5>Upload Video Resume</h5>
            <p>Now share your details in video form to Employer...</p>
        </div>
        <div className='option'>
        <hr />
            <h5>Are you Still Looking for Job/Internship</h5>
            <p>Update your Status for better reach...</p>
        </div>
        <div className='option'>
        <hr />
            <h5>Download Resume</h5>
            <p>All data will be combined in a format, you can dow...</p>
        </div>
        
        </div>
        
        
        </div>



    <div className='entry '>
        <h4>Add Experience</h4>
        <label htmlFor="jobtitle">Job Title</label>
        <label htmlFor="Company Name">Company Name</label>
        <br />
        <input type="text" placeholder='Example: Product manager'/>
        <input type="text" placeholder='Example:Google'/>
        <br />
        
        <label htmlFor="jobtitle">Employment Type</label>
        <label htmlFor="Company Name">Working Status</label>
        <br />
        <select  >
        <option value="volvo">Full Time</option>
        </select>
        <select >
        <option value="volvo">Currently Working</option>
        </select>
        <br />
        <label htmlFor="jobtitle">Work Location</label>
        <label htmlFor="Company Name">Add C.T.C.</label>
        <br />
        <input type="text" placeholder='Example: London-Work from home'/>
        <input type="text" placeholder='#only figure entry in salary'/>
        <br />
        <label htmlFor="jobtitle">Starting Date</label>
        <label htmlFor="Company Name">End Date</label>
        <br />
        <input type="date" placeholder='Example: Product manager'/>
        <input type="date" placeholder='Example:Google'/>
        <br />
        <label htmlFor="jobtitle">Description</label>

        <br />
        <input type="text" placeholder='Description about you...'/>

    

       

    </div> 
    </div>
    
  
  )
}

export default Profile