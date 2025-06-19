var body = $response.body;
var obj = JSON.parse(body);




obj.value.vips = ["普通会员","黄金会员"];
obj.value.vip="黄金会员";

body = JSON.stringify(obj);
$done( {body} );
