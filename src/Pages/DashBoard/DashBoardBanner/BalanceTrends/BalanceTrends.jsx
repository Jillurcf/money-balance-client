import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        uv: 0,

    },
    {
        name: 'Feb',
        uv: 50,

    },
    {
        name: 'March',
        uv: 80,

    },
    {
        name: 'April',
        uv: 130,

    },
    {
        name: 'May',
        uv: 80,

    },
    {
        name: 'Jun',
        uv: 20,

    },
    {
        name: 'Jul',
        uv: 40
    },
]


export default class Example extends PureComponent {
    // static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
    render() {
    return (
      <ResponsiveContainer>
          <AreaChart
        widht={500}
        height={400}
        data={data}
        margin={{
            top:10,
            right:30,
            left: 0,
            bottom: 0,
        }} 
        >
        <CartesianGrid strokeDasharray='3 3'></CartesianGrid>
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
}
}

