'use strict';
/**
 * 此函数为数据库操作函数
 */
const uniID = require('uni-id');
const db = uniCloud.database();
// const collection = db.collection('');
exports.main = async (event, context) => {
	// const res = await collection.where({
	// 	name: '第一个话题'
	// }).get()
	const res = await uniID.addRole({
		roleID: '3',
		roleName: "商户",
		comment: "商户账号",
		permission: [3]
	})
	// const res = await uniID.addPermission({
	// 	permissionID: '3',
	// 	permissionName: "商户",
	// 	comment: "商户账号"
	// })
	// const res = await uniID.bindRole({
	// 	uid: '9de454c45fb201e200bd538719d09220',
	// 	roleList: [1],
	// 	reset: true
	// })
	// const result = await collection.count()
	// console.log(result,result.total);
	// console.log(result.total+1);
	//event为客户端上传的参数
	// console.log('event : ', event)
	// const pageSize = 15;
	// const page = 2
	// const result = await collection.skip(page * pageSize).limit(pageSize).orderBy("name", 'asc').get();
	// let result = await collection.where({

	// }).get();
	// // res.data.map(async(document) => {
	// // 	console.log(document);
	// //   return await collection.doc(document._id).remove();
	// // });
	// console.log(JSON.stringify(result));
	// const res = await collection.where({
	// 	username: 'admin'
	// }).field({
	// 	my_invite_code: true
	// }).get()
	// console.log(res.data[0].myInviteCode);
	// const res = await uniID.sendSmsCode({
	// 	mobile: '13683656716',
	// 	templateId: "10083",
	// 	code: '123456',
	// 	type: 'login',
	// })
	// res = await uniID.loginByWeixin('0812KX0w30SbhV2jkE0w3Zqy3r22KX0P')
	// const res = await uniCloud.sendSms({
	// 	smsKey: '5d94035c55f67ae32cd1966798406b64',
	// 	smsSecret: '0104d42565d44ac6798552405524d22a',
	// 	phone: '13683656716',
	// 	templateId: "10083",
	// 	data: {
	// 		name: '注册模版',
	// 		code: '123456',
	// 		action: '注册',
	// 		expMinute: '3',
	// 	}
	// })
	// 调用成功，请注意这时不代表发送成功
	// return res

	//返回数据给客户端
	return res
};
