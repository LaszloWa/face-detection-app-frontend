import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';


const Logo = ({ isDarkMode }) => {
    let isGradient = '';
        if (isDarkMode === 'darkMode') {
            isGradient = 'darkMode'
        } else {
            isGradient = 'lightMode';
        }
    return (
        <div className='ma4 mt0'>
            <Tilt className={`Tilt br2 shadow-2 ${isGradient}`} options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> 
                    <img style={{paddingTop: '5px'}} src={brain} alt='brain logo'/>
                </div>
            </Tilt>  
        </div>
    )

}

export default Logo;