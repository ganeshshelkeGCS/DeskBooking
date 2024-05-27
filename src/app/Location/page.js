import React from 'react'
import styles from './Location.module.css';
import Link from 'next/link';
import Header from "../Header";

export default function Location() {
  return (
    <>
    <Header />

    <div className={styles.container}>
        <div className={styles.containerLeft}>
            <div>
                <label className={styles.containerLabel} for="city"> Select your city </label> <br />
                <select className={styles.containerselect} id="city" name="city" required>
                    <option value="" disabled selected>Location</option>
                    <option value="pune">Pune</option>
                </select>
            </div>
            <div>
                <label className={styles.containerLabel} for="floor"> Select your floor </label> <br />
                <select className={styles.containerselect} id="floor" name="floor" required>
                    <option value="" disabled selected>Floor</option>
                    <option value="3rd floor">3rd Floor</option>
                </select>
            </div>
        </div>
        <div className={styles.containerRight}>
            <div>
                <label className={styles.containerLabel} for="office"> Select your office </label> <br />
                <select className={styles.containerselect} id="office" name="office" required>
                    <option value="" disabled selected>Office</option>
                    <option value="kalyaninagar">KalyaniNagar</option>
                </select>
            </div>
            <div className={styles.containerRightDown}>
                <div className={styles.containerLeft}>
                    <p className={styles.containerLabel}>Select the type </p>
                    <button className={styles.btn} type="submit"> Individual </button> <br />
                    <button className={styles.btn} type="submit"> Team </button>
                </div>
                <div className={styles.containerRight}>
                    <label className={styles.containerLabel} for="seat"> Select the number of SEAT's </label> <br />
                    <select className={styles.containerseat} id="seat" name="seat" required>
                        <option value="" disabled selected>0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
            </div>
        </div>
    </div>

    <div className={styles.buttons}>
        <button type="submit"><Link href="/DateSelection">Get Started</Link></button>
        <button type="submit"><Link href="/">CANCEL</Link></button>
    </div>
</>
  )
}
