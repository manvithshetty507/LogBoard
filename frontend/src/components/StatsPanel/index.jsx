import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const StatsPanel = ({ logs }) => {
  const actionCounts = logs.reduce((acc, log) => {
    acc[log.action] = (acc[log.action] || 0) + 1;
    return acc;
  }, {});

  const data = Object.keys(actionCounts).map((key) => ({
    name: key,
    count: actionCounts[key],
  }));

  return (
    <div style={{ width: "100%", height: 200, marginBottom: "1rem" }}>
      <h3>📊 Log Actions</h3>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsPanel;
