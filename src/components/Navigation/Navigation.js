import React from 'react';


const Navigation = ({ onRouteChange, isSignedIn, onToggleDarkMode, isDarkMode }) => {
    let isTextColor = 'black';
    if (isDarkMode === 'darkMode') {
        isTextColor = 'dark-green'
    } else {
        isTextColor = 'black';
    }
    
    if (isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className={`f3 link dim ${isTextColor} underline pa3 pointer`} onClick={() => onToggleDarkMode()}>{ isDarkMode === 'lightMode' ? 'Dark mode' : 'Light Mode' }</p>
            <p className={`f3 link dim ${isTextColor} underline pa3 pointer`} onClick={() => onRouteChange('signIn')}>Sign Out</p>
            </nav>
        )
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className={`f3 link dim ${isTextColor} underline pa3 pointer`} onClick={() => onToggleDarkMode()}>{ isDarkMode === 'lightMode' ? 'Dark mode' : 'Light Mode' }</p>
                <p className={`f3 link dim ${isTextColor} underline pa3 pointer`} onClick={() => onRouteChange('signIn')}>
                    Sign In
                </p>
                <p className={`f3 link dim ${isTextColor} underline pa3 pointer`} onClick={() => onRouteChange('register')}>
                Register
                </p>
            </nav>
        )
    }
}

export default Navigation;