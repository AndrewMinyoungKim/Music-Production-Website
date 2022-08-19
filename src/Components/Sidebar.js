import React, { useState, useEffect } from 'react';
import styles from "./Sidebar.module.css";
import './styles.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Sidebar = ({pageName, callback}) => {
    const [page, setPage] = useState(pageName);

    const ChaptersUpdate = () => {

        if(page === 'home') {
            return(<>
                <Link to="/about">Home</Link>
                <li>Home again</li>
                <li>Once more</li>
            </>)
        }
        else if(page === 'about') {
            return(<>
                <li>About Us</li>
                <li>Inspirations</li>
                <li>The Future</li>
            </>)
        }
        if(page === 'equipment') {
            return(<>
                <HashLink smooth to='/equipment#cpu'>Computer Equipment</HashLink>
                <HashLink smooth to='/equipment#prod'>Music Production Equipment</HashLink>
                <HashLink smooth to='/equipment#music'>Additional Music Equipment</HashLink>
            </>)
        }
        else if(page === 'ableton') {
            return(<>
                <HashLink smooth to="/ableton#intro">DAW</HashLink>
                <Link to="/ableton">Interface</Link>
                <Link to="/ableton">VST</Link>
            </>)
        }
    }

    useEffect(() => {
        setPage(pageName);
    }, [pageName]);

  return (<>
    <div className={`side_container ${styles.chapter_container}`}>
        <ul className={styles.chapter}>
            {ChaptersUpdate()}
        </ul>
    </div>
  </>)
}

export default Sidebar;