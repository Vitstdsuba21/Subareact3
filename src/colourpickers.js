import React, { useState } from "react";

function ColorPicker() {
  const [elements, setElements] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [containerStyle, setContainerStyle] = useState({});

  const handleButtonClicked = () => {
    setElements(['red', 'grey', 'orange', 'yellow', 'green', 'pink', 'blue', 'aqua', 'purple', 'brown', 'yellowgreen', 'blueviolet']);
    setButtonClicked(true);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setButtonClicked(false);
    setContainerStyle({
      backgroundColor: color,
      width: "1200px",  
      height: "500px", 
      margin: "10px auto", 
      // display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop:"-190px",
      borderRadius:"20px",
      boxShadow:"0px 0px 20px rgba(0,0,0,0.5)",
    });
  }

  return (
   
    <div className="colorPicker">
      <h1>Color Picker</h1>
      <div style={containerStyle}>
        <div className="container">
          {buttonClicked && (
            <div>
              {elements.map((color, index) => (
                <div
                  key={index}
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: color,
                    margin: '5px',
                    display: 'inline-block',
                    cursor: "pointer",
                    boxShadow: "2px 2px 5px grey",
                    marginTop:'40px',
                  }}
                  onClick={() => handleColorClick(color)}
                >
                </div>
              ))}
            </div>
          )}
        </div>
        <button onClick={handleButtonClicked} style={{position:"center",justifyContent:"center",alignItems:"center",margin:"10px auto"}}>Pick a Color</button>
      </div>
    </div>
  );
}

export default ColorPicker;