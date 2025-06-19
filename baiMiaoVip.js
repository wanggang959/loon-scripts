var body = $response.body;
var obj = JSON.parse(body);




obj.value.vips = [1,2];
obj.value.vip=2;

body = JSON.stringify(obj);
$done( {body} );
