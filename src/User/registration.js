import React, {useState} from 'react'

export default function Registration({dispatchUser}) {
	const [formData, setFormData] = useState({
        username: "",
        password: "",
        passwordRepeat: ""
    })
     return (
          <form onSubmit={e => {e.preventDefault(); dispatchUser({type:"REGISTRATION", username:formData.username}); }}>
              <label htmlFor="sign-up-username">Username:</label>
              <input type="text" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})}  name="sign-up-username" id="sign-up-username" />

              <label htmlFor="sign-up-password">Password:</label>
              <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} name="sign-up-password" id="sign-up-password" />

              <label htmlFor="password-repeat">Repeat password:</label>
              <input type="password" value={formData.passwordRepeat} onChange={e => setFormData({...formData, passwordRepeat: e.target.value})}  name="password-repeat" id="password-repeat" />

              <input type="submit" value="Register" disabled={formData.username.length === 0 || formData.password.length === 0 || formData.password !== formData.passwordRepeat}  />
          </form>
      )
}
