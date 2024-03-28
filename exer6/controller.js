import mongoose from 'mongoose';

await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase",{
    useNewUrlParser: true, useUnifiedTopology: true
});
 
const Student = mongoose.model('studentData',{
    stdnum : Number,
    fname: String,
    lname: String,
    age: Number
});

const homepage = (req,res) => {
    res.send('Welcome to the Homepage');
}


const saveStudent = async (req, res) => {
    const { stdnum, fname, lname, age } = req.body;

    const newStudent = new Student({
        stdnum: parseInt(stdnum), 
        fname, 
        lname, 
        age: parseInt(age)
    },{ versionKey: false });

    try {
        await newStudent.save(); 
        res.json({ inserted: true });
    } catch (error) {
        console.error('Error saving student:', error);
        res.json({ inserted: false, error: 
            'An error occurred while saving the student.' }); 
    }
}

const update = async (req, res) => {
    const { fname, newValues } = req.body;

    try {
        const existingStudent = await Student.findOne({ fname: fname });

        if (existingStudent) {
            await Student.updateOne({ fname: fname }, { $set: newValues });
            res.json({ updated: true });
        } else {
            res.json({ updated: false, error: `Student with fname '${fname}' not found` });
        }
    } catch (error) {
        console.error('Error updating student:', error);
        res.json({ updated: false, error: 'An error occurred while updating the student' });
    }
}
const removeUser = async (req,res) =>{
    const {toDelete} = req.body;
    try {
        const existingStudent = await Student.findOne(toDelete);

        if (existingStudent) {
            await Student.deleteOne(toDelete);
            res.json({ deleted: true });
        } else {
            res.json({ deleted: false, error: `Student to delete not found` });
        }
    } catch (error) {
        console.error('Error deleting student:', error);
        res.json({ deleted: false, error: 'An error occurred while deleting the student' });
    }
}

const removeAllUser = async (req,res) => {
    const result = await Student.deleteMany({});
    if (result.deletedCount > 0) {
        res.json({ deleted: true });
    } else {
        res.json({ deleted: false });
    }
}

const user = async (req, res) => {
    const queryParams = req.query;

    try {
        const existingStudent = await Student.findOne(queryParams);

        if (existingStudent) {
            res.json(existingStudent);
        } else {
            res.json({ error: 'No student found' });
        }
    } catch (error) {
        console.error('Error searching students', error);
        res.json({ error: 'An error occurred while finding students' });
    }
};

const members = async (req,res) =>{
    try {
        const allStudents = await Student.find({});
        res.json(allStudents);
    }catch (error) {
        console.error('Error searching students', error);
        res.json({ error: 'An error occurred while finding students' });
    }
};

export {saveStudent, update, removeUser, removeAllUser, user, members, homepage}