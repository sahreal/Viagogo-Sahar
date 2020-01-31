import React, { PureComponent } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import "../src/AllComponents.css";

class Filter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cities: props.cities,
      city: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}

  handleChange(e) {
    let value = e.target.value;
    this.props.search(value);
  }

  render() {
    let cityList = this.state.cities;
    return (
      <div className="Filter">
        <FormControl className="LocationSelect">
          <InputLabel id="inputLabel">Location</InputLabel>
          <Select
            labelId="labelId"
            value={this.state.value}
            onChange={this.handleChange}
          >
            {cityList.map((item, id) => {
              return (
                <MenuItem key={id} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default Filter;
