import React from 'react'
import { logout } from '../services/auth'
import { BiLogIn } from 'react-icons/bi'
import useProfile from '../hooks/useProfile'
import MatchList from './MatchList'

function Welcome() {

    const userProfile = useProfile()

    const handleLogout = async () => {
        await logout()
    }

    return (
        <div>Welcome <br />

            <div>
                {
                    userProfile ? (
                        <div>
                            <h2 className='text-2xl'>{userProfile.username} - {userProfile.id}</h2>
                            <div className='relative flex items-center justify-center w-16 h-16 rounded-full select-none'>
                                <img
                                    src={userProfile.avatar_url}
                                    className="mx-auto object-cover object-center w-full h-full rounded-full"
                                />
                                <span aria-hidden="true" class="absolute bottom-0 left-0 w-3 h-3 bg-green-500 rounded-full ring ring-white "></span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="bg-red-600 px-2 py-2 flex items-center"
                            >
                                <BiLogIn className='mr-1' />
                                Logout
                            </button>
                        </div>
                        ) : "There's not data"
                }
            </div>

            <hr />

            <div>
                <MatchList />
            </div>


        </div>
    )
}

export default Welcome