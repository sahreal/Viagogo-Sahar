import React from "react";
import { json } from "../data/eventlist";
import Filter from "../Part_2/Filter";
import EventList from "./EventList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      searchByCity: "",
      cities: []
    };
    this.getEvents = this.getEvents.bind(this);
    this.filterCities = this.filterCities.bind(this);
    this.search = this.search.bind(this);
  }
  componentDidMount() {
    this.getEvents();
    this.filterCities();
  }

  search(city) {
    this.setState({ searchByCity: city });
  }

  filterCities() {
    let array = json["Items"];
    let cities = array.map(item => {
      return item.VenueCity;
    });
    cities = cities.filter((city, pos) => {
      return cities.indexOf(city) === pos;
    });
    this.setState({ cities: cities });
  }

  getEvents() {
    let array = json["Items"];
    this.setState({ list: array });
  }

  render() {
    return (
      <div>
        <h1 className="appName"> Show me the tickets! </h1>
        {this.state.cities.length === 0 ? null : (
          <Filter cities={this.state.cities} search={this.search} />
        )}
        <EventList
          list={this.state.list}
          searchByCity={this.state.searchByCity}
        />
      </div>
    );
  }
}

export default App;
