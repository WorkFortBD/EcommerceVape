import React, { memo } from "react";
import PropTypes from "prop-types";

const OrderStatus = ({ status }) => {
  const getBadgeClass = () => {
    let badgeClass = "mt-1 badge ";

    switch (status) {
      case "cancelled":
      case "rejected":
        badgeClass += "badge-danger";
        break;

      case "due":
      case "pending":
      case "refunded":
        badgeClass += "badge-warning";
        break;

      case "processing":
        badgeClass += "badge-primary";
        break;

      case "completed":
      case "paid":
      case "delivered":
        badgeClass += "badge-success";
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
