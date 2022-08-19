import React, { useState } from 'react';
import styles from "./Equipment.module.css";
import Sidebar from './Sidebar';
import './styles.css';

const Equipment = (props) => {

    const [modalActive, setModalActive] = useState(false);

    const toggleModal = (event) => {
        setModalActive(modalActive => !modalActive);
        console.log(setModalActive);
        event.currentTarget.classList.toggle('hidden');
    };
    
    return(<>
        <div className={`main_side_layout ${styles.equipment}`}>
            <Sidebar pageName='equipment'/>
            <div className={`main_container ${styles.equipment_container}`}>
                {/* Title */}
                <div id={styles.title_png}>
                    <h1 className='page_title'>Equipment</h1>
                </div>
                {/* Computer Gear */}
                <div>
                    <h1 className='page_chapter_title' id='cpu'>Computer and Technology</h1>
                    <h2 className='page_section_title'>Hardware</h2>
                    <div className={styles.row_section}>
                        <div className={styles.description}>
                            <p>You're going to need a computer, whether it be a Desktop or Laptop, PC or Mac</p>
                            <p>You're going to need the essentials, including the computer itself, and then a keyboard and mouse if it's not included</p>
                            
                            {/* MODAL */}
                            <div className="modal">
                                <button className="close-modal">&times;</button>
                                <h1>TITLE YES</h1>
                                <p className="hidden">Woo! Happy happy! I’m happy for you! I do the Billie Jean dance in your honour! Congrats! I hope you enjoy this high and have a grand old time!</p>
                            </div>
                            {/* END MODAL */}
                        </div>
                        <div className={`${styles.png}`}>
                            {/* MODAL ONCLICK */}
                            <img alt='imac' className={`${styles.cpu_gear_png}`} src={require('../assets/imac.png')} onClick={toggleModal}/>
                        </div>
                    </div>
                    <div className={styles.row_section}>
                        <div className={`${styles.png} ${styles.column_pictures}`}>
                            <img alt='cpu' className={`${styles.cpu_gear_png}`} src={require('../assets/cpu-amd-ryzen.png')}/>
                            <img alt='disk' className={`${styles.cpu_gear_png}`} src={require('../assets/computer-disk-storage.png')}/>
                            <img alt='ram' className={`${styles.cpu_gear_png}`} src={require('../assets/computer-memory.png')}/>
                        </div>
                        <div className={styles.description}>
                            <p>The main resources that music production will consume is CPU usage, Disk usage, and RAM, so you'll want to get nice specs for these three hardware components</p>
                            <p>This consumption of resources is all from the software where you will be doing all of the music production. This software is called a Digital Audio Workstation (DAW)</p>
                            <p>And sometimes, you'll use third-party plugins called Virtual Studio Technology (VST) which is an external audio plug-in software interface that integrates software synthesizers and effects units into DAWs</p>
                            <p>So you'll be using DAWs, and sometimes running VSTs within those DAWs to create and produce, which will use computer resources</p>
                            <p>CPU usage will allow you to run intensive sessions, Disk usage allows you to hold much data, and RAM allows you to have more tracks and devices running simultaneously</p>
                        </div>
                    </div>
                    <h2 className='page_section_title'>Software</h2>
                    <div className={styles.row_section}>
                        <div className={styles.description}>
                            <p>The DAW is where you will be doing all of your music production. It's where you'll be creating music, recording to, using plugins and effects, everything. Arrangment, Recording, Production, Mixing, Mastering, all done in here.</p>
                            <p>Examples of DAWs are Ableton, Logic Pro X, FL Studio, and Pro Tools. There are some free ones including Audacity and Garageband</p>
                        </div>
                        <div className={`${styles.png} ${styles.grid_pictures}`}>
                            <img alt='ableton_logo' className={`${styles.cpu_gear_png}`} src={require('../assets/ableton.jpg')}/>
                            <img alt='logic_logo' className={`${styles.cpu_gear_png}`} src={require('../assets/logic_pro.png')}/>
                            {/* <img alt='fl_studio_logo' className={`${styles.cpu_gear_png}`} src={require('../assets/fl_studio.jpg')}/> */}
                            {/* <img alt='pro_tools_logo' className={`${styles.cpu_gear_png}`} src={require('../assets/pro_tools.png')}/> */}
                        </div>
                    </div>
                    <div className={styles.row_section}>
                        <div className={`${styles.png} ${styles.grid_pictures}`}>
                            <img alt='guitar-rig' className={`${styles.cpu_gear_png}`} src={require('../assets/vst-guitar-rig.png')}/>
                            <img alt='pro-q3' className={`${styles.cpu_gear_png}`} src={require('../assets/vst-fabfilter-pro-q3.png')}/>
                            <img alt='melodyne' className={`${styles.cpu_gear_png}`} src={require('../assets/vst-melodyne.png')}/>
                            <img alt='serum' className={`${styles.cpu_gear_png}`} src={require('../assets/vst-serum.PNG')}/>
                            <img alt='vintage_verb' className={`${styles.cpu_gear_png}`} src={require('../assets/vst-valhalla-vintage-verb-70s.png')}/>
                        </div>
                        <div className={styles.description}>
                            <p>DAWs will come with their own stock plugins that come with it, but sometimes, there are third-party plugins that specialize in a certain sound, effect, or synth/wavetable type</p>
                            <p>It's good to get ones that you believe will be very useful to you in the long run, though being selective as it is expensive</p>
                        </div>
                    </div>
                </div>
                {/* Prod Gear */}
                <h1 className='page_chapter_title' id='prod'>Digital Music Equipment</h1>
                <div>
                    <div className={styles.row_section}>
                        <div className={styles.description}>
                            This is the production equipment stuff. MIDI Keyboards, Audio Interface, Mics (and its accessories such as pop filters), Mixing Headphones, Studio Monitors, etc.
                        </div>
                        <div className={`${styles.png} ${styles.column_pictures}`}>
                            <img alt='headphones' className={`${styles.prod_gear_png}`} src={require('../assets/mixing_headphones_beyerdynamics_dt770_pro.jpg')}/>
                            <img alt='studio_monitors' className={`${styles.prod_gear_png}`} src={require('../assets/studio_monitors_KRK_RP5_Rokit_5.jpg')}/>
                        </div>
                    </div>
                    <div className={styles.row_section}>
                        <div className={`${styles.png} ${styles.column_pictures}`}>
                            <img alt='midi_keyboard' className={`${styles.prod_gear_png}`} src={require('../assets/midi-keyboard.png')}/>
                            <img alt='audio_interface' className={`${styles.prod_gear_png}`} src={require('../assets/audio-interface.png')}/>
                        </div>
                        <div className={styles.description}>
                            This is the production equipment stuff. MIDI Keyboards, Audio Interface, Mics (and its accessories such as pop filters), Mixing Headphones, Studio Monitors, etc.
                        </div>
                    </div>
                    <div className={styles.col_section}>
                        <div className={styles.description}>
                            This is the production equipment stuff. MIDI Keyboards, Audio Interface, Mics (and its accessories such as pop filters), Mixing Headphones, Studio Monitors, etc.
                        </div>
                        <div className={`${styles.png} ${styles.column_pictures}`}>
                            <img alt='headhone_jack' className={`${styles.prod_gear_png}`} src={require('../assets/jack_sizes.png')}/>
                        </div>
                    </div>
                </div>
                {/* Music Gear */}
                <h1 className='page_chapter_title' id='music'>Analog Music Equipment</h1>
                <div>
                    <div className={styles.row_section}>
                    
                        <div className={`${styles.png} ${styles.row_pictures}`}>
                            <img alt='strat' className={`${styles.guitar_png}`} src={require('../assets/stratocaster.png')}/>
                        </div>
                        <div className={styles.description}>
                            This is the addition equipment stuff. Guitar, Drums, real instrumentation, etc.
                        </div>
                    
                        <div className={`${styles.png} ${styles.row_pictures}`}>
                            <img alt='tele' className={`${styles.guitar_png}`} src={require('../assets/telecaster.png')}/>
                            {/* <img alt='les_paul' className={`${styles.guitar_png}`} src={require('../assets/les_paul.png')}/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Equipment;