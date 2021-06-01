import React, { PureComponent } from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

const data = [];

for(let i=30;i>0;i--){
  data.push({
    value: 1 + Math.random()
  });
}


export default class Area_chart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,            
            left: 0,
            bottom: 0,
          }}
        >
         
          <Tooltip />
          <Area dataKey="value" stroke="#000099" strokeWidth={1.5} fill="rgb(238, 241, 247)" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}