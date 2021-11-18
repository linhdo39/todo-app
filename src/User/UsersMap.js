import React, { useContext } from 'react'
import { IndividualUser } from './IndividualUser';

import { StateContext } from '../Contexts'

export default function UsersMap () {   
    const {state} = useContext(StateContext)
    const {users} = state;  
    return users.map((p,i) => <IndividualUser {...p} id={p.id}
                                            username= {p.username}
                                            key ={i}/>)

}
