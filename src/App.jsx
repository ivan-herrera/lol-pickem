import './App.css'
import AppRouter from './routers/index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

	return (
		<div className='bg-slate-900 text-white flex'>
			<ToastContainer />
			<AppRouter />
		</div>
	)
}

export default App
