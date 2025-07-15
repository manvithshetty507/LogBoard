const LogTable = ({ logs }) => {
  return (
    <table border={1} cellPadding={10} style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>User ID</th>
          <th>Action</th>
          <th>Status</th>
          <th>Message</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log) => (
          <tr key={log.id}>
            <td>{log.id}</td>
            <td>{log.user_id}</td>
            <td>{log.action}</td>
            <td>{log.status}</td>
            <td>{log.message}</td>
            <td>{new Date(log.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LogTable;
