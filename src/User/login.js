import React, {useContext, useState} from 'react'
import { useResource } from 'react-request-hook';
import { StateContext } from '../contexts';
import { useEffect} from 'react';


export default function Login(){
	const {dispatch} = useContext(StateContext)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [failed, setFailed] = useState(false)

    function userNameHandler (evt) { 
		setUsername(evt.target.value) 
	} 
    
	function passwordHandler (evt) { 
		setPassword(evt.target.value) 
	}

    const [ user, login ] = useResource((username, password) => ({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
        method: 'get'
    }))

    useEffect(() => {
        if (user && user.data) {
        console.log(user)
            if (user.data.length > 0) {
                            setFailed(false)
                            dispatch({type: 'LOGIN', username: user.data[0].username })
            } else {
                            setFailed(true)
            }
        } 
    }, [user])

	return (
		<form onSubmit ={event => {event.preventDefault(); login(username, password);} }>
		    <div> <h3> Login </h3> </div>
		    <div>
			<label htmlFor="login-username">Username:</label>
			</div>
			<input type="text" value ={username} onChange ={userNameHandler} name="login-username" id="login-username" />
			<div>
			<label htmlFor="login-password">Password:</label>
			</div>
			<input type="password" value={password} onChange={passwordHandler} name="login-password" id="login-password" />
			{failed && <p style={{ color: 'red' }}>Invalid username or password</p>}
			<div>
			<input type="submit" value="Login" />
			</div>
		</form>
	)
}