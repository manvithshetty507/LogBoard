const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "log-producer",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

async function initProducer() {
  try {
    await producer.connect();
    console.log("✅ Kafka producer connected successfully");
  } catch (error) {
    console.error("Error connecting Kafka producer:", error);
  }
}

async function publishLog(log) {
  try {
    await producer.send({
      topic: "logs-topic",
      messages: [
        {
          value: JSON.stringify(log),
        },
      ],
    });
    console.log("📤 Log published successfully:", log);
  } catch (error) {
    console.error("Error publishing log:", error);
  }
}

module.exports = { initProducer, publishLog };
