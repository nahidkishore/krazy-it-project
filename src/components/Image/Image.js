import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import "./image.css";
const Image = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <section >
      <div className="container">
        <h2 className="text-center">Image Gallery section</h2>
        <div className="App">
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <button
                  id="upload"
                  style={isDragging ? { color: "red" } : null}
                  onClick={onImageUpload}
                  {...dragProps}
                  
                >
                  Upload Image
                </button>
                <button id="remove" onClick={onImageRemoveAll}
                
                >
                  Remove all
                </button>

             <div className="d-flex justify-content-center mt-5">
             <div className="row">
                  {imageList.map((image, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12  image-item">
                      <div className="card mb-5">
                        <figure>
                          <img src={image.data_url} alt="" className="img-fluid"/>
                        </figure>
                        <div className="card-body d-flex justify-content-between image-item__btn-wrapper">
                          <button
                            className="btn btn-success"
                            onClick={() => onImageUpdate(index)}
                          >
                            Update
                          </button>
                          <button
                            className="btn btn-danger "
                            onClick={() => onImageRemove(index)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
              </div>
            )}
          </ImageUploading>
        </div>
      </div>
    </section>
  );
};

export default Image;
