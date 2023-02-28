function BoxColor({ r,g,b}) {

    return (
        <>
        <div className="p-5 m-2 w-90 text-center p-2 bd-highlight border border-dark" style={{ backgroundColor: `rgb(${r},${g},${b})`}}>
<p className="font-weight-bold" > {r},{g},{b} </p>   </div>
        

      
</>        
    )
}
export default BoxColor;    