import React from 'react';
import './FaceRecognition.css';
import 'react-typist/dist/Typist.css';

const FaceRecognition = ({ box, imageUrl }) => {
  return (
    <div className="center mt0">
      <div className="absolute mt2 pa4" id="fr-el">
        <img id="image" alt="" src={imageUrl} width="500px" height="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};
export default FaceRecognition;