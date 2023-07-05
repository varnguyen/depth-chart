import React from "react";

function CustomTooltip({ active, payload, label, side }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{side}</p>
        <p className="intro">Price : {label}</p>
        <p className="desc">Vol: {payload[0].value}</p>
      </div>
    );
  }
}

export default CustomTooltip;
