
import { useState, useEffect } from 'react';
import styles from './BookingForm.module.css';

import Link from 'next/link';


const BookingForm = ({ selectedSeats, onSubmit }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [selectedSeatNumbers, setSelectedSeatNumbers] = useState('');
  useEffect(() => {
    setSelectedSeatNumbers(selectedSeats.join(', '));
  }, [selectedSeats]);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ employeeId, employeeName, emailAddress, seats: selectedSeats });
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.formTitle}>Booking Details</h2>
      <div className={styles.formGroup}>
        <label htmlFor="employeeId">Employee ID</label>
        <input
          type="text"
          id="employeeId"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          required
          placeholder="Enter your employee ID"
          className={styles.formInput}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="employeeName">Employee Name</label>
        <input
          type="text"
          id="employeeName"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          required
          placeholder="Enter your name"
          className={styles.formInput}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="emailAddress">Email Address</label>
        <input
          type="email"
          id="emailAddress"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          required
          placeholder="Enter your email address"
          className={styles.formInput}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="selectedSeats">Selected Seats</label>
        <input
          type="text"
          id="selectedSeats"
          value={selectedSeatNumbers}
          readOnly
          className={styles.formInput}
        />
      </div>
      <button type="submit" className={styles.submitButton}><Link href="/Invitee">Submit Booking</Link></button>
    </form>
  );
};
export default BookingForm;

