import {homepage, findStudents, findStudentsPost} from './controller.js'


const router = (app) =>{
    app.get('/',homepage);
    app.get('/find-students',findStudents);
    app.post('/find-students-post',findStudentsPost)
}



export default router;