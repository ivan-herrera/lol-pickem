import useMatch from '../hooks/useMatch'
import Match from './Match'
import dayjs from 'dayjs'
import 'dayjs/locale/es' // carga bajo demanda

dayjs.locale('es')

const MatchList = () => {

    const matchs = useMatch()
    console.log(matchs)

    const matchsDictionary = {}

    // Crea un diccionario donde la llave sea la fecha y
    // el valor un array vavció para guardar los partidos.
    for (let i = 0; i < matchs.length; ++i)
        matchsDictionary[matchs[i].date_match] = []

    // Ya que tenemos el diccinario, con las fechas,
    // iteramos nuevamente para guardar cada partido 
    // en el diccionario y agruparlo con los otros partidos en
    // la misma fecha.
    for (let i = 0; i < matchs.length; ++i) {
        let match = matchs[i];
        matchsDictionary[match.date_match].push(match)
    }

    return (
        <div>
            <h1 className='font-bold text-4xl my-2'>Match List</h1>
            <div>
            {
                Object.keys(matchsDictionary).map((match_date) => (
                    <div key={match_date}>
                        <h3 className='font-bold text-2xl capitalize'>{dayjs(match_date).format('dddd - D MMMM YYYY')}</h3>
                        {matchsDictionary[match_date].map((m) => (
                            <Match key={m.id} matchDetails={m} />
                        ))}
                    </div>
                ))
            }
            </div>
        </div>
    )

}

export default MatchList