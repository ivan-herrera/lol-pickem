import { supabase } from '../api/supabase-config'
import useForm from '../hooks/useForm'
import { signUpWithEmail, updateProfile } from '../services/auth'

const initialState = {
	username: '',
    fullName: '',
    email: '',
    password: '',
	avatar_url: ''
}

function SignUpForm() {
    
    const { formValues, handleInputChange } = useForm(initialState)
    const { username, fullName, email, password, avatar_url } = formValues

    const handleSubmit = async (e) => {
        e.preventDefault()
		const { username, fullName, email, password, avatar_url } = formValues
		const result = await signUpWithEmail({ email, password })
		if (result) {
			const user = supabase.auth.user()
			const data = {
				id: user.id,
				username: username,
				avatar_url: avatar_url,
				full_name: fullName
			}

			await updateProfile(data)
		}
		console.log(result)
    }

    return (
        <div>
            <h1 className='font-bold text-4xl mb-4 underline decoration-sky-500'>Sign Up</h1>
			
			<form onSubmit={handleSubmit}>
				<label htmlFor='username' className='pr-2'>Username</label>
				<input 
					type="text" 
					name="username" 
					placeholder='username'
					className='text-black px-2 py-2'
                    value={username}
					onChange={handleInputChange}
				/>

                <label htmlFor='fullname' className='pr-2'>Fullname</label>
				<input 
					type="text" 
					name="fullName" 
					placeholder='Full name'
					className='text-black px-2 py-2'
                    value={fullName}
					onChange={handleInputChange}
				/>

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

				<label htmlFor='avatar_url' className='pr-2'>Url de perfil</label>
				<input 
					type="text" 
					name="avatar_url" 
					placeholder='https://img.com/my_avatar'
					className='text-black px-2 py-2'
                    value={avatar_url}
					onChange={handleInputChange}
				/>

				<button type="submit">Sign Up</button>
			</form>
        </div>
    )
}

export default SignUpForm