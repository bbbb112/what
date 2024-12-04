/*


[rewrite_local]
#VIP
https://api.fireflyau.com url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/yhc.js
#AD
^https:\/\/api\.fireflyau\.com\/apiApp\/pte\/other\/alertSet\/findOneByCode url reject
[mitm]
hostname = api.fireflyau.com
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const vip = '/apiApp/vip/userVip/isVip';
if (url.indexOf(vip) != -1) {  
  
obj.result.isVip=1;
obj.result.vipExpiry="4085641769000";
body = JSON.stringify(obj);
}
$done$({body});
