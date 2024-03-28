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


// const saveStudent = (req, res) =>{
//     const {stdnum, fname, lname, age} = req.query;

//     const newStudent = new Student({
//         stdnum: parseInt(stdnum), 
//         fname, 
//         lname, 
//         age: parseInt(age)
//     });

//     newStudent.save();

// }


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


export {saveStudent, homepage}