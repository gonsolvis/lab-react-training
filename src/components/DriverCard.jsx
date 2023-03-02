
function DriverCard({ name, rating, img, car }) {

    let solidStr = <i class="fa-solid fa-star"></i>
    let emptyStr = <i class="fa-sharp fa-regular fa-star"></i>
    let stars = Math.round(rating)





    return (
        <>
            <div className="rounded d-flex flex-row justify-content-center w-50 m-2" style={{ backgroundColor: 'rgb(0, 0, 255)' }}>
                <div className="d-flex flex-row justify-content-end "> <img src={img} alt="picture" className="rounded-circle w-10" height={150} width={150} />    </div>
                <div className="d-flex flex-column m-3 " style={{ color: 'rgb(255,255,255)' }}>
                    <h1> {name} </h1>

                    {stars == 0 && <p>{emptyStr}{emptyStr}{emptyStr}{emptyStr}{emptyStr}</p>}
                    {stars == 1 && <p>{solidStr}{emptyStr}{emptyStr}{emptyStr}{emptyStr}</p>}
                    {stars == 2 && <p>{solidStr}{solidStr}{emptyStr}{emptyStr}{emptyStr}</p>}
                    {stars == 3 && <p>{solidStr}{solidStr}{solidStr}{emptyStr}{emptyStr}</p>}
                    {stars == 4 && <p>{solidStr}{solidStr}{solidStr}{solidStr}{emptyStr}</p>}
                    {stars == 5 && <p>{solidStr}{solidStr}{solidStr}{solidStr}{solidStr}</p>}


                    <br />
                    <p>  {car.model} - {car.licensePlate}  </p>
                </div>
            </div>



        </>
    )
}
export default DriverCard
    ;

