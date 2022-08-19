import React from "react";
import styles from "./Ableton.module.css";
import Sidebar from "./Sidebar";
import './styles.css';

function Ableton() {
    return (<>
        <div className={`main_side_layout ${styles.ableton}`}>
            <Sidebar pageName='ableton'/>
            <div className={`main_container ${styles.ableton_container}`}>
                <div className={styles.intro} id='intro'>
                    <img alt='ableton_logo' className={styles.logo_png} src={require('../assets/ableton.jpg')}/>
                    <h1>Ableton</h1>
                </div>
                <div className={styles.view_type}>
                    <img alt='session' className={styles.view_blank_png} src={require('../assets/ableton_session_view_blank.png')}/>
                    <img alt='arrangement' className={styles.view_blank_png} src={require('../assets/ableton_arrangement_view_blank.png')}/>
                </div>
            </div>
        </div>
    </>);
}

export default Ableton;