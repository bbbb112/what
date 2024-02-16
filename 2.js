[rewrite_local]

# ～ RevenueCat@ddgksf2013
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-echo-response https://raw.githubusercontent.com/bbbb112/what/main/2.js
^https:\/\/api\.revenuecat\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

[mitm]

hostname=api.revenuecat.com

***********************************/




// ========= 动态ID ========= //
const mapping = {
  
  'Speak': ['premium']
};

// =========    固定部分  ========= // 
// =========  @ddgksf2021 ========= // 
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],cuttlefish={Attention:"恭喜你抓到元数据！由墨鱼分享，请勿售卖或分享他人！",request_date_ms:1662599120248,request_date:"2022-09-08T01:05:20Z",subscriber:{non_subscriptions:{},first_seen:"2022-09-08T01:04:03Z",original_application_version:"8",other_purchases:{},management_url:"https://apps.apple.com/account/subscriptions",subscriptions:{},entitlements:{},original_purchase_date:"2022-09-07T13:05:43Z",original_app_user_id:"$RCAnonymousID:ddgksf2013",last_seen:"2022-09-08T01:04:03Z"}},ddgksf2013={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2099-12-18T01:04:17Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2022-09-08T01:04:18Z",purchase_date:"2022-09-08T01:04:17Z",store:"app_store"},ddgksf2021={grace_period_expires_date:null,purchase_date:"2022-09-08T01:04:17Z",product_identifier:"ddgksf2013_1y_128",expires_date:"2099-12-18T01:04:17Z"},obj=JSON.parse(JSON.stringify(cuttlefish));ddgksf2021.product_identifier="com.ddgksf2013.premium.yearly",obj.subscriber.subscriptions["com.ddgksf2013.premium.yearly"]=ddgksf2013;const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s&&(ddgksf2021.product_identifier=s,obj.subscriber.subscriptions[s]=ddgksf2013),obj.subscriber.entitlements[e]=ddgksf2021}else obj.subscriber.entitlements.pro=ddgksf2021;$done({body:JSON.stringify(obj)});


