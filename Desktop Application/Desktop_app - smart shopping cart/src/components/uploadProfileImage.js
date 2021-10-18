import React, {useState} from "react"

import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button"; 

import { generateDownload } from "./cropImage";
import {dataUrltoFile} from './dataURLtoFile';
import userService from '../services/user-service';

export default function App() {
	const inputRef = React.useRef();

	const triggerFileSelectPopup = () => inputRef.current.click();

	const [image, setImage] = React.useState(null);
	const [croppedArea, setCroppedArea] = React.useState(null);
	const [crop, setCrop] = React.useState({ x: 0, y: 0 });
	const [zoom, setZoom] = React.useState(1);
    const [error, setErrors] = useState('');


	const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
		setCroppedArea(croppedAreaPixels);
	};

	const onSelectFile = (event) => {
		if (event.target.files && event.target.files.length > 0) {
			const reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]);
			reader.addEventListener("load", () => {
				setImage(reader.result);
			});
		}
	};

	const onDownload = () => {
		generateDownload(image, croppedArea);
	};
    const onUpload = () => {
        if(!image){
            setErrors('Please select an image!')
        }
        else{
            setErrors('')
        
		const converted = dataUrltoFile(image, 'cropped-image.jpeg')
        console.log(converted)  
		userService.uploadImage(converted);
        }
    }

	return (
		<div className='container'>
             <div class='form-group has-error'>
            <p className="control-label ">{error}</p>
        </div>

<div className='container-buttons'>
				<input
					type='file'
					accept='image/*'
					ref={inputRef}
					onChange={onSelectFile}
					style={{ display: "none" }}
					name = 'cropped-image'
				/>
				<Button
					variant='contained'
					color='primary'
					onClick={triggerFileSelectPopup}
					style={{ marginRight: "10px" }}
				>
					Choose
				</Button>
				<Button style={{ marginRight: "10px" }} variant='contained' color='secondary' onClick={onUpload}>
					Upload
				</Button>
                <Button style={{ marginRight: "10px" }} variant='contained' color='red' onClick={()=>setImage(null)}>
					Clear
				</Button>  
			</div > 
            <div className="col-lg-2 col-sm-2">
			<div className='container-cropper'>
				{image ? (   
					<>
                    <div >
                    <div className="follow-avaimg">
						<img src={image} alt/>
                    </div>
                    </div>  
					</> 
				) : null} 
			</div>
            </div>

			
		</div>
	);
}