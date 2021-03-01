import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Cell
  } from "recharts";

const COLORS = ["#0088FE"];

export default function ScatterGraph({data}) {
  return (
    <ScatterChart
      width={400}
      height={400}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid />
      <XAxis type="number" dataKey="value1" name="stature" unit="" />
      <YAxis type="number" dataKey="value2" name="weight" unit="" />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Scatter name="A school" data={data} fill="#8884d8">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Scatter>
    </ScatterChart>
  );
}