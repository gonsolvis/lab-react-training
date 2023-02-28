
function DriverCard({name,rating,img, car}) {




 

    return (
        <>
      <div id="backgroundContainer" className="d-flex flex-row   bd-highlight mb-3 border border-dark m-3 h-60 p-5" >
                <div id="individualCard" className="d-flex flex-column  h-100 p-5">
                <div id="Header"className="d-flex flex-row ">    </div>
                    <div id="visa"className="d-flex flex-row justify-content-end "> <img src={img} alt="picture" id="cardImages"/>    </div>
                        
                        <div id="Header"className="d-flex flex-row "> 
                        <h1> {name} </h1>  </div>


                        <p id="expirayText"> Expires {rating}/{car.model}{car.licensePlate}  </p> 
                    

           
                
                                
                
                
                
                
                
                
                
                
                 </div>



        </>
    )
}
export default DriverCard
;    

