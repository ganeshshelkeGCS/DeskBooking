
"use client";
import React from 'react';
import { useState } from 'react';
import styles from './SeatSelection.module.css';
import BookingForm from './BookingForm';
import pageStyles from './Seats.module.css';
import Header from '../Header';

const SeatSelectionFun = ({ onSeatsSelected }) => {
    const totalSeats = 200;
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [imageScale, setImageScale] = useState(1); // New state for image scale
    const handleCheckboxChange = (seatNumber) => {
      setSelectedSeats((prevSelectedSeats) => {
        if (prevSelectedSeats.includes(seatNumber)) {
          return prevSelectedSeats.filter((seat) => seat !== seatNumber);
        } else {
          return [...prevSelectedSeats, seatNumber];
        }
      });
    };
    const handleBookSeats = () => {
      onSeatsSelected(selectedSeats);
    };
    const handleZoomIn = () => {
      setImageScale((prevScale) => prevScale + 0.1); // Increase image scale by 0.1
    };
    const handleZoomOut = () => {
      setImageScale((prevScale) => (prevScale > 1 ? prevScale - 0.1 : 1)); // Decrease image scale by 0.1, but not below 1
    };
    return (
      <>
      <div className={styles.container}>
        <div className={styles.floorMap}>
          <div className={styles.imageContainer}>
            <img
              src="https://wolterskluwer-my.sharepoint.com/:i:/r/personal/amrut_muzumdar_wolterskluwer_com/Documents/WK3F%20-%20Numbered.png?csf=1&web=1&e=yXEbPf"
              alt="Floor Map" height="500" width="500"
              style={{ transform: `scale(${imageScale})` }}
            />
           
          </div>
          <div className={styles.zoomControls}>
              <button onClick={handleZoomIn}>+</button>
              <button onClick={handleZoomOut}>-</button>
            </div>
        </div>
        <div className={styles.SeatSelection}>
          <div className={styles.seats}>
            {Array.from({ length: totalSeats }, (_, index) => (
              <div key={index} className={styles.seat}>
                <input
                  type="checkbox"
                  id={`seat-${index + 1}`}
                  value={index + 1}
                  onChange={() => handleCheckboxChange(index + 1)}
                />
                <label htmlFor={`seat-${index + 1}`}>F3-{index + 1}</label>
              </div>
            ))}
          </div>
          <button onClick={handleBookSeats} className={styles.bookSeatsButton}>Book Seats</button>
        </div>
      </div>
      </>
    );
  };


export default function SeatSelection() {
  
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const handleSeatsSelected = (seats) => {
      setSelectedSeats(seats);
      setIsFormVisible(true);
    };
    const handleFormSubmit = (bookingData) => {
      console.log('Booking Data:', bookingData);
      // Here you can add logic to store booking data
      // For example, making an API call to your backend server
      setIsFormVisible(false);
      setSelectedSeats([]);
    };
    return (
      <>
      <Header />
      <div>
        <main className={pageStyles.main}>
          <h1 className={pageStyles.title}>Select Seat</h1>
          <SeatSelectionFun onSeatsSelected={handleSeatsSelected} />
          {isFormVisible && (
            <BookingForm selectedSeats={selectedSeats} onSubmit={handleFormSubmit} />
          )}
        </main>
      </div>
      </>
  );
}
