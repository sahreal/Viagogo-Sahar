import React from "react";
import "./AllComponents.css";
import Linkify from "react-linkify";

const EventEntry = ({
  EventDate,
  EventName,
  VenueName,
  Time,
  AvailableTickets,
  MinPrice,
  VenueCity,
  HeadingTowardsLimitedStockMessage,
  EventUrl,
  VenueDescription
}) => {
  return (
    <div className="cell">
      <div className="EventName">
        <div className="ticketInfo">
          <span>
            <strong>Min Price</strong> {MinPrice}
          </span>
          <span>
            <strong>Available Tickets:</strong> {AvailableTickets}
          </span>
        </div>
        <span className="MainEvent">{EventName}</span>
        <p>
          <em>{HeadingTowardsLimitedStockMessage}</em>
        </p>

        <div className="locationDetails">
          <span>
            <strong>Date: </strong> {EventDate}
          </span>
          <span>
            <strong>Time: </strong> {Time}
          </span>
          <span>
            <strong>Venue Name: </strong>
            {VenueName}
          </span>
          <span>
            <strong>Venue City: </strong>
            {VenueCity}
          </span>
        </div>
        <div className="VenueDescription">
          <em>"{VenueDescription}"</em>
        </div>
      </div>

      <Linkify>
        {" "}
        <div className="EventUrl">Event Link: {EventUrl}</div>
      </Linkify>
    </div>
  );
};

export default EventEntry;
