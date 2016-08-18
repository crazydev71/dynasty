var credentials = {
    accessKeyId: 'AKIAIPW4YWLVT3RR5NYA',
    secretAccessKey: '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',
    region: 'us-west-2'
};

var dynasty = require('../lib/dynasty')(credentials, 'http://localhost:8000/');
// var table;
// dynasty.create("Lands", 
// 	{
// 		key_schema: {
// 			hash: ['country', 'string'],
// 			hash: ['region', 'string']
// 		}
// 	}
// ).then(function(res) { table = res; console.log(res); });
var table = dynasty.table("Lands");

table.insert({
	country: 'Germany',
	region: 'Frankfurt'
});