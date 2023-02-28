function Greetings({ lang, children}) {

if (lang  === "de")
children = "Hallo Ludwig"

if (lang === "fr")
children = "Bonjour François"

else children = "Do you speak english?"
return (
        <>
        <div className="d-flex flex-row bd-highlight mb-3 border border-dark">
           <span> {children} </span>
           </div>      

</>

  
    )
}
export default Greetings;