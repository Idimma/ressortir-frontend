import {
    ALL_TASK,
    CREATE_TASK,
    RESEND_VERIFICATION,
    SEND_COMMENT,
    SHOW_TASK,
    SHOW_TASK_COMMENTS,
} from '../utils/EndPoints';
import Request from "../utils/Request";

class AppService {
    createTask = form_data => Request().post(CREATE_TASK, form_data);
    allTask = () => Request().get(ALL_TASK);
    getSingleTask = id => Request().get(SHOW_TASK(id));
    updateSingleTask = (id, form_data) => Request().post(SHOW_TASK(id), form_data);
    deleteSingleTask = id => Request().delete(SHOW_TASK(id));
    getTaskComments = id => Request().get(SHOW_TASK_COMMENTS(id));

    resendVerification = () => Request().get(RESEND_VERIFICATION);
    sendComment = (formData) => Request().post(SEND_COMMENT, formData);
}

export default new AppService();
