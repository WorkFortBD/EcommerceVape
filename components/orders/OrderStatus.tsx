import React, { memo } from "react";
import PropTypes from "prop-types";

const OrderStatus = ({ status }) => {
  const getBadgeClass = () => {
    let badgeClass = "mt-1 badge ";

    switch (status) {
      case "cancelled":
      case "rejected":
        badgeClass += "inline-block px-2 py-1 text-xs font-semibold leading-tight text-white bg-red-500 rounded-full";
        break;

      case "due":
      case "pending":
      case "refunded":
      case "not_delivered":
        badgeClass += "inline-block px-2 py-1 text-xs font-semibold leading-tight text-white bg-yellow-500 rounded-full";
        break;

      case "processing":
        badgeClass += "inline-block px-2 py-1 text-xs font-semibold leading-tight text-white bg-blue-500 rounded-full";
        break;

      case "completed":
      case "paid":
      case "delivered":
        badgeClass += "inline-block px-2 py-1 text-xs font-semibold leading-tight text-white bg-green-500 rounded-full";
        break;

      default:
        badgeClass += "badge-secondary";
        break;
    }

    return badgeClass;
  };

  return <span className={getBadgeClass()}>{status.toUpperCase()}</span>;
};

OrderStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

export default memo(OrderStatus);
