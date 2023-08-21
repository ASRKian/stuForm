import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [stuName, SetStuName] = useState('')
  const [standard, SetStandard] = useState('')
  const [fatherName, SetFatherName] = useState('')
  const [motherName, SetMotherName] = useState('')
  const [address, SetAddress] = useState('')

  const handleChange = (e, setter) => {
    setter(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const actualData = {
        name: stuName,
        standard,
        fatherName,
        motherName,
        address
      }
      await axios.post('http://localhost:8000/add', actualData)
      SetStuName('')
      SetStandard('')
      SetFatherName('')
      SetMotherName('')
      SetAddress('')
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <form className='container mt-3 w-75' onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="stuName" className="form-label">Your Name</label>
        <input type="text" className="form-control" value={stuName} onChange={(e) => handleChange(e, SetStuName)} id="stuName" name='stuName' aria-describedby="stuName" />
      </div>
      <div className="mb-3">
        <label htmlFor="standard" className="form-label">Standard</label>
        <input type="number" className="form-control" value={standard} onChange={(e) => handleChange(e, SetStandard)} id="exampleInputEmail1" name='standard' aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="fName" className="form-label">Father's name</label>
        <input type="text" className="form-control" value={fatherName} onChange={(e) => handleChange(e, SetFatherName)}  id="fName" name='fName' aria-describedby="fName" />
      </div>
      <div className="mb-3">
        <label htmlFor="mName" className="form-label">Mother's name</label>
        <input type="text" className="form-control" value={motherName} onChange={(e) => handleChange(e, SetMotherName)}  id="mName" name='mName' aria-describedby="mName" />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Full address</label>
        <input type="text" className="form-control" id="address" value={address} onChange={(e) => handleChange(e, SetAddress)}  name='address' aria-describedby="address" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  )
}

export default App
