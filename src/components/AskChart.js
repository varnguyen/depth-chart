import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { asks } from "../data";
import CustomTooltip from "./CustomTooltip";

export default class AskChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="99%" height="99%">
        <BarChart
          data={asks}
          margin={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          barCategoryGap="100%"
        >
          <XAxis dataKey="price" fontSize={14} reversed interval={0} />
          <YAxis hide tick={{ fontSize: 14 }} domain={[0, 3000]} />
          <Tooltip content={<CustomTooltip side="Asks" />} cursor={false} />
          <Bar
            dataKey="vol"
            fill="#9e3538"
            stroke="#9e3538"
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
