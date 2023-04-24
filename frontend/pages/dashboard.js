import React from 'react';
import SearchBox from '../pages/components/SearchBox';
import SearchFilter from '../pages/components/SearchFilter';
import CartButton from '../pages/components/CartButton';
import ProfileButton from '../pages/components/ProfileButton';
import MedicineImage from '../pages/components/MedicineImage';

const DashboardPage = () => {
  return (
    <div>
      <header>
        <div className="top-bar">
          <SearchBox />
          <div className="top-bar-right">
            <SearchFilter />
            <CartButton />
            <ProfileButton />
          </div>
        </div>
      </header>
      <main>
        <div className="medicine-container">
          {/* Render Medicine Images */}
          <MedicineImage imageUrl="medicine1.jpg" />
          <MedicineImage imageUrl="medicine2.jpg" />
          <MedicineImage imageUrl="medicine3.jpg" />
          {/* Add more medicine images as needed */}
        </div>
      </main>
      <style jsx>{`
        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f8f8f8;
          padding: 16px;
        }
        .top-bar-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .medicine-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
          padding: 16px;
        }
      `}</style>
    </div>
  );
};

export default DashboardPage;
