var body = $response.body;
var obj = JSON.parse(body);




obj.value.recognize =  {
			"remainBatch": -100,
			"batchCount": 1,
			"recognizeTranslateAll": 1,
			"translateCount": 3,
			"remainPdfTranslateCount": 0,
			"pdfTranslateCount": 0,
			"remainNormal": -100,
			"userId": 15868444,
			"pdfCount": 0,
			"remainPdfTransCount": 0,
			"balanceCount": 0,
			"shareCount": 3,
			"remainTranslate": -100,
			"remainShare": 3,
			"normalCount": -100
		};
obj.value.vips =  [{
			"boughtType": "new",
			"id": 486779,
			"createdTime": 1704353800,
			"levelSeq": 2,
			"boughtUnit": "year",
			"levelId": 2,
			"userId": 15868444,
			"boughtDuration": 10,
			"boughtTime": 1704353800,
			"orderId": 744437,
			"operatorId": 0,
			"level": {
				"isSubscribe": 0,
				"maxRate": 100,
				"monthPrice": 0.02,
				"recognizeNormal": -100,
				"yearPrice": 40,
				"upgradeSubscribePrice": 0,
				"picture": "",
				"icon": "",
				"gived": 0,
				"recognizeTranslateAll": 1,
				"pdfTranslateCount": 0,
				"name": "黄金会员",
				"createdTime": 1429260383,
				"id": 2,
				"enabled": 1,
				"recognizeBatch": -100,
				"seq": 2,
				"pdfTransCount": 0,
				"recognizeTranslate": -100,
				"description": ""
			},
			"deadlineNotified": 0,
			"deadline": 2020003199,
			"boughtAmount": 40
		}];
obj.value.vip = {
			"boughtType": "new",
			"id": 486779,
			"createdTime": 1704353800,
			"levelSeq": 2,
			"boughtUnit": "year",
			"levelId": 2,
			"userId": 15868444,
			"boughtDuration": 10,
			"boughtTime": 1704353800,
			"orderId": 744437,
			"operatorId": 0,
			"level": {
				"isSubscribe": 0,
				"maxRate": 100,
				"monthPrice": 0.02,
				"recognizeNormal": -100,
				"yearPrice": 40,
				"upgradeSubscribePrice": 0,
				"picture": "",
				"icon": "",
				"gived": 0,
				"recognizeTranslateAll": 1,
				"pdfTranslateCount": 0,
				"name": "黄金会员",
				"createdTime": 1429260383,
				"id": 2,
				"enabled": 1,
				"recognizeBatch": -100,
				"seq": 2,
				"pdfTransCount": 0,
				"recognizeTranslate": -100,
				"description": ""
			},
			"deadlineNotified": 0,
			"deadline": 2020003199,
			"boughtAmount": 40
		};

body = JSON.stringify(obj);
$done( {body} );
