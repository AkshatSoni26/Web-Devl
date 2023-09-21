document.addEventListener(
    'DOMContentLoaded', function() {
        setInterval(
            () => {
                let a = document.getElementById("bulb").classList.toggle("bulb")
                
                console.log(a)
            },[1000]
        )
    }
)
