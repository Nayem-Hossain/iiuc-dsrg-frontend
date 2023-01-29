import React from 'react';
import WithLayout from '../Layout/WithLayout';
import EventsAndNews from '../components/EventsAndNewsComponents/EventsAndNews';

const EventsAndNewsScreen = () => {
  return (
    <>
      <EventsAndNews/>
    </>
  )
}

export default WithLayout(EventsAndNewsScreen)
