/*************************************


使用声明：⚠️仅供参考，瞎寫的！

**************************************
[rewrite_local]
#修改
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body
https://raw.githubusercontent.com/bbbb112/what/main/1.js
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header 
https://raw.githubusercontent.com/bbbb112/what/main/1.js

[mitm] 
hostname = api.revenuecat.com


************************************/

const Q = {};
const Q1 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "Premium ";
const appid = "annual.unlimited.450.payasyougo.399k_1y";


if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  Q.headers = $request.headers;
} else if (Q1 && Q1.subscriber) {
  Q1.subscriber.subscriptions = Q1.subscriber.subscriptions || {};
  Q1.subscriber.entitlements = Q1.subscriber.entitlements || {};
  const data = {
	      "product_identifier": (appid),
	      "purchase_date": "2022-09-09T09:09:09Z"
    };
  Q1.subscriber.entitlements[(name)] = (data);
  Q1.subscriber.subscriptions[(appid)] = {  ...data,		"warning": "仅供学习，禁止转载或售卖",	"original_purchase_date": "2022-09-09T09:09:09Z",	"store": "app_store",	"ownership_type": "PURCHASED"};
  Q.body = JSON.stringify(Q1);
}
$done(Q);



