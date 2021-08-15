import React, { useEffect } from "react"
import { useImmer } from "use-immer"
import axios from "axios"

function ViewDevices() {
  const [devices, setDevices] = useImmer()

  return (
    <div>
      <h1>Devices</h1>
      <h2>test</h2>
    </div>
  )
}

export default ViewDevices
