function Random({ min, max}) {

    let result = Math.floor(Math.random() * (max - min + 1) + min)

    return (
        <>
            <div className="p-2 bd-highlight border border-dark w-100">
                <p> Random value between {min} and {max}  {result}   </p>


            </div>

        </>
    )
}
export default Random;