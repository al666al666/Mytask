
import {React} from 'react' ; 
import {useState} from 'react'  
import {useFormik} from 'formik'
import './MyForm.css'


const MyForm=()=> {

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
      
    },
    onSubmit:values=> {
      
      console.log(values)
    }
  })
 
 
   const [background , setBackground] = useState(false) 

   const myFunction = () => {
     setBackground(!background) 
   }

  return (

    <div className='content' style={background ? {'background':'#093545'}:{'background' :'#E5E5E5'}}> 
  
        <p className='content-head' style={background ? {'color':'#E5E5E5'}:{'color' :'#093545'}}> Sign in </p> 
        <p className='content-title'style={background ? {'color':'#E5E5E5'}:{'color' :'#093545'}}> Sign in and start managing your candidates </p> 

        <form className="content-form" onSubmit={formik.handleSubmit}>
          <div className="content-form_input"> 
            <input type = "text" name = "login" id="login" placeholder="Login" onChange={formik.handleChange}/> 
            <input type = "text" name = "password" id="password" placeholder="Password"onChange={formik.handleChange} /> 
          </div>
            <div className="content-rememberme">
                <div> 
                  <input type="checkbox"/> 
                  <label style={background ? {'color':'#E5E5E5'}:{'color' :'#093545'}} > Remember me</label>
                </div>
                <div className ="content-forgotpassword" style={background ? {'color':'#E5E5E5'}:{'color' :'#093545'}}> Forgot password</div>
              </div>

              <button type="submit" className="form-loginbutton"> Login </button>
        </form>


        <div class="content-wave1 ">
           <div class="content-iconbackground" onClick={myFunction}> 
            <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
      <g filter="url(#filter0_d_3_56)">
        <circle cx="39" cy="35" r="35" fill="white"/>
      </g>
      <circle cx="39.5" cy="34.5" r="21.5" fill="#2D2D2D"/>
      <path d="M56 34.5C56 43.6127 48.3889 51 39 51C39 44.4 39 43.6127 39 34.5C39 25.3873 39 24.9667 39 18C48.3889 18 56 25.3873 56 34.5Z" fill="white"/>
      <defs>
        <filter id="filter0_d_3_56" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_56"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_56" result="shape"/>
        </filter>
      </defs>
           </svg>
           </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="111" viewBox="0 0 1280 111" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L53 4.17052C107 8.34104 213 16.6821 320 30.7977C427 45.2341 533 65.7659 640 69.9364C747 74.1069 853 61.5954 960 57.7457C1067 53.5751 1173 57.7457 1227 59.6705L1280 61.5954V111H1227C1173 111 1067 111 960 111C853 111 747 111 640 111C533 111 427 111 320 111C213 111 107 111 53 111H0V0Z" fill="#20DF7F" fill-opacity="0.8"/>
            </svg>
           </div>
           <div class="content-wave2"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="111" viewBox="0 0 1280 111" fill="none">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M0 44.4L42.6667 53.28C85.3333 62.16 170.667 79.92 256 75.48C341.333 71.04 426.667 44.4 512 26.64C597.333 8.88 682.667 0 768 0C853.333 0 938.667 8.88 1024 24.42C1109.33 39.96 1194.67 62.16 1237.33 73.26L1280 84.36V111H1237.33C1194.67 111 1109.33 111 1024 111C938.667 111 853.333 111 768 111C682.667 111 597.333 111 512 111C426.667 111 341.333 111 256 111C170.667 111 85.3333 111 42.6667 111H0V44.4Z" fill="#224957" fill-opacity="0.8"/>
        </svg>
           </div>
    
      
    </div>
  )
}


export default MyForm 