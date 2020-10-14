// export const SERVER = 'https://admin.ressortir.com/api/';
export const SERVER = 'http://localhost:8000/api/';

const EndPoints = SERVER;

export const REGISTER = EndPoints + "register";

export const LOGIN = EndPoints + "login";

export const CREATE_ORDER = `${EndPoints}orders`;
export const ALL_ORDERS = `${EndPoints}orders/all`;
export const GET_TASK = `${EndPoints}tasks/all`;
export const SHOW_TASK = (id) => `${EndPoints}order/${id}`;
export const SHOW_TASK_COMMENTS = (id) => `${EndPoints}tasks/comments/${id}`;
export const SEND_COMMENT =  `${EndPoints}comment`;

export const DASHBOARD = `${EndPoints}dashboard`;
export const RESEND_VERIFICATION = `${EndPoints}verification-mail`;
export const UPDATE_PROFILE = `${EndPoints}user/update`;
export const UPDATE_DETAILS = `${EndPoints}user/update/details`;
export const UPDATE_PASSWORD = `${EndPoints}update/password`;

export const RESET_PASSWORD = EndPoints + "password/reset";
export const FORGOT_PASSWORD = EndPoints + "password/forgot";
export const FIND_PASSWORD_TOKEN = (token) => `${EndPoints}password/find/${token}`;
export const PROFILE_DETAILS = `${EndPoints}user`;

