/******************************
GUGA （ipad）数据拷贝于YU9191
***********************

[rewrite_local]
^https?:\/\/www\.guga\.co\/api-base\/v2\/(state|preferential-product) url script-response-body https://raw.githubusercontent.com/bbbb112/what/main/GUGA.js



[mitm]
hostname = www.guga.co

*******************************/
var body = $response.body;
var data = JSON.parse(body); 
data.data.level = 1;  
data.data.expire = 1; 
body = JSON.stringify(data);
$done(body);
