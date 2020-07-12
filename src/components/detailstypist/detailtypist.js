import React from 'react';
import './detailtypist.css';
import { useDencrypt } from 'use-dencrypt-effect';

const DetailTypist = ({ showInfo, box }) => {
  const values = [
    `Object: ${capitalizeFirstLetter(showInfo.gender)} human`,
    `Origin: ${capitalizeFirstLetter(showInfo.race)}`,
    `Age: ${showInfo.age1}-${showInfo.age2} years old`,
  ];

  const DecrInfoTyper = () => {
    const { result, dencrypt } = useDencrypt();

    React.useEffect(() => {
      let i = 0;

      const action = setInterval(() => {
        dencrypt(values[i]);

        i = i === values.length - 1 ? 0 : i + 1;
      }, 4000);

      return () => clearInterval(action);
    }, []);

    return (
      <div>
        <p className="p-text">{result}</p>
      </div>
    );
  };

  return (
    <div
      className="info-container"
      style={{
        top: box.infoBoxTop,
        left: box.infoBoxLeft,
      }}
    >
      <DecrInfoTyper values={values} />
    </div>
  );
};

export default DetailTypist;

const capitalizeFirstLetter = (string) => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};
