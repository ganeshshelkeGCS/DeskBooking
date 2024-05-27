import React from 'react'
import styles from "./DateSelection.module.css";
import Header from "../Header";
import Link from 'next/link';

export default function DateSelection() {
  return (
    <>
    <Header />
        <div className={styles.container}>
          <div className={styles.cross}>
            <button className={styles.CrossIcon}><Link href="/">&times;</Link></button>
          </div>
          <div className={styles.calendar}>
            <h2>May 2024</h2>
            <table className={styles.monthtable}>
              <thead>
                <tr>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <button className={styles.buttonSize}>1</button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>2</button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>3</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className={styles.buttonSize}>4</button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>5</button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>6</button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>7</button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>8</button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>9</button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      10
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className={styles.buttonSize}>
                      11
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      12
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      13
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      14
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      15
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      16
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      17
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className={styles.buttonSize}>
                      18
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      19
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      20
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      21
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      22
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      23
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      24
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className={styles.buttonSize}>
                      25
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      26
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      27
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      28
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      29
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      30
                    </button>
                  </td>
                  <td>
                    <button className={styles.buttonSize}>
                      31
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            
          </div>
        </div>
        <div className={styles.buttonNext}>
           <button><Link href="/SeatSelection">Next </Link> </button>
        </div>
        </>
  )
}
