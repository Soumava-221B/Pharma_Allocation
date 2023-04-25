import React from 'react';

const MedicineImage = ({ imageUrl }) => {
  return (
    <div className="medicine-image">
      <img src={imageUrl} alt="Medicine" />
    </div>
  );
};

export default MedicineImage;