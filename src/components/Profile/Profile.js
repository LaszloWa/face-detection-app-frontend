import React from 'react';

const Profile = ({ user, isDarkMode, onRouteChange }) => {
    let isTextColor = 'black';
    if (isDarkMode === 'darkMode') {
        isTextColor = 'dark-green'
    } else {
        isTextColor = 'black-80';
    }
    return (
        <article className="br3 ba shadow-5 b--black-10 mv4 w-200 w-50-m w-25-l mw6 center">
            <main className={`pa4 ${isTextColor}`}>
                <div className="f3  measure">
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Joined: <br/>{user.joined}</p>
                </div>
                <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Delete user" onClick={'boo'} />
                </div>
                <div className="lh-copy mt3">
                    <p className="f6 link black db pointer grow" onClick={() => onRouteChange('home')}>Back</p>
                </div>
            </main>
        </article>
    )
}

export default Profile;