import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
    const clearText = () => {
        onPictureSubmit();
        document.getElementById('imageURL').value='';
    }
    return (
        <div>
            <p className='f3 w-70 center white'>
                {'This Face Detection App will detect faces in your pictures. Give it a try by submitting a URL of an image containing a face in the field below.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5 center'>
                    <input id='imageURL' className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={clearText}>Detect</button> 
                </div>
                
            </div>
        </div>
    )

}

export default ImageLinkForm;