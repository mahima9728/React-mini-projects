import { useState } from "react"
import './ColorPicker.css'

function ColorPicker() {

  const [color, setColor] = useState('#FFFFFF')
  
  const handleColorChange = (event) => {
    setColor(event.target.value);
  }
  
  return (
    <div className="color-picker-container">
    <h1>Color Picker</h1>
    <div className="color-display" style ={{backgroundColor: color}}>
      <p>Selected Color { color}</p>
    </div>
    <label>Select a Color</label>
    <br/>
    <input type = 'color' value={color} onChange={handleColorChange}></input>

  </div>)
}

export default ColorPicker