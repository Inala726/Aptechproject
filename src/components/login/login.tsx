import Course from '../Course'
import Footer from '../footer'
import './login.css'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import '../fonts.css'

interface ILogin {
    Email: string
    Password: string
}

interface LoginProps {
    count: number;
    setCount: (count: number) => void;
}

const Login = ({ count, setCount }: LoginProps) => {
    const handleCountIncrement = () => {
        setCount(count + 1)
    }

    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
    const [login, setLogin] = useState<ILogin>({
        Email: '',
        Password: ''
    })

    useEffect(() => {
        setTimeout(() => setShow(true), 3000);
    }, []);

    const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setLogin((prevData) => ({ ...prevData, [name]: value }))
    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {
            const response = await axios.post('https://fakestoreapi.com/products', login)
            console.log("The response", response.data.id)

            localStorage.setItem('userId', response.data.id)

            toast.success("User logged in successfully")
            handleCountIncrement();
        } catch (error) {
            console.log('Problem in fetching data' + error)
            toast.error('Login failed, invalid email or password')
        }
    }

    return (
        <>
            <div className='darkener'>
                <Course />
                <Footer />
            </div>

            {show && <div className={open ? 'not-open' : 'form-div'}>
                <div className='second-dark'> </div>
                <div className='form-cont lato-regular'>
                    <div className='inner-form'>
                        <div className='text-div'>
                            <h3>How Long Can You Survive in Space Without a Suit?</h3>
                            <p>If you want answers to interesting questions like this every single week, join the Space Questions newsletter today.</p>
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className='input-box'>
                                <input
                                    required
                                    className='form-input'
                                    type="email"
                                    name='Email'
                                    placeholder='Enter your email'
                                    value={login.Email}
                                    onChange={handleLoginChange}
                                />
                                <button type='submit'>Suscribe</button>
                            </div>
                        </form>
                    </div>
                    <div className='close'>
                        <button onClick={() => { setOpen(!open) }}>Close</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Login
