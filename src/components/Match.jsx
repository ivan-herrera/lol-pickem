import React from 'react'

function Match({ matchDetails }) {

    // estilos condicionales
    const redWinner = matchDetails.red_win ? 'font-bold text-amber-300' : ''
    const blueWinner = matchDetails.blue_win ? 'font-bold text-amber-300' : ''

    const blueSide = () => {
        if(matchDetails.blue_win === matchDetails.red_win) {
            return 'No jugado'
        } else if (matchDetails.blue_win === true) {
            return 'Win'
        } else {
            return 'Lost'
        }
    }

    const redSide = () => {
        if(matchDetails.blue_win === matchDetails.red_win) {
            return 'No jugado'
        } else if (matchDetails.red_win === true) {
            return 'Win'
        } else {
            return 'Lost'
        }
    }

    return (
        <div className='border-2 px-2 py-2 mx-2 my-2'>
            <div className='grid gap-2 grid-cols-3 auto-cols-max'>

                <div className="flex items-center">
                    <img src={matchDetails.team1.team_icon} className='mr-2 w-20 h-20'/>
                    <div className='flex flex-col'>
                        <strong className={blueWinner}>{matchDetails.team1.team_name.toUpperCase()}</strong>
                        <span className={blueWinner}>{blueSide()}</span>
                    </div>
                </div>

                <div className='flex items-center place-content-center'>
                    <span className='font-bold text-2xl'>{matchDetails.blue_win ? 1 : 0}-{matchDetails.red_win ? 1 : 0}</span>
                </div>

                <div className="flex items-center">
                    <div className='flex flex-col'>
                        <strong className={redWinner}>{matchDetails.team2.team_name.toUpperCase()}</strong>
                        <span className={redWinner}>{redSide()}</span>
                    </div>
                    <img src={matchDetails.team2.team_icon} className='ml-2 w-20 h-20' />
                </div>

                
            </div>
        </div>
    )
}

export default Match