import React, { useState, useEffect } from 'react';
import hackTheNorthLogo from '../public/hackthenorth.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { format } from 'date-fns';
import Navbar from './components/Navbar'
import Bubbles from './components/Bubbles';
import Footer from './components/Footer';
import { useAuth } from './AuthContext';

function App() {
  const [events, setEvents] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const { isLoggedIn } = useAuth();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterValue(event.target.textContent != "all events" ? event.target.textContent : "");
  };

  const dateFormatter = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDateTime = format(date, 'EEEE, MMMM dd, yyyy @ hh:mm a');
    return formattedDateTime;
  }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://hack-the-north-frontend-dev-iota.vercel.app');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event => {
    if (filterValue === '') {
      return true; // No filter applied, return all events
    } else {
      return event.event_type === filterValue; // Filter events based on selected value
    }
  }).filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <Bubbles />
      <Navbar />
      <div className="content">
        <div>
          <a href="https://hackthenorth.com/" target="_blank">
            <img src={hackTheNorthLogo} className="logo mt-5" alt="Vite logo" />
          </a>
        </div>
        <h1>Welcome <span className="WelcomeHackers">Hackers</span>!</h1>
        <h5>This marks the day, where you'll embark on an incredible adventure</h5>
        <a href="#EventsContainer" className="btn-light btn-primary btn-lg">To The Events Section!</a>
      </div>
      <div className="container mt-3 mb-3" id="EventsContainer">
        <div className="d-flex align-items-center">
          <div className="dropdown me-2">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-filter"></i>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" onClick={handleFilterChange}>all events</a></li>
              <li><a className="dropdown-item" onClick={handleFilterChange}>tech_talk</a></li>
              <li><a className="dropdown-item" onClick={handleFilterChange}>workshop</a></li>
              <li><a className="dropdown-item" onClick={handleFilterChange}>activity</a></li>
            </ul>
          </div>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1"><i className="bi bi-search" /></span>
            <input
              className="form-control"
              style={{ width: '25rem' }}
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
      {filteredEvents.map((event) => (
        (event.permission === "public" || isLoggedIn) && (
          <div className="card mb-4 cards d-flex align-items-center" key={event.id}>
            <div className="card-body">
              <h5 className="card-title">
                {event.name}{" "}
                <span className="badge rounded-pill text-bg-info">{event.event_type}</span>
              </h5>
              <p className="card-text">{event.description}</p>
              <div className="d-flex justify-content-between align-items-center ">
                <p className="text-muted">
                  <strong>Starts at:</strong> {dateFormatter(event.start_time)}
                </p>
                <p className="text-muted">
                  <strong>Ends at:</strong> {dateFormatter(event.end_time)}
                </p>
              </div>
              <div className={`d-flex justify-content-${event.speakers[0] ? "between" : "center"} align-items-center`}>
                {event.speakers[0] && (
                  <p className="text-muted">
                    <span>
                      <strong>Speaker: </strong>
                      {event.speakers[0].name}
                    </span>
                  </p>
                )}
                <a href={isLoggedIn ? event.private_url : event.public_url} className="btn btn-primary mb-3">
                  Check it out!
                </a>
              </div>
              {event.related_events[0] && (
                <p className="text-muted mb-0">
                  <span>
                    <strong>Related Events: </strong>
                    <div className="d-flex justify-content-around">
                      {event.related_events.map((relatedEventId) => {
                        const relatedEvent = events.find((e) => e.id === relatedEventId);
                        return relatedEvent && (
                          <a href={isLoggedIn ? event.private_url : event.public_url} key={relatedEvent.id}>
                            {relatedEvent.name}{" "}
                          </a>
                        );
                      })}
                    </div>
                  </span>
                </p>
              )}
            </div>
          </div>
        )
      ))}
      {/* </div > */}
      <Footer login={false} />
    </>
  );
}

export default App;
