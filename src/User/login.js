import React from 'react'

export default function Login(){
	return (
		<form onSubmit = {e => e.preventDefault()}>
		    <div> <h3> Login </h3> </div>
		    <div>
			<label htmlFor="login-username">Username:</label>
			</div>
			<input type="text" name="login-username" id="login-username" />
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