import {db} from '../../../config';
import {CustomerService} from '../../../services';
import {Helper, json} from '../../../utils';
import {
	ALL_CHAT, CHAT_COUNT, CHAT_ID, CREATE_CHAT, GET_CHATS, POST_CHAT,
	SEND_NOTIFICATION, NOTIFICATION_TOKEN
} from "./types";

export const setNewMessage = (res) => (dispatch) => {
	dispatch({
		type: CREATE_CHAT,
		payload: res
	});
};

export const setNotificationTokens = (tokens) => (dispatch) => {
	dispatch({
		type: NOTIFICATION_TOKEN,
		payload: tokens
	});
};


export const setChatList = (messages) => (dispatch) => {
	dispatch({
		type: GET_CHATS,
		payload: messages
	});
};


export const setAllChatList = (allChat) => (dispatch) => {
	dispatch({
		type: ALL_CHAT,
		payload: allChat
	});
};


export const setChatId = (id) => (dispatch) => {
	dispatch({
		type: CHAT_ID,
		payload: id
	});
};


export const setPostNewMessage = (message) => (dispatch) => {
	dispatch({
		type: POST_CHAT,
		payload: message
	});
};

export const setChatCount = (count) => (dispatch) => {
	dispatch({
		type: CHAT_COUNT,
		payload: count
	});
};

export const createChat = (data, callback) => (dispatch, getState) => {
	// const {laundryId, orderId, customer_uid, customer_name, status, counter} = getState().Order.order;
	// let chatRef = db.database().ref('chat').push();
	// let res = {
	// 	messages: [{...data, id: '0'}],
	// 	chatKey: chatRef.key,
	// 	orderId,
	// 	laundryId,
	// 	customer_uid,
	// 	status,
	// 	read_counter: 1,
	// 	customer_name,
	// 	order_counter: counter,
	// };
	// chatRef.set(res);
	// dispatch(setNewMessage(res));
	// dispatch(setChatId(chatRef.key));
	// callback();
};

export const postChat = (data, orderId, callback) => async (dispatch, getState) => {
	// if (data.file) {
	// 	const mainImage = db.storage().ref('chat').child(`${data.file.name}`);
	// 	const response = await fetch(data.file.uri)
	// 	const blob = await response.blob()
	//
	// 	mainImage.put(blob).then(res => {
	// 		mainImage.getDownloadURL().then(url => {
	//
	// 			let newData = {...data, file: url};
	// 			dispatch(addChat(newData, orderId, callback))
	//
	// 		}, error => console.log(error))
	//
	// 	}).catch(error => console.log(error))
	//
	// } else {
	// 	dispatch(addChat(data, orderId, callback))
	// }
};


export const sendNotification = (data) => {
	// return dispatch => {
	// 	return axios.post('https://exp.host/--/api/v2/push/send', data, {
	// 		headers: {
	// 			'host': 'exp.host',
	// 			'accept': 'application/json',
	// 			'accept-encoding': 'gzip, deflate',
	// 			'content-type': 'application/json'
	// 		}
	// 	})
	// 		.then(res => {
	// 			// console.log(res)
	// 			dispatch({
	// 				type: SEND_NOTIFICATION,
	// 				payload: res
	// 			})
	// 		}).catch(error => {
	// 			console.log(error.response, 'notify err')
	// 		})
	// }
}


export const addChat = (data, orderId, callback) => (dispatch, getState) => {
	// const {chatList} = getState().Chat;
	//
	// if (Helper.isEmpty(chatList)) {
	// 	return dispatch(createChat(data, callback));
	// }
	// const {chatId} = getState().Chat;
	//
	// let chatRef = db.database().ref(`chat/${chatId}/messages`).push();
	// let res = {...data, id: chatRef.key};
	// chatRef.set(res);
	// chatList.push(res);
	// dispatch(setChatList(chatList));
	// callback();
};

export const getChat = (orderId, successfulCallBack) => (dispatch) => {
	// const URL = `${db.database().ref('chat')}${json}?orderBy=%22orderId%22&equalTo=%22${orderId}%22`;
	//
	// fetch(URL).then(r => r.json()).then(res => {
	// 	console.log(res);
	// 	let messages = [];
	// 	if (res) {
	//
	// 		const keys = Object.keys(res);
	// 		const values = Object.values(res);
	//
	// 		dispatch(setChatId(keys[keys.length - 1]));
	// 		if (!Helper.isEmpty(values)) {
	// 			dispatch(setChatCount(values[values.length - 1].read_counter || 0));
	// 			values.map(item => {
	// 				if (!Helper.isEmpty(item.messages)) {
	// 					Object.values(item.messages).map(message => messages = [...messages, message])
	// 				}
	// 			});
	// 		}
	// 		dispatch(setChatList(messages));
	// 		if (typeof successfulCallBack === 'function') successfulCallBack()
	//
	// 	}
	// }).catch(e => console.log(e));
};


export const getAllChat = (successfulCallback = null) => (dispatch, getState) => {
	// const laundryId = getState().Login.uid;
	// const URL = `${db.database().ref('chat')}${json}?orderBy=%22laundryId%22&equalTo=%22${laundryId}%22`;
	// fetch(URL).then(r => r.json()).then(res => {
	// 	if (res) {
	// 		let allMsg = [];
	// 		if (typeof res === 'object' || res.constructor === Array) {
	// 			let messages = Object.values(res);
	// 			messages.map(msg => {
	// 				if (msg.hasOwnProperty('status') && msg.status !== 11) {
	// 					allMsg = [...allMsg, msg];
	// 				}
	// 			});
	// 		}
	//
	// 		dispatch(setAllChatList(allMsg));
	// 		if (typeof successfulCallback === 'function') successfulCallback();
	// 	}
	// }).catch(e => console.log(e));
};

export const updateChatDetails = (chatId, data, successCallback) => (dispatch, getState) => {
	// LaundryService.update({
	// 	...data
	// });
	// if (typeof successCallback === 'function') successCallback();
};

export const updateOrderChat = (orderId, data, successCallback) => (dispatch, getState) => {
	// LaundryService.update({
	// 	...data
	// });
	// if (typeof successCallback === 'function') successCallback();
};


export const chatListener = (orderId, successCallback) => (dispatch) => {
	// db.database().ref(`chat`)
	// 	.orderByChild('orderId')
	// 	.equalTo(orderId)
	// 	.on('child_changed', (snapshot, prevChild) => {
	// 		let allMsg = [];
	// 		if (snapshot) {
	// 			dispatch(setChatCount(snapshot.val().read_counter || 0));
	// 			Object.values(snapshot.val().messages || {}).map(item => {
	// 				allMsg = [...allMsg, item]
	// 			});
	// 			dispatch(setChatList(allMsg));
	// 			successCallback(allMsg);
	// 		}
	//
	// 	}, error => console.log(error))

};

export const allChatListener = () => (dispatch, getState) => {
	// const laundryId = getState().Login.uid;
	// db.database().ref(`chat`)
	// 	.orderByChild('laundryId')
	// 	.equalTo(laundryId)
	// 	.on('child_changed', (snapshot, prevChild) => {
	// 		if (snapshot) {
	// 			dispatch(setAllChatList(snapshot.val()));
	// 		}
	// 	}, error => console.log(error))

};

export const chatNotification = (callBack) => {
	// return (dispatch, getState) => {
	// 	return db.database().ref('chat')
	// 		.orderByChild('customer_uid')
	// 		.equalTo(getState().VerifyMobile.uid)
	// 		.on('child_changed', snapshot => {
	// 			let allMsg = []
	// 			Object.values(snapshot.val().messages || {}).map(item => {
	// 				allMsg = [...allMsg, item]
	// 			});
	// 			if (allMsg[allMsg.length - 1].type !== 'user') {
	// 				db.database().ref(`laundries/${snapshot.val().laundryId}`)
	// 					.once('value')
	// 					.then(laundry => {
	// 						callBack({
	// 							msg: allMsg[allMsg.length - 1],
	// 							orderId: snapshot.val().orderId,
	// 							laundryName: laundry.laundryName
	// 						})
	// 					}).catch(error => console.log(error))
	// 			}
	// 		})
	// }
};

export const getCustomerToken = () => (dispatch, getState) => {
	// const {customer_uid} = getState().Order.order;
	// CustomerService.findById(customer_uid, (customer) => {
	// 	// store customer details
	//
	//
	// }, e => console.log(e))
};
