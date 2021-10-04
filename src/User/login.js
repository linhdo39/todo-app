import React, {useState} from 'react'

export default function Login({dispatchUser}){
	const[username, setUsername] = useState('');

	function userNameHandler (event) {
    	    setUsername(event.target.value)
   	}

	return (
		<form onSubmit ={event => {event.preventDefault(); dispatchUser({type:"LOGIN", username})} }>
		    <div> <h3> Login </h3> </div>
		    <div>
			<label htmlFor="login-username">Username:</label>
			</div>
			<input type="text" value ={username} onChange ={userNameHandler} name="login-username" id="login-username" />
			<div>
			<label htmlFor="login-password">Password:</label>
			</div>
			<input type="password" name="login-password" id="login-password" />
			<div>
			<input type="submit" value="Login" />
			</div>
		</form>
	)
}