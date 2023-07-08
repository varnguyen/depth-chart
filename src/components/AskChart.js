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
          barCategoryGap="-1"
        >
          <defs>
            <linearGradient id="colorAsk" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#d32f2f" />
              <stop offset="20%" stopColor="#bf322e" />
              <stop offset="30%" stopColor="#ac342e" />
              <stop offset="40%" stopColor="#99342d" />
              <stop offset="50%" stopColor="#86342d" />
              <stop offset="60%" stopColor="#73332c" />
              <stop offset="70%" stopColor="#61312b" />
              <stop offset="80%" stopColor="#4e2f2a" />
              <stop offset="90%" stopColor="#3c2c29" />
              <stop offset="100%" stopColor="#282828" />
            </linearGradient>
          </defs>
          <XAxis dataKey="price" fontSize={14} reversed interval={0} />
          <YAxis hide tick={{ fontSize: 14 }} domain={[0, 3000]} />
          <Tooltip content={<CustomTooltip side="Asks" />} cursor={false} />
          <Bar
            dataKey="vol"
            fill="url(#colorAsk)"
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
