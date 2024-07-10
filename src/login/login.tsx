// import { SubmitHandler, useForm } from 'react-hook-form'
import Course from '../components/Course'
import Footer from '../components/footer'
import './login.css'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast,ToastContainer } from 'react-toastify'
// import { } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

interface ILogin {
    Email: string
    Password: string
}

const Login = () => {
    const[count, setCount]=useState(0);
    const handleCountIncrement=()=>{
        setCount(count + 1)
    }

    // const handleCountDecrement=()=>{
    //     setCount(count - 1)
    // }

    // const navigate = useNavigate();
    const [open,setOpen] = useState(false)
    
  const [show, setShow] = useState(false)

    const [login, setLogin] = useState<ILogin>({
        Email: '',
        Password:''
      })
     
      useEffect(() => {
        setTimeout(() => setShow(true), 2500);
      }, []);

      const handleLoginChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setLogin((prevData) => ({...prevData,[name]:value}))
     }

    
    const onSubmit = async (e:FormEvent) => {
        e.preventDefault()

        try{
          const response = await axios.post('https://fakestoreapi.com/products',login)
          console.log("The response",response.data.id)
          
          localStorage.setItem('userId',response.data.id)

          toast.success("User logged in successfully",{
            //   onClose:()=>navigate("/")
             })
            handleCountIncrement(); 
        }catch(error){
            console.log('Problem in fetching data' + error)
            toast.error('Login failed, invalid email or password')
        }
      
         
     }

    return (
        <>
        
        <div className='darkener'>
            <Course/>
            <Footer/>
        </div>   
        
        { show &&<div 
        //   className='form-div'
        className={open ? 'not-open' : 'form-div'}
          >
            <div className='second-dark'> </div>
            <div className='form-cont'>
            <div className='inner-form'>
                <div className='text-div'>
                <h3>How Long Can You Survive in Space Without a Suit?</h3>
                <p>If you want answers to interesting questions like this every single week, join the Space Questions newsletter today.</p>
                </div>
            <form 
             onSubmit={onSubmit}
            >
               <div className='input-box'>
                <input required
                  className='form-input'
                  type="email" 
                  name='Email'
                  placeholder='Enter your email' 
                  value={login.Email} 
                   onChange={handleLoginChange}
                  />
                <button type='submit' 
                // onClick={handleCountIncrement}
                >Suscribe</button>
               </div>
          </form>       
            </div>
            <div className='close'>
            <button
            onClick={() => { setOpen(!open) }} 
            >Close
            </button> 
            <ToastContainer/>
            </div>
           
          </div>
          </div>}
        </>
    )
}

export default Login