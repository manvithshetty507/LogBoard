const pool = require("./db");
require("dotenv").config();

const { initProducer, publishLog } = require("./kafka");

let lastId = 0;

async function fetchNewLogs() {
  const [rows] = await pool.query(
    "SELECT * FROM logs WHERE id > ? ORDER BY id ASC",
    [lastId]
  );
  for (const row of rows) {
    await publishLog(row);
    lastId = row.id;
  }
}

async function main() {
  await initProducer();
  console.log("🚀 Log Producer Started");

  setInterval(async () => {
    try {
      await fetchNewLogs();
    } catch (err) {
      console.error("❌ Error fetching logs:", err);
    }
  }, 5000); // every 5 seconds
}

main();
