import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { bids } from "../data";
import CustomTooltip from "./CustomTooltip";

export default class BidChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="99%" height="99%">
        <BarChart
          data={bids}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barCategoryGap="-1"
        >
          <defs>
            <linearGradient id="colorBid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#1aa67c" />
              <stop offset="20%" stopColor="#259772" />
              <stop offset="30%" stopColor="#2b8868" />
              <stop offset="40%" stopColor="#2e795e" />
              <stop offset="50%" stopColor="#306b55" />
              <stop offset="60%" stopColor="#305d4b" />
              <stop offset="70%" stopColor="#304f42" />
              <stop offset="80%" stopColor="#2e4239" />
              <stop offset="90%" stopColor="#2b3531" />
              <stop offset="100%" stopColor="#282828" />
            </linearGradient>
          </defs>
          <XAxis dataKey="price" fontSize={14} />
          <YAxis fontSize={14} domain={[0, 3000]} />
          <Tooltip content={<CustomTooltip side="Bids" />} cursor={false} />
          <Bar
            dataKey="vol"
            fill="url(#colorBid)"
            animationBegin={400}
            animationDuration={400}
            animationEasing="linear"
            radius={[1, 0, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
