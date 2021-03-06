import React, { Component } from 'react';
import EventDescription from '../EventDescription/EventDescription';
import GoogleApiWrapper from '../EventMap/EventMap';
import "./eventpagestyle.css";

 class EventPage extends Component {
  render() {
    return (
      <div className="container-fluid">

        <div className="row justify-content-center">
          <div className="col-sm-auto" align='center'>
            <h1 className='eventName'>Event Name</h1>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-auto" align='center'>
            <button type='button' className='joinbutton'>Join</button>
          </div>
        </div>


        <div className="row justify-content-center">
          <div className='col-sm-auto'>
            <div align="center">
              <GoogleApiWrapper position="relative" className='map'/>
            </div>
          </div>
        </div>

        <div className="row justify-content-center gapDiv">
          <div className="col-sm-auto">
            <EventDescription/>
          </div>
        </div>

      </div> 
    );
  }
}



export default EventPage;
