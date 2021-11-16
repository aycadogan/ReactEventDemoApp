import React, {useState, useEffect, useCallback} from 'react'
import { useFetch } from './hooks/useFetch'

import './App.css';

import EventList from './components/EventList';

function App() {

  // const [events, setEvents] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/events')
  const { data: events } = useFetch(url)
  
  // const fetchEvent = useCallback(async () => {
  //   const response = await fetch(url)
  //   const events = await response.json()
  //   setEvents(events)
  // }, [url])

  useEffect(() => {
    // fetch(url)
    //   .then(response => response.json())
    //   .then(json => setEvents(json))
    //   .catch(err => console.log(err))
    
    // const fetchEvent = async () => {
    //   const response = await fetch(url)
    //   const events = await response.json()
    //   setEvents(events)
    // }
    // fetchEvent()
  }, [url])

  return (
    <div className="App">
      <h1 style={{ color: "red", paddingTop: "50px",}}>Weekend Events</h1>  
      {events && <EventList events={events} />}

      <div className="filters">
        <button onClick={() => setUrl('http://localhost:3000/events?loc=Europe')}>European Events </button>
        {" "}
        <button onClick={() => setUrl('http://localhost:3000/events')}>All Events</button>
      </div>
    </div>
  );
}

export default App;
