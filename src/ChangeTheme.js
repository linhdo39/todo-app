import React, { useEffect} from 'react'
import { NavDropdown } from 'react-bootstrap'
import { useResource } from 'react-request-hook'

function ThemeItem ({ theme, active, onClick }) {
    return (
       <span onClick={onClick} style={{ cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold' : 'normal' }}>
           <span style={{ color: theme.primaryColor }}>{theme.name}</span> 
        </span>
    )
 } 

export default function ChangeTheme ({ theme, setTheme }) {

    const [ themes, getThemes ] = useResource(() => ({
        url: '/themes',
        method: 'get'
    }))

    useEffect(getThemes, [])

    const { data, isLoading } = themes
    

    function isActive (t) {     
        return t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor 
    }
    
    return ( <div>
        {isLoading && 'Loading themes...'}

        <NavDropdown title="ChangeTheme" id="basic-nav-dropdown">
            {data && themes.data.map((t, i) =>
                    <NavDropdown.Item>
                    <ThemeItem key={i} theme={t} active={isActive(t)} onClick={() => setTheme(t)} />
                    </NavDropdown.Item>
            )} 
         </NavDropdown>
    </div>
    )
}
