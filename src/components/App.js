import React from "react";
import PropTypes from "prop-types";
import base from "../base";

// import data
import sampleFishes from "../sample-fishes";

// Component imports
import { Header } from "./Header";
import { Order } from "./Order";
import { Inventory } from "./Inventory";
import { Fish } from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  static propTypes = {
    match: PropTypes.object,
  };

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeid);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeid}/fishes`, {
      context: this,
      state: "fishes",
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeid,
      JSON.stringify(this.state.order)
    );
  }

  addFish = (fish) => {
    // Take copy of existing state
    const fishes = { ...this.state.fishes };
    // Add new fishes to object
    fishes[`fish${Date.now()}`] = fish;
    // Set the new fishes object to state
    this.setState({
      fishes,
    });
  };

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes });
  };

  deleteFish = (key) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    // Take a copy of existing state
    const order = { ...this.state.order };
    // Add new order to object
    order[key] = order[key] + 1 || 1;
    // Set the new order object to state
    this.setState({ order });
  };

  editOrder = (event, key) => {
    // Take a copy of existing state
    const order = { ...this.state.order };
    // Add new order to object
    order[key] = event.currentTarget.value;
    // Set the new order object to state
    this.setState({ order });
  };

  removeFromOrder = (key) => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          removeFromOrder={this.removeFromOrder}
          editOrder={this.editOrder}
          order={this.state.order}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          storeId={this.props.match.params.storeid}
        />
      </div>
    );
  }
}

export default App;
