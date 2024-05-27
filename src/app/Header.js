import styles from "./Header.module.css";

export default function Header() {
    return (
        
        <div className={styles.navbar}>
            <div>
                <img src="https://cdn.wolterskluwer.io/wk/fundamentals/2.x.x/logo/assets/medium.svg" alt="Wolters Kluwer Logo" />
            </div>
            <div className={styles.logo}>
                <img src="https://cdn.wolterskluwer.io/wk/fundamentals/2.x.x/icons/assets/open/0100-application/menu.svg" alt="Menu Icon"/>
            </div>
        </div>
    );
}