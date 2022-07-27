import React, {useState, useEffect,} from "react"
import QRCode from "qrcode";
import '../Addtoform.css';

const Addtoform= () => {
  
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
     e.preventDefault();
     
    }

    const [src, setSrc] = useState('');
   
    useEffect(() => {
     QRCode.toDataURL(text).then((data) => {
         setSrc(data);
     });

     
  
    }, [text]);

return (
    <div className="container">
        <div>
        <h2 className="QRmsg"> Your QR code</h2>
    <p className="QRtext">{text}</p>
    <img className="QRimg" src={src}  />
    
    <form onSubmit={handleSubmit}>
    <input  className="QRinput" placeholder="Enter your text"  value={text} required onChange={(e) => setText(e.target.value)}/>
    </form>
    <button className="Reloadbtn" onClick={() => window.location.reload()}>↻</button>
    </div>
    </div>
   );
 };

export default Addtoform ;