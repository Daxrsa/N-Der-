import Axios from 'axios';
import React from 'react';
import { Image } from 'cloudinary-react';

export default function ImagePage() {

    const [imageSelected, setImageSelected] = React.useState();
    
    const uploadImage = () => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "NDereAPI");

        Axios.post("https://api.cloudinary.com/v1_1/dv5de3meg/image/upload", formData)
        .then((response) => {
            console.log(response);
        })
    };

    return (
        <>  
            <div className="container">
                <h2>Image</h2>
                <input type="file" onChange={(event) => {
                        if (event.target.files) {
                            setImageSelected(event.target.files[0]);
                        }
                    }}/>
                <button onClick={uploadImage}>Upload Images</button>
            </div>
        </>
    )
}