require("dotenv").config();

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

async function indexLog(log) {
  try {
    await esClient.index({
      index: process.env.ES_INDEX,
      document: log,
    });
    console.log("✅ Indexed log:", log.id);
  } catch (error) {
    console.error("❌ Failed to index log:", error.message);
  }
}

module.exports = { indexLog };
