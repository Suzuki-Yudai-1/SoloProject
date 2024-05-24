const express = require('express');
const app = express();

const list = [
	'翻訳アプリをダウンロードする',
	'戸締りをする',
	'猫を抱きしめる',
	'荷造りをする',
	' 航空券を買う',
	'もう一度猫を抱きしめる',
];

app.get("/", (req, res)=> res.send("aaaa"))

// app.use('/', express.static(__dirname + '/frontend/dist'));

// app.get('/api/list', (req, res) => {
// 	res.json(list);
// });

// app.use('/', express.json());

// app.post('/api/list', (req, res) => {
// 	const body = req.body;
// 	console.log(body);

// 	res.end();
// });

app.listen(3000, () => {
	console.log('server is running 3000');
});
