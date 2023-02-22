// Code Keypad Component Here

function Keypad (){
    function typeIn() {
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={typeIn} />
        </div>
    )
}

export default Keypad;