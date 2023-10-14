import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  var count=0;
  const word = message.split(" ");
  const handleMessageChange = event => {
    setMessage(event.target.value);
    count=word.length;
    (event.target.value==="")?document.getElementById("count").innerHTML=0:document.getElementById("count").innerHTML=count;
    import logo from './logo.svg';
    import './App.css';
    import { useState } from 'react';
    
    function App() {
      const [message, setMessage] = useState('');
      var count=0;
      const word = message.split(" ");
      const handleMessageChange = event => {
        setMessage(event.target.value);
        count=word.length;
        (event.target.value==="")?document.getElementById("count").innerHTML=0:document.getElementById("count").innerHTML=count;
      };
      return (
        <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
            <div className="shadow-lg w-50 p-3 mb-5 bg-white rounded m-auto mt-5">
                <div className="form-group">
                    <h1>Responsive Paragraph Word Counter</h1>
                    <textarea className="form-control" 
                    id="message"
                    name="message" 
                    value={message}
                    onChange={handleMessageChange}
                    rows="3"></textarea>
                </div>
                <div>
                    <p className="text-muted mt-3">Word count: <span id="count"></span></p>
                </div> 
            </div>
        </div>
      );
    }
    
    export default App;
  return (
    <div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
        <div className="shadow-lg w-50 p-3 mb-5 bg-white rounded m-auto mt-5">
            <div className="form-group">
                <h1>Responsive Paragraph Word Counter</h1>
                <textarea className="form-control" 
                id="message"
                name="message" 
                value={message}
                onChange={handleMessageChange}
                rows="3"></textarea>
            </div>
            <div>
                <p className="text-muted mt-3">Word count: <span id="count"></span></p>
            </div> 
npm        </div>
    </div>
  );
}

export default App;