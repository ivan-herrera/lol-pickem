import React from 'react'
import MatchPrediction from '../components/MatchPrediction'
import useMatch from '../hooks/useMatch'
import dayjs from 'dayjs'

function Predictions() {

	const matchs = useMatch()

	const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD')

	const matchDay = matchs.filter((date) => date.date_match === tomorrow)

	return (
		<div>
			<h1 className='font-bold text-4xl my-2'>Predictions</h1>
			{matchDay.map((m) => (
				<MatchPrediction key={m.id} matchDetails={m} />
			))}
		</div>
	)
}

export default Predictions