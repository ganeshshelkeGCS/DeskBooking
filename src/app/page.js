import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Header";
import Login from "./loginPage/Login";


export default function Home() {
  return (
    <>
   
    <Header />
    <center><h1 className={styles.titleOfProject}>Book-Your-Seat</h1></center>
    <Login />
    </>
  );
}
