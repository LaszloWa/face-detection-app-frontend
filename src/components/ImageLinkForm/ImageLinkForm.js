import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({ onInputChange, onPictureSubmit, isDarkMode }) => {
    const clearText = () => {
        onPictureSubmit();
        document.getElementById('imageURL').value='';
    }
    let isTextColor = '';
    let backgroundColor = '';
    let formPattern = '';
    let borderColor = '';
    let inputTextColor = '';
    let buttonColor = '';
    if (isDarkMode === 'darkMode') {
        isTextColor = 'dark-green';
        backgroundColor = 'bg-black-50';
        formPattern = 'form-darkMode';
        borderColor= 'b--black-50';
        inputTextColor = 'dark-green';
        buttonColor = 'button-darkMode'
    } else {
        isTextColor = 'white';
        backgroundColor = 'bg-white';
        formPattern = 'form-lightMode';
        borderColor = 'b--white';
        inputTextColor = 'black';
        buttonColor = 'bg-light-purple';
    }
    return (
        <div>
            <p className={`f3 w-70 center ${isTextColor}`}>
                {'This Face Detection App will detect faces in your pictures. Give it a try by submitting a URL of an image containing a face in the field below.'}
            </p>
            <div className='center'>
                <div className={`${formPattern} center pa4 br3 shadow-5 center`}>
                    <input id='imageURL' className={`f4 pa2 w-70 center ${backgroundColor} ${borderColor} ${inputTextColor}`} type='text' onChange={onInputChange} />
                    <button className={`w-30 grow f4 link ph3 pv2 dib ${isTextColor} ${borderColor} ${buttonColor}`} onClick={clearText}>Detect</button> 
                </div>
                
            </div>
        </div>
    )

}

export default ImageLinkForm;