import React from 'react';
import { Link } from 'react-router-dom';
import Lost from './NotFound.jpg';

const NotFound = () => (
    <div style={{width:'100%', height:'100%', backgroundColor:'#333'}}>
        <img src={Lost} style={{width:'50%', display:'block', marginLeft:'auto', marginRight:'auto', marginTop:'2%'}}/>
    <h2>Page not found</h2>
    </div>
);

export default NotFound;