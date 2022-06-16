import { useEffect, useRef, useState} from 'react'
import  useProfile  from '../hooks/useProfile'
import { getPredictions, savePrediction } from '../services/predictions'
import { BiSave } from 'react-icons/bi'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Prueba from './Prueba'

function MatchPrediction({matchDetails}) {

    const userProfile = useProfile()

    const [prediction, setPrediction] = useState({
        user_ref: '',
        match_ref: '',
        blue_win: false,
        red_win: false
    })
    const [isBlue, setIsBlue] = useState(false)
    const [isRed, setIsRed] = useState(false)
    const [isCheked, setIsCheked] = useState(false)

    const [data, setData] = useState([])

    

    const handleWinnerBlue = () => {
        setIsBlue(true)
        setIsRed(false)
        setPrediction({
            ...prediction,
            user_ref: userProfile.id,
            match_ref: matchDetails.id,
            blue_win: !prediction.blue_win,
            red_win: prediction.blue_win
        })
    }

    const handleWinnerRed = () => {
        setIsRed(true)
        setIsBlue(false)
        setPrediction({
            ...prediction,
            user_ref: userProfile.id,
            match_ref: matchDetails.id,
            blue_win: prediction.red_win,
            red_win: !prediction.red_win
        })
    }
  
    const handleSavePrediction = async (e) => {
        e.preventDefault()
        try {
            // ToDO: Corregir la notificacion en caso de no guardar la info en la BD
            await savePrediction(prediction)
            notify()

            setIsCheked(!isCheked)
        } catch (error) {
            console.error(error)
        }
    }

    const notify = () => {
        toast.promise(savePrediction, {
                pending: 'Guardando...',
                success: "Predicción guardada 👌",
                error: "Ha ocurrido un error 🚫"
            }, {
            toastId: matchDetails.id,
            position: 'top-right',
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 60,
            progress: undefined,
        });
    
    }

    const handlePrueba = () => {
        const {data, error} = getPredictions(userProfile.id)
        setData(data)
        console.log('esto que es?', data)
    }
    
    return (
        <div className='border-2 px-2 py-2 mx-2 my-2'>
            <button onClick={handlePrueba}>Pfjddsf</button>
            <Prueba data={data} />

            <p>{matchDetails.id}</p>
            <div className='grid gap-2 grid-cols-3 auto-cols-max'>

                <div className="flex items-center">
                    <img src={matchDetails.team1.team_icon} className='mr-2 w-20 h-20'/>
                    <div className='flex flex-col'>
                        <strong className=''>{matchDetails.team1.team_name.toUpperCase()}</strong>

                    </div>
                </div>

                <div className='flex items-center place-content-center'>
                    <span className='font-bold text-2xl'>
                        <div className=''>
                            <form onSubmit={handleSavePrediction} className="grid grid-cols-3 justify-items-center auto-cols-max">
                                <div className='flex'>
                                    <input type='checkbox' name='blue' value='blue' checked={isBlue}
                                        onChange={handleWinnerBlue}
                                        disabled={isCheked}
                                        className="w-10 h-10 focus:ring-blue-500 hover:shadow-blue-500 shadow-lg rounded checked:bg-gray-500 checked:hover:bg-gray-700 rounded-full"
                                    />
                                </div>
                                <div className='grid justify-items-center'>
                                    <div>VS</div>
                                    <button 
                                        type='submit' 
                                        className='mt-4 flex items-center px-6 py-2 text-sm font-bold text-green-500 transition-colors duration-300 border-2 border-green-400 rounded-full hover:bg-green-500 hover:text-green-100 disabled:opacity-25 disabled:cursor-not-allowed'
                                        disabled={isCheked}
                                    >
                                        <BiSave className='mr-1' /> Guardar
                                    </button>
                                </div>
                                <div>
                                    <input type='checkbox' name="red" value='red' checked={isRed}
                                        onChange={handleWinnerRed} 
                                        disabled={isCheked}
                                        className="w-10 h-10 focus:ring-blue-500 hover:shadow-red-500 shadow-lg rounded checked:bg-gray-500 checked:hover:bg-gray-700 rounded-full "
                                    />
                                </div>
                                
                            </form>
                        </div>
                    </span>
                </div>

                <div className="flex items-center">
                    <div className='flex flex-col'>
                        <strong className=''>{matchDetails.team2.team_name.toUpperCase()}</strong>

                    </div>
                    <img src={matchDetails.team2.team_icon} className='ml-2 w-20 h-20' />
                </div>
                
                
            </div>
            
        </div>
    )
}

export default MatchPrediction