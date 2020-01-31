import React from "react";
import EventEntry from "./EventEntry";

const EventList = ({ list, searchByCity }) => {
  return (
    <div className="table">
      {searchByCity.length > 0
        ? list.map(obj => {
            if (obj.VenueCity === searchByCity) {
              return (
                <EventEntry
                  key={obj.EventId}
                  EventDate={obj.Date}
                  Time={obj.Time + "pm"}
                  VenueName={obj.VenueName}
                  VenueDescription={obj.VenueDescription}
                  VenueCity={obj.VenueCity}
                  EventName={obj.EventName}
                  MinPrice={obj.MinPrice}
                  AvailableTickets={obj.AvailableTicketsNumber}
                  EventUrl={obj.EventUrl}
                  HeadingTowardsLimitedStockMessage={
                    obj.HeadingTowardsLimitedStockMessage
                  }
                />
              );
            }
          })
        : list.map(obj => {
            return (
              <EventEntry
                key={obj.EventId}
                EventDate={obj.Date}
                Time={obj.Time + "pm"}
                VenueName={obj.VenueName}
                VenueCity={obj.VenueCity}
                EventName={obj.EventName}
                MinPrice={obj.MinPrice}
                AvailableTickets={obj.AvailableTicketsNumber}
                VenueDescription={obj.VenueDescription}
                EventUrl={obj.EventUrl}
                HeadingTowardsLimitedStockMessage={
                  obj.HeadingTowardsLimitedStockMessage
                }
              />
            );
          })}
    </div>
  );
};

export default EventList;
