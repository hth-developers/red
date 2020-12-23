import React from 'react';

import {LineChart, PieChart} from 'react-native-chart-kit';

const bezierdata = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: () => `red`, // optional
      strokeWidth: 2, // optional
    },
    {
      data: [10, 35, 18, 70, 89, 33],
      color: () => `green`, // optional
      strokeWidth: 1, // optional
    },
    {
      data: [33, 89, 70, 18, 35, 10],
      color: () => `orange`, // optional
      strokeWidth: 1, // optional
    },
    {
      data: [43, 99, 80, 28, 45, 20],
      color: () => `blue`, // optional
      strokeWidth: 1, // optional
    },
  ],
  legend: ['Booking', 'Inward', 'Dispatch', 'Delivery'], // optional
};

const piedata = [
  {
    name: 'Booking',
    population: 150,
    color: 'red',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Inward',
    population: 170,
    color: 'green',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Dispatch',
    population: 480,
    color: 'orange',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Delivery',
    population: 100,
    color: 'blue',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#fff',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 48, 73,${opacity})`,

  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

export const Bezier_Line_Chart = ({width}) => (
  <LineChart
    data={bezierdata}
    width={width - 20}
    height={256}
    verticalLabelRotation={30}
    chartConfig={chartConfig}
    bezier
  />
);

export const Pie_Chart = ({width}) => (
  <PieChart
    data={piedata}
    width={width - 20}
    height={200}
    chartConfig={chartConfig}
    accessor={'population'}
    backgroundColor={'transparent'}
    paddingLeft={'0'}
    absolute
  />
);
