import React from 'react';

const Rank = ({name, entries, isDarkMode}) => {
    let isTextColor = '';
        if (isDarkMode === 'darkMode') {
            isTextColor = 'dark-green'
        } else {
            isTextColor = 'white';
        }
    return (
        <div>
            <div className={`${isTextColor} f3 w-70 center`}>
                {`${name}, your current entry count is...`}
            </div>
            <div className={`${isTextColor} f1 w-70 center`}>
                {entries}
            </div>
        </div>
    )

}

export default Rank;