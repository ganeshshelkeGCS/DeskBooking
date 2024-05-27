import styles from "./Login.module.css";
import Link from 'next/link';

const Login = () => {
    
    return(
        <>       
        <div className={styles.wrapper}>
            <div className={styles.formbox}>
                <h1 className={styles.title1}> Sign In </h1> <br />
                <p className={styles.title2}>Enter your <b>Wolters Kluwer</b> email & password</p>
                <form>
                    <div className={styles.inputbox}>
                        <label for="email"> Email: </label> <br />
                        <input className={styles.inputtag} type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.inputbox}>
                        <label for="pwd"> Password: </label> <br />
                        <input className={styles.inputtag} type="password" id="pwd" name="pwd" maxlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                    </div>
                    <Link href="/Location"> <button type="submit" className={styles.btn}> LOGIN </button></Link>
                    
                    <div className={styles.rememberforgot}>
                            <label> <input type="checkbox" /> Remember me </label>
                            <a href="#">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default Login;