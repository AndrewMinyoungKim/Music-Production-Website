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
        else if(page === 'equipment') {
            return(<>
                <h6 className={styles.sidebar_text} onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'});}}>Equipment</h6>
                <HashLink smooth to='/equipment#cpu' className={styles.sidebar_text}>Computer Equipment</HashLink>
                <div>
                    <HashLink smooth to='/equipment#hardware' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Hardware</HashLink>
                    <HashLink smooth to='/equipment#software' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Software</HashLink>
                </div>
                <HashLink smooth to='/equipment#prod' className={`${styles.sidebar_text}`}>Music Production Equipment</HashLink>
                <div>
                    <HashLink smooth to='/equipment#output' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Output</HashLink>
                    <HashLink smooth to='/equipment#input' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Input</HashLink>
                    <HashLink smooth to='/equipment#adapter' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Adapters</HashLink>
                </div>
                <HashLink smooth to='/equipment#music' className={styles.sidebar_text}>Additional Music Equipment</HashLink>
            </>)
        }
        else if(page === 'ableton') {
            return(<>
                <HashLink smooth to="/ableton#intro" className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>DAW</HashLink>
                <HashLink smooth to="/ableton" className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Interface</HashLink>
                <HashLink smooth to="/ableton" className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>VST</HashLink>
            </>)
        }
        else if(page === 'arrangement') {
            return(<>
                <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_text}`}>Sections</HashLink>
                <div>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Intro/Outro</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Verse</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Section Transitions/Silence</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Pre-Chorus</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Chorus</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Post-Chorus</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Transition/Interlude</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Solo/Break</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Bridge</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Faux/Final Chorus</HashLink>
                </div>
                <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_text}`}>Components</HashLink>
                <div>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Drums</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Bass</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>VOX</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>FX</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Instrumentation:</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Synths</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Guitar/Strings</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Brass</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Woodwinds</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Xylopones</HashLink>
                    <HashLink smooth to='/arrangmement#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Anything! Sound Design!</HashLink>
                </div>
            </>)
        }
        else if(page === 'recording') {
            return(<>
                <HashLink smooth to='/recording#' className={styles.sidebar_text}>Audio</HashLink>
                <div>
                    <HashLink smooth to='/recording#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Microphone (XLR)</HashLink>
                    <HashLink smooth to='/recording#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Instrument (1/4 inch)</HashLink>
                </div>
                <HashLink smooth to='/recording#' className={styles.sidebar_text}>MIDI</HashLink>
            </>)
        }
        else if(page === 'production') {
            return(<>
                <HashLink smooth to='/production#' className={styles.sidebar_text}>Using Tracks</HashLink>
                <div>
                    <HashLink smooth to='/production#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Auxiliary/Return/Send, Group, Bus</HashLink>
                </div>
                <HashLink smooth to='/production#' className={styles.sidebar_text}>Sampling</HashLink>
                <div>
                    <HashLink smooth to='/production#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Modulation</HashLink>
                </div>
            </>)
        }
        else if(page === 'effects') {
            return(<>
                <HashLink smooth to='/effects#' className={styles.sidebar_text}>Audio Effects</HashLink>
                <div>
                    <HashLink smooth to='/effects#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Reverb</HashLink>
                    <HashLink smooth to='/effects#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Delay</HashLink>
                    <HashLink smooth to='/effects#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>EQ</HashLink>
                    <HashLink smooth to='/effects#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Compression</HashLink>
                    <HashLink smooth to='/effects#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Sidechain</HashLink>
                    <HashLink smooth to='/effects#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Sidechain</HashLink>
                </div>
                <HashLink smooth to='/effects#' className={styles.sidebar_text}>MIDI Effects</HashLink>
                <div>
                    <HashLink smooth to='/effects#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Arp</HashLink>
                </div>
                <HashLink smooth to='/effects#' className={styles.sidebar_text}>Auxiliary, Bus, Group</HashLink>
                <div>
                    <HashLink smooth to='/effects#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>Parallel Compression</HashLink>
                </div>
            </>)
        }
        else if(page === 'mixmaster') {
            return(<>
                <HashLink smooth to='/mixmaster#' className={styles.sidebar_text}>Mixing</HashLink>
                <HashLink smooth to='/mixmaster#' className={styles.sidebar_text}>Mastering</HashLink>
                <div>
                    <HashLink smooth to='/mixmaster#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>stuff</HashLink>
                </div>
            </>)
        }
        else if(page === 'sounddesign') {
            return(<>
                <HashLink smooth to='/sounddesign#' className={styles.sidebar_text}>Waves</HashLink>
                <HashLink smooth to='/sounddesign#' className={styles.sidebar_text}>Filter</HashLink>
                <HashLink smooth to='/sounddesign#' className={styles.sidebar_text}>ADSR</HashLink>
                <HashLink smooth to='/sounddesign#' className={styles.sidebar_text}>LFO</HashLink>
                <HashLink smooth to='/sounddesign#' className={styles.sidebar_text}>Noise</HashLink>
                <HashLink smooth to='/sounddesign#' className={styles.sidebar_text}>Synthesis</HashLink>
                <HashLink smooth to='/sounddesign#' className={styles.sidebar_text}>Effects</HashLink>
                <HashLink smooth to='/sounddesign#' className={styles.sidebar_text}>Modulation</HashLink>
                <div>
                    <HashLink smooth to='/sounddesign#' className={`${styles.sidebar_sub} ${styles.sidebar_text}`}>stuff</HashLink>
                </div>
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