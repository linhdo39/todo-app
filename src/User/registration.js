import React from 'react'

export default function Registration() {
	return (
		<form onSubmit={e => e.preventDefault()}>
		    <div> <h3> Registration </h3> </div>
		    <div>
			    <label htmlFor="sign-up-username">Username:</label>
			    <input type="text" name="sign-up-username" id="sign-up-username" />
			</div>
			    <label htmlFor="sign-up-password">Password:</label>
			    <input type="password" name="sign-up-password" id="sign-up-password" />
			<div>
			    <label htmlFor="sign-up-password-repeat">Repeat password:</label>
			    <input type="password" name="sign-up-password-repeat" id="sign-up-password-repeat" />
			</div>
			<input type="submit" value="Register" />
		</form>
	)
}