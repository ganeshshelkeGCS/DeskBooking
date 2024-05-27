"use client" // Mark this component as a Client Component

import React, { useState } from 'react';
import styles from "./Invitee.module.css";
import Link from 'next/link';
import Header from '../Header';

export default function Invite () {
    const [selectedEmails, setSelectedEmails] = useState([]);

    const handleEmailSelect = (e) => {
      const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
      const newSelectedEmails = [...new Set([...selectedEmails, ...selectedOptions])];
      setSelectedEmails(newSelectedEmails);
    };
  
    const handleSubmit = () => {
        alert("Seats Booked....");
      console.log('Selected emails:', selectedEmails);
      // You can perform further actions with the selected emails here
    };
  
    return (
      <>
      <Header />
      <div>
        <div className={styles.selectHeader}>
            <h2>Select Invitee</h2>
            <button class="CrossIcon">&times;</button>
        </div>
        <div className={styles.selectContainer}>
          <div>
                <label className={styles.containerLabel} for="invite"> Select Invitee </label> 
                <select className={styles.containerselect} id="invite" name="invite" onChange={handleEmailSelect} required>
                    <option value="" disabled selected>Email</option>
                    <option value="email1@example.com">email1@example.com</option>
                    <option value="email2@example.com">email2@example.com</option>
                    <option value="email3@example.com">email3@example.com</option>
                    <option value="email4@example.com">email4@example.com</option>
                    <option value="email5@example.com">email5@example.com</option>
                </select>
          </div>
        </div>
        <div className={styles.selectedEmails}>
          <ul>
            {selectedEmails.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
        </div>
        <button className={styles.submitBtn} onClick={handleSubmit}><Link href="/">DONE</Link></button>
      </div>
      </>
    );
}
