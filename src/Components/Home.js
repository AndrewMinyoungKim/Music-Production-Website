import React from 'react';
import bestAlbums from '../assets/best-albums.png';
import Sidebar from './Sidebar';

function Home() {
    return(
        <>
        <div>
            <Sidebar pageName='home'/>
            <div className='Title'>
                <h1>Welcome To Andrew's Music Production Website</h1>
                <h2>Where he keeps everything he's learned about Mixing, Music Production and Audio Engineering</h2>
            </div>
            <img src={require('../assets/best-albums.png')}/>
            <img src={bestAlbums} alt="Logo" />
        </div>
        </>
    );
}

export default Home;