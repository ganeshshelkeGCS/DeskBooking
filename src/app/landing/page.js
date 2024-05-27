"use client";

import styles from "./Landing.module.css";
import Header from "../Header";
import Link from 'next/link';

const Landing = () => {
  return (
    <>
  <Header />
    <div className={styles.container}>
      <div className={styles.bookingInfo}>
        <div className={styles.bookingInfoChildone}>
        <p>
          Sun 16 July 2023 at 5:00pm <br />
          Kalyani Nagar - PUNE <br />
          WK 3F <br />
          <button>F3-001</button>
        </p>
        </div>
        <div className={styles.bookingInfoChildtwo}>
        <p>
          Sun 16 July 2023 at 5:00pm <br />
          Kalyani Nagar - PUNE <br />
          WK 3F <br />
          <button>F3-002</button>
        </p>
      </div>
      </div>
      <div className={styles.rightButtons}>
     <Link href="/"><button className={styles.cancelButton}>CANCEL</button></Link>
     <Link href="/Location"><button className={styles.bookButton}>BOOK SEAT</button></Link>
      </div>
    </div>
    </>
  );
};

export default Landing;