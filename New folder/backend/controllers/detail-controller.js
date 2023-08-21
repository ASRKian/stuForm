import details from "../model/StudentModel.js"

export const newStudent = async (req, res) => {
    try {
        const newStu = new details(req.body)
        const data = await newStu.save()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error)
        console.log(error);
    }
}