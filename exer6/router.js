import {saveStudent, update, removeUser, removeAllUser, user, members, homepage} from './controller.js'


const router = (app) =>{
    app.get('/', homepage);

    app.post('/save-student',saveStudent);
    app.post('/update',update);
    app.post('/remove-user',removeUser);
    app.post('/remove-all-user', removeAllUser);
    app.get('/user',user)
    app.get('/members',members);

}



export default router;