import React,{useState}  from 'react'
import ReactDOM from 'react-dom'

export default function Todo({user, title, create_date, description}) {
    const today = Date(Date.now()).toString()
    const [status,setStatus] = useState('')
    function checkboxStatus(evt) {
        setStatus(evt.target.value)
    }

    function completeDate(){
        if(status)
            return Date(Date.now()).toString()
        else
            return ''
    }

    return (
        <div>
            <h3>{title}</h3>
            <p>Create by: {user}</p>
            <p>Description: {description}</p>
            <p> Date: {create_date} </p>
            <p>  <input type='checkbox' onChange={checkboxStatus} /> Complete</p>
            <p> Date Completed: {completeDate()} </p>
        </div>
    )
}