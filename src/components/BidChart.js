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
          barCategoryGap="100%"
        >
          <XAxis dataKey="price" fontSize={14} />
          <YAxis fontSize={14} domain={[0, 3000]} />
          <Tooltip content={<CustomTooltip side="Bids" />} cursor={false} />
          <Bar
            dataKey="vol"
            fill="#1aa67c"
            stroke="#1aa67c"
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
