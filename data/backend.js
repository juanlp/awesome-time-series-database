const hbase = require('./backend/hbase').default;
const cassandra = require('./backend/cassandra').default;
const elasticsearch = require('./backend/elasticsearch').default;
const bigtable = require('./backend/bigtable').default;
const ceph = require('./backend/ceph').default;
const memory = require('./backend/memory').default;

const backends = {
  HBase: hbase,
  Cassandra: cassandra,
  Elasticsearch: elasticsearch,
  Bigtable: bigtable,
  Ceph: ceph,
  Memory: memory,
  Custom: {
    url: 'N/A',
    databases: ['InfluxDB', 'Prometheus', 'Akumuli']
  }
};

// export default backends;
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = backends;
