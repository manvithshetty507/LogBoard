require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Client } = require("@elastic/elasticsearch");

const esClient = new Client({
  node: process.env.ES_NODE,
  auth: {
    username: process.env.ES_USERNAME,
    password: process.env.ES_PASSWORD,
  },
  headers: {
    accept: "application/vnd.elasticsearch+json; compatible-with=8",
    "content-type": "application/vnd.elasticsearch+json; compatible-with=8",
  },
});

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// backend/routes/logs.js
app.get("/logs", async (req, res) => {
  const result = await esClient.search({
    index: "logs-index",
    query: { match_all: {} },
    size: 100,
  });

  const logs = result.hits.hits.map((hit) => hit._source);
  res.json(logs);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
