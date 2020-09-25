import {CHAT_COUNT, CHAT_ID, GET_CHATS, NEW_MSG, POST_CHAT, ALL_CHAT, NOTIFICATION_TOKEN} from "./types";

const initialState = {
	chatList: [],
	postRes: null,
	chatLaundry: [],
	chatId: '',
	new_chat_count: 0,
	allChatList: [], 
	notification_tokens: [],
};


export default (state = initialState, action) => {
	switch (action.type) {
		case POST_CHAT:
			return {
				...state,
				postRes: action.payload
			};
		case GET_CHATS:
			return {
				...state,
				chatList: action.payload,
			};
		case ALL_CHAT:
			return {
				...state,
				allChatList: action.payload,
			};
		case CHAT_ID:
			return {
				...state,
				chatId: action.payload,
			};
		case NOTIFICATION_TOKEN:
			return {
				...state,
				chatId: action.payload,
			};
		case CHAT_COUNT:
			return {
				...state,
				new_chat_count: Number(action.payload),
			};
		case NEW_MSG:
			return state.chatList ? {...state, chatList: [...state.chatList, action.payload]} : state;
		default:
			return state
	}
}