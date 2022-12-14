import useCryptoData from "../hooks/useCryptoData";

const CryptoItem = (props) => (
  <div className="card">
    <tr className="card.tr1">
        <td className="card.td1"> 
            <table height="141px" width="100%" border="0" cellspacing="0" cellpadding="0"> 
                <tbody> 
                    <tr> 
                        <td className="card.td2"><p className="card.td2.p">GRAND TOTAL</p> 
                            <table className="card.table1"> 
                                <tbody>
                                    <tr> 
                                        <td className="car.td3"><span>429</span>.<span className="span1">45</span> </td> 
                                        <td className="car.td4"> 
                                            <table className="card.table2"> 
                                                <tbody>
                                                    <tr> 
                                                        <td className="card.td5"> AED </td> 
                                                    </tr> 
                                                    <tr> 
                                                        <td className="card.td6"> incl. VAT </td> 
                                                    </tr> 
                                                </tbody>
                                            </table> 
                                        </td> 
                                    </tr> 
                                </tbody>
                            </table> 
                            <p className="card.p1"> PAY BEFORE <span>15 Aug 2022</span> </p> </td> 
                            <td style="background:#070707;margin:0;padding:0;vertical-align:top;text-align:right"> <img style="height:100%;width:314px;display:block" src="https://ci4.googleusercontent.com/proxy/MiZw9SJiiGtWwC-L-rjeMUz7k-sv-RW2864Ffo379Nc9FsICjYGUcoNB-3zVKAPK_TTwaOjmLrT4Ll_ujYiTHPLQ4qSWbEjTD0iK6EL-s8XLYK1l6VLNthYWlRa7hMORKOi7e1aSpExJyIEEiqVKz5oWZ-mzj6il6ZUDx3gdvSvwF2VX-5NatUqSuXi1Z0le=s0-d-e1-ft#https://www.etisalat.ae/en/system/wst/assets/img/emailimages/new-digital-bill-billing-notification/eand-digital-banner-bg.png" alt="" class="CToWUd" data-bit="iit"> </td> 
       </tr> 
      </tbody> 
     </table> 
        </td>
    </tr>
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