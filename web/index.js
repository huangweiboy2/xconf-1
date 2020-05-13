const {ListConfigsRequest, CreateConfigRequest, Config} = require('./xconf_pb.js');
const {XconfClient} = require('./xconf_grpc_web_pb.js');

var client = new XconfClient('http://ifish.dev:8080', null, null);

var config = new Config();
config.setId('dex.json');
config.setContent('{"hello":"world"}');

var request = new CreateConfigRequest();
request.setParent('ifish/rio');
request.setConfig(config);

client.createConfig(request, {}, (err, response) => {
  console.log(err, response);
});

request = new ListConfigsRequest();
request.setParent('ifish/rio');

client.listConfigs(request, {}, (err, response) => {
  console.log(err, response.getConfigsList());
});
