import { useState, useEffect } from "react";
import mockLogs from "./data/mockLogs";
import Navbar from "./components/Navbar";
import LogTable from "./components/LogTable";
import FilterPanel from "./components/FilterPanel";
import StatsPanel from "./components/StatsPanel";
import axios from "axios";

const App = () => {
  const [logs, setLogs] = useState([]);
  const [filters, setFilters] = useState({ action: "", status: "" });

   useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/logs");
        setLogs(res.data);
      } catch (err) {
        setLogs(mockLogs); // Fallback to mock data
        console.error("Failed to fetch logs", err);
      }
    };
    fetchLogs();
  }, []);

  const filteredLogs = logs.filter((log) => {
    return (
      (filters.action ? log.action === filters.action : true) &&
      (filters.status ? log.status === filters.status : true)
    );
  });

  console.log("Filtered Logs:", filteredLogs);


  return (
    <div style={{ padding: "1rem" }}>
      <Navbar />
      <StatsPanel logs={filteredLogs} />
      <FilterPanel filters={filters} setFilters={setFilters} />
      <LogTable logs={filteredLogs} />
    </div>
  );
};

export default App;
