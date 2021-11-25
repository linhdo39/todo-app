import React, {useContext, useState} from 'react'
import { StateContext } from '../Contexts';
import { useEffect } from 'react';
import { useResource } from 'react-request-hook';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { useNavigation } from 'react-navi'

export default function Register({show, handleClose}) {

    const {dispatch} = useContext(StateContext)
    const [setStatus] = useState("")
  	const navigation = useNavigation()

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        passwordRepeat: ""
    })
    
    const [ user1, login ] = useResource((username, password) => ({
      url: 'auth/login',
      method: 'post',
        data: {username, password}
    }))

    const [ user, register ] = useResource((username, password) => ({
        url: 'auth/register',
        method: 'post',
        data: { username, password, 'passwordConfirmation': password  }
    }))

    useEffect(() => {
        if (user && user.data) {
            dispatch({ type: 'REGISTRATION', username: user.data.username })
        }
      }, [user])

    useEffect(() => {
        if (user && user.isLoading === false && (user.data || user.error)) {
          if (user.error) {
            alert("Registration failed, please try again later.")
          } 
          else {
              alert("Registration succeed, please use your username and password to login.")
              navigation.navigate('/')
          }
        }
    }, [user])

    return (
           <Modal show={show} onHide={handleClose}>
           <Form onSubmit={e => { e.preventDefault(); register(formData.username, formData.password); handleClose(); }}>
             <Modal.Header closeButton>
               <Modal.Title>Register</Modal.Title>
             </Modal.Header>
             <Modal.Body>
               <Form.Label htmlFor="register-username">Username:</Form.Label>
               <Form.Control type="text" value={formData.username} onChange={e => setFormData({ ...formData, username: e.target.value })} name="register-username" id="register-username" />
               <Form.Label htmlFor="register-password">Password:</Form.Label>
               <Form.Control type="password" name="register-password" id="register-password" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} />
               <Form.Label htmlFor="register-password-repeat">Repeat password:</Form.Label>
               <Form.Control type="password" name="register-password-repeat" id="register-password-repeat" value={formData.passwordRepeat} onChange={e => setFormData({ ...formData, passwordRepeat: e.target.value })} />
             </Modal.Body>
             <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>Cancel</Button>
               <Button variant="primary" type="submit" disabled={formData.username.length === 0 || formData.password.length === 0 || formData.password !== formData.passwordRepeat}>Register</Button>
             </Modal.Footer>
           </Form>
         </Modal>
     
    )
}
