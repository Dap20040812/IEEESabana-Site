import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllEvents } from '../querys/events';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const GetEvents = async () => {
      const data = await getAllEvents();
      const formattedData = data.map(event => {
        const timestamp = event.Fecha;
        const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
        return {
          ...event,
          formattedDate: date.toLocaleDateString(),
          formattedTime: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      });
      setEvents(formattedData);
    };
    GetEvents();
  }, []);

  return (
    <Container>
      <Title>Eventos</Title>
      <EventsContainer>
        {events.map(event => (
          <Event key={event.Nombre}>
            <EventTitle>{event.Nombre}</EventTitle>
            <EventContent>
              <EventInfo>
                <EventLabel>Descripción:</EventLabel>
                <EventDescription>{event.Desc}</EventDescription>
                <EventDateTime>
                  <EventDate>
                    <EventLabel>Fecha:</EventLabel>
                    <div>{event.formattedDate}</div>
                  </EventDate>
                  <EventTime>
                    <EventLabel>Hora:</EventLabel>
                    <div>{event.formattedTime}</div>
                  </EventTime>
                </EventDateTime>
                <EventLocation>
                  <EventLabel>Lugar:</EventLabel>
                  <div>{event.Lugar}</div>
                </EventLocation>
                <EventButton onClick={() => window.location.href = event.Forms}>Regístrate</EventButton>
              </EventInfo>
              <EventSlider>
                <Carousel autoPlay infiniteLoop>
                  {event.Fotos.map((image, index) => (
                    <div key={index}>
                      <EventImage src={image} alt={event.Nombre} />
                    </div>
                  ))}
                </Carousel>
              </EventSlider>
            </EventContent>
          </Event>
        ))}
      </EventsContainer>
    </Container>
  );
}

export default Events;

const Container = styled.div`
  display: flex;
  min-height: 65vh;
  height: max-content;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-family: 'Roboto', sans-serif;
  background-color: white;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 3em;
  margin: 1em;

  @media (max-width: 740px) {
    font-size: 2em;
  }
`;

const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  width: 100%;
  margin-bottom: 2em;
`;

const Event = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 60em;
  height: auto;
  border-radius: 1em;
  border: 6px solid black;
  height: 30em;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const EventTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  font-weight: bold;
  height: 2em;
  background-color: black;
  width: 100%;
  color: #FFF;
`;

const EventContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1em;
  width: 100%;
  height: 100%;
`;

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 2em;
  width: 40%;
`;

const EventLabel = styled.div`
  font-weight: bold;
  margin-top: 0.5em;
`;

const EventDescription = styled.div`
  margin-bottom: 1em;
`;

const EventDateTime = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  margin-bottom: 1em;
`;

const EventDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const EventTime = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1em;
`;

const EventButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  font-size: 1.5em;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #FDC649;
    transform: scale(1.05);
    transition: 0.3s;
    color: black;
  }
`;

const EventSlider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60%;
  padding: 1em;
  height: 100%;
`;

const EventImage = styled.img`
  width: 30em;
  height: 20em;
  object-fit: contain;
`;