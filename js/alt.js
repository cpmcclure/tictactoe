const boxes = document.querySelectorAll('.box')

function BoxMaker(id) {
    let self = this
    this.id = id
    this.element = document.getElementById(this.id)
    this.value = ''
    this.playRound = function() {
        if (Array.from(document.querySelectorAll('.x')).length % 2 === 0) {
            this.value = 'X'
            this.element.classList.add('x')
        }
        else {
            this.value = 'O'
            // this.element.classList.add('o')
        }
        // this.element.removeEventListener('click', this.playRound)
        this.element.innerText = this.value
    }
    this.element.addEventListener('click', () => {self.playRound})
}

Array.from(boxes).forEach(bx => console.log(bx.id))
const board = Array.from(boxes).map(bx => new BoxMaker(bx.id))
board.forEach(obj => obj.element.addEventListener('click', obj.playRound))