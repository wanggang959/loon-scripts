var body = $response.body;
var obj = JSON.parse(body);




obj.vip_state = 2;
obj.vip_valid_till_date = '2099年12月30日';
obj.vip_free_tasks[3].accomplished = 0;

body = JSON.stringify(obj);
$done( {body} );