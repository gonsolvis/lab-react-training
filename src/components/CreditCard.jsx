import vcard from '../assets/images/visa.png';
import mcard from '../assets/images/master-card.svg';

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

    const maskedNumber = number.slice(0, -4).replace(/./g, '*') + number.slice(-4);

let image =""
if(type === "Visa") image = vcard;
else image = mcard;

    return (
        <>
            <div id="backgroundContainer" className="d-flex flex-row   bd-highlight mb-3 border border-dark m-3 h-60 p-5" >
                <div id="individualCard" className="d-flex flex-column  h-100 p-5" style={{ backgroundColor: `${bgColor}`,color: `${color}`}}>
                <div id="Header"className="d-flex flex-row ">    </div>
                    <div id="visa"className="d-flex flex-row justify-content-end "> <img src={image} alt="picture" id="cardImages"/>    </div>
                        
                        <div id="Header"className="d-flex flex-row "> 
                        <h1> {maskedNumber} </h1>  </div>


                        <p id="expirayText"> Expires {expirationMonth}/{expirationYear}  {bank} <br /> {owner}</p> 
                    


                   

                </div>

            </div>




        </>







    )
}
export default CreditCard;