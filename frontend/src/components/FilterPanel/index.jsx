const FilterPanel = ({ filters, setFilters }) => {
  const handleChange = (e) =>
    setFilters({ ...filters, [e.target.name]: e.target.value });

  return (
    <div style={{ margin: "1rem", display: "flex", gap: "1rem" }}>
      <select name="action" value={filters.action} onChange={handleChange}>
        <option value="">All Actions</option>
        <option value="login">Login</option>
        <option value="logout">Logout</option>
      </select>
      <select name="status" value={filters.status} onChange={handleChange}>
        <option value="">All Status</option>
        <option value="success">Success</option>
        <option value="fail">Fail</option>
      </select>
    </div>
  );
};

export default FilterPanel;
