// Code EyesOnMe Component Here

function EyesOnMe(){
    function inFocus(){
console.log("Good!")
    }
    function blurred(){
        console.log("Hey! Eyes on me!")
    }
    return (
        <div>
            <button onFocus={inFocus} onBlur={blurred} >Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;