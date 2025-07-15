// consumer/index.js
require("dotenv").config();
const { consumer } = require("./kafka");
const { indexLog } = require("./elastic");

async function runConsumer() {
  await consumer.connect();
  await consumer.subscribe({
    topic: process.env.KAFKA_TOPIC,
    fromBeginning: true,
  });

  console.log("🚀 Kafka Consumer Started");

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const log = JSON.parse(message.value.toString());
      console.log("✅ Consumed log:", log);
      await indexLog(log);
    },
  });
}

runConsumer().catch(console.error);
