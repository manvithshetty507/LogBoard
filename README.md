# LOG-BOARD PROJECT

### Phase 1: Docker-based infrastructure
- MySQL (structured log DB)
    - MySQL → localhost:3306
- Kafka (message streaming)
    - Kafka → localhost:9092 / zookeeper -> localhost: 2181
- Elasticsearch (search)
    - Elasticsearch → localhost:9200
- MongoDB (filtered log storage)
    - MongoDB → localhost:27017

After the Setup add some dummy data to logs table in mysql
Then Coded kafka producer which fetch's every 5 sec for new rows to publish in a topic called "logs-topic"





