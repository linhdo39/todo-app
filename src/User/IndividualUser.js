import React from 'react';
import { useContext } from 'react';
import { ThemeContext} from '../Contexts'
import { Card } from 'react-bootstrap';
import { Link } from 'react-navi';

export function IndividualUser({id, username}){
    const { secondaryColor } = useContext(ThemeContext)
        return (
            <div>console.log({username})</div>
        )
    }
