
function Rating({children}) {




    let stars = Math.round(children) 

    return (
        <>
    <div className="">
 {stars == 0 && <p><i class="fa-sharp fa-regular fa-star"></i><i class="fa-sharp fa-regular fa-star"></i><i class="fa-sharp fa-regular fa-star"></i><i class="fa-sharp fa-regular fa-star"></i><i class="fa-sharp fa-regular fa-star"></i></p>}
 {stars == 1 && <p><i class="fa-solid fa-star"></i><i class="fa-sharp fa-regular fa-star"></i><i class="fa-sharp fa-regular fa-star"></i><i class="fa-sharp fa-regular fa-star"></i><i class="fa-sharp fa-regular fa-star"></i></p>}
 {stars == 2 && <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-sharp fa-regular fa-star"></i><i class="fa-sharp fa-regular fa-star"></i><i class="fa-sharp fa-regular fa-star"></i></p>}
 {stars == 3 && <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-sharp fa-regular fa-star"></i><i class="fa-sharp fa-regular fa-star"></i></p>}
 {stars == 4 && <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-sharp fa-regular fa-star"></i></p>}
 {stars == 5 && <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>}
 
                
                
                                
                
                
                
                
                
                
                
                
                 </div>



        </>
    )
}
export default Rating;    
//<i class="fa-solid fa-star"></i>
//<i class="fa-sharp fa-regular fa-star">
