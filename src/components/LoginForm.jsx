import { FaDiscord } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { signInWithDiscord, signInWithEmail } from '../services/auth'

const initialState = {
    email: '',
    password: ''
}

function LoginForm() {
    
    const { formValues, handleInputChange } = useForm(initialState)
    const { email, password } = formValues
	const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
		try {
			await signInWithEmail(formValues)
			navigate("/")
		} catch (error) {
			console.log(error)
		}
    }

	const handleSubmitWithDiscord = async (e) => {
		e.preventDefault()
		try {
			await signInWithDiscord()
			navigate("/")
		} catch (error) {
			console.log(error);
		}
    }

    return (
        <div>
            <h1 className='font-bold text-4xl mb-4 underline decoration-sky-500'>Login</h1>
			
			<form onSubmit={handleSubmit}>
				<label htmlFor='email' className='pr-2'>Email</label>
				<input 
					type="email" 
					name="email" 
					placeholder='youremail@emial.com'
					className='text-black px-2 py-2 border-solid border-2 border-sky-500 '
					value={email}
                    onChange={handleInputChange}
				/>

				<label htmlFor='password' className='pr-2'>Password</label>
				<input 
					type="password"
					name="password"
					id="password"
					className='text-black px-2 py-2 border-solid border-2 border-sky-500 '
					placeholder='*********'
                    value={password}
					onChange={handleInputChange}
				/>

				<button className="bg-green-600 px-2 py-2 ">Login</button>
                <button className="bg-indigo-500 px-2 py-2 flex items-center"
					onClick={handleSubmitWithDiscord}><FaDiscord className='mr-1'/> Login with Discord</button>
			</form>
        </div>
    )
}

export default LoginForm