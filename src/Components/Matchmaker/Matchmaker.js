import React from 'react';
import {withRouter} from 'react-router-dom';
import Construction from './Construction.jpg';

const Matchmaker = () => (
  <div>
  <p>Excuse the mess, this feature is currently under development</p>
  <img src={Construction}/>
  </div>
);

export default withRouter(Matchmaker);