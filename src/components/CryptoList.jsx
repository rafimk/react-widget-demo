import useCryptoData from "../hooks/useCryptoData";

var aesjs = require('aes-js');

var txtUserName = "testUser";  
var txtpassword = "testPassword"; 

var key = CryptoJS.enc.Utf8.parse('8080808080808080');  
var iv = CryptoJS.enc.Utf8.parse('8080808080808080'); 

var encryptedlogin = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(txtUserName), key,  
{
   keySize: 128 / 8,   
   iv: iv,  
   mode: CryptoJS.mode.CBC,  
   padding: CryptoJS.pad.Pkcs7 
}); 

var encryptedpassword = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(txtpassword), key,  
{ 
   keySize: 128 / 8,   
   iv: iv,  
   mode: CryptoJS.mode.CBC,  
   padding: CryptoJS.pad.Pkcs7
});  
  


const CryptoItem = (props) => (
  <div className="item">
    <img src={props.ImageUrl} className="icon" alt={props.Name} />
    <div className="display-container">
      <div className="name">{props.Name}</div>
      <div className="fullname">{props.FullName}</div>
    </div>
    <div className="price-container">
      <div className="price">{props.Price}</div>
      <div
        className={`price-change ${
          parseInt(props.Change24hr) < 0 ? "danger" : "success"
        }`}
      >
        {props.Change24hr && `${props.Change24hr}%`}
      </div>
    </div>
  </div>
);

const CryptoList = () => {
  const { cryptoData, isLoading } = useCryptoData();
  return (
    <div>
      <div className="container">
        {!isLoading ? (
          cryptoData.map((itemData) => (
            <CryptoItem key={itemData.Id} {...itemData} />
          ))
        ) : (
          <p className="loading-text">Loading Data...</p>
        )}
      </div>
    </div>
  );
};

export default CryptoList;