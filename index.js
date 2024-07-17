const GameCanvas = document.getElementById("GameCanvas")
const Context = GameCanvas.getContext ("2d")
const Box = {
    x: 50,
    y: 50,
    width: 50,
    height: 92,
    speed: 15,
    color: "red"
}

function render() {
    Context.clearRect(0,0 ,GameCanvas.width, GameCanvas.height)
    Context.fillStyle = Box.color
    Context.fillRect(Box.x,Box.y, Box.width, Box.height)
}

window.addEventListener("keydown" , (event) => {
    switch(event.key) {
        case"ArrowUp" :
        Box.y -= Box.speed
        break
        case"ArrowDown" :
        Box.y += Box.speed
        break
        case"ArrowRight" :
        Box.x += Box.speed
        break
        case"ArrowLeft" :
        Box.x -= Box.speed
        break
    }

    render()
})

render()