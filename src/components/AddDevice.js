import React from "react"
import axios from "axios"
import { useImmer } from "use-immer"
import { useSelector, useDispatch } from "react-redux"

import { getAllDevices } from "../store/reducers/devices/deviceSlice"

function AddDevice() {
  const dispatch = useDispatch()
  const [formData, setFormData] = useImmer({
    department: "",
    user: "",
    brand: "",
    model: "",
    deviceName: "",
    serialNum: "",
    yearOfPurchase: null,
    status: "",
    dateIssued: null,
    dateReturned: null,
    offCampusForm: null
  })
  const [isFilePicked, setIsFilePicked] = useImmer(false)

  const onInputChange = e => {
    const name = e.target.name
    setFormData(draft => {
      draft[name] = e.target.value
    })
  }

  const onFileChange = e => {
    const file = e.target.files[0]
    setFormData(draft => {
      draft.offCampusForm = file
    })
    setIsFilePicked(true)
  }

  const onFormSubmit = async e => {
    e.preventDefault()
    const newFormData = new FormData()
    for (const key in formData) {
      if (formData[key] != null) {
        newFormData.append(key, formData[key])
      }
    }
    try {
      const data = await axios.post(
        "http://localhost:3000/devices/add",
        newFormData
      )
      console.log(data)
      dispatch(getAllDevices())
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor='department'>Department: </label>
      <select name='department' id='' onChange={onInputChange}>
        <option value='test'>test</option>
        <option value='test2'>test2</option>
      </select>
      <label htmlFor='user'>User: </label>
      <input type='text' name='user' id='' onChange={onInputChange} />
      <label htmlFor='brand'>Brand: </label>
      <input type='text' name='brand' id='' onChange={onInputChange} />
      <label htmlFor='model'>Model: </label>
      <input type='text' name='model' id='' onChange={onInputChange} />
      <label htmlFor='deviceName'>Device Name: </label>
      <input type='text' name='deviceName' id='' onChange={onInputChange} />
      <label htmlFor='serialNum'>Serial Number: </label>
      <input type='text' name='serialNum' id='' onChange={onInputChange} />
      <label htmlFor='yearOfPurchase'>Year Of Purchase: </label>
      <input type='date' name='yearOfPurchase' id='' onChange={onInputChange} />
      <label htmlFor='status'>Status: </label>
      <select name='status' id='' onChange={onInputChange}>
        <option value=''>with IT Services</option>
      </select>
      <label htmlFor='dateIssued'>Date Issued: </label>
      <input type='date' name='dateIssued' id='' onChange={onInputChange} />
      <label htmlFor='dateReturned'>Date Returned: </label>
      <input type='date' name='dateReturned' id='' onChange={onInputChange} />
      <label htmlFor='offCampusForm'>Off-Campus Form: </label>
      <input type='file' name='offCampusForm' id='' onChange={onFileChange} />
      <button>Submit</button>
    </form>
  )
}

export default AddDevice
