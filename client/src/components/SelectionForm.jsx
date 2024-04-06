import { useState } from "react"
import Input from "./Input"
import { useNavigate } from 'react-router-dom';

const SelectionForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [college, setCollege] = useState('IIT Kharagpur')
  const [year, setYear] = useState('1st')
  const [department, setDepartment] = useState('')
  const [cgpa, setCgpa] = useState(0)
  const [error, setError] = useState('')
  const navigate = useNavigate();


  const handleChange = (e, handler) => {
    handler(e.target.value)
  }

  const handleSubmit = () => {
    fetch('http://10.145.13.95:8000/v1/freshers/selection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, phone, college, year, department, cgpa })
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.error) {
          setError(data.error)
        } else {
          setError('your data has been recorded! thanks for submitting the form.')
          navigate('/selection/fresher/thanks')
        }
      })
      .catch(error => {
        setError(error.message)
      })
  }

  return (
    <div className="bg-gray-900 p-10 text-white h-dvh">
      <h1 className="text-2xl font-bold text-center	w-full text-green-300">Selection Form</h1>
      <div className="flex flex-col items-centre margin-0-auto">
        <Input type='text' name='Name' value={name} onChange={(e) => { handleChange(e, setName) }} />
        <Input type='email' name='Email' value={email} onChange={(e) => { handleChange(e, setEmail) }} />
        <Input type='text' name='Phone' value={phone} onChange={(e) => { handleChange(e, setPhone) }} />
        <Input type='text' name='College' value={college} onChange={(e) => { handleChange(e, setCollege) }} />
        <Input type='text' name='Year' value={year} onChange={(e) => { handleChange(e, setYear) }} />
        <Input type='text' name='Dep' value={department} onChange={(e) => { handleChange(e, setDepartment) }} />
        <Input type='number' name='CGPA' value={cgpa} onChange={(e) => { handleChange(e, setCgpa) }} />
      </div>
      <p>{error}</p>
      <button onClick={handleSubmit} className="bg-white text-gray-900 p-3 rounded font-bold">Submit</button>
    </div>
  )
}

export default SelectionForm;
