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
    const { fname, new_lname } = req.body;

    try {
        const existingStudent = await Student.findOne({ fname: fname });

        if (existingStudent) {
            await Student.updateOne({ fname: fname }, { $set: { lname: new_lname } });
            res.json({ updated: true });
        } else {
            res.json({ updated: false, error: `Student with fname '${fname}' not found` });
        }
    } catch (error) {
        console.error('Error updating student:', error);
        res.json({ updated: false, error: 'An error occurred while updating the student' });
    }
}



export {saveStudent, update, homepage}