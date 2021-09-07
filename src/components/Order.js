import React from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

import { formatPrice } from "../helpers";

export class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func,
  };
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    if (!fish) return null;
    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry, {fish ? fish.name : "this fish"} is no longer available
        </li>
      );
    }
    return (
      <motion.li
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 60 }}
        exit={{ opacity: 0, height: 0 }}
        key={key}
      >
        <input
          type="number"
          value={count}
          onChange={(event) => this.props.editOrder(event, key)}
        />
        lbs {fish.name}
        {formatPrice(count * fish.price)}
        <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
      </motion.li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">
          <AnimatePresence>{orderIds.map(this.renderOrder)}</AnimatePresence>
        </ul>
        <div className="total">
          <strong>Total: {formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}
