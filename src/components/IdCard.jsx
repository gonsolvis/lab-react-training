function IdCard({ lastName, firstName, gender, height, birth, picture }) {

    return (
        <>
        

        <div className="d-flex flex-row bd-highlight mb-3 border border-dark">
            <div className="p-2 bd-highlight">
                <img src={picture} alt="picture"/>
            </div>
            <div className="p-2 bd-highlight border border-dark w-100">
                <p> First name: {firstName}   </p>
                <p> Last name: {lastName} </p>
                <p> Gender: {gender}  </p>
                <p> Height: {height} </p>
                <p> Date of Birth: {birth}  </p>
            
            </div>




        </div>
</>        
    )
}
export default IdCard;