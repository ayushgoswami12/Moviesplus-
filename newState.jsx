import { useState } from "react"

function Skeleton(prop){
    return(
        <button onClick={prop.onClick}>{prop.button}</button>
    )
}

function NewState() {
    const [first,final] = useState("inital value")
    function newpara(outputedValue){
        final(outputedValue)
    }
    return (
        <>
    <Skeleton onClick={()=>newpara("$75")} button="This is the button"></Skeleton>
     {first}
   </>
  )
}


export default NewState
