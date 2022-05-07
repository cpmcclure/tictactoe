const boxes = document.querySelectorAll('.box')
let players = prompt("Enter number of players: one or two").toLowerCase() === 'two'
console.log(players)

class Box {
    constructor(id, twoPlayers){
        let self = this
        this.value = ''
        this.id = id
        this.twoPlayers = twoPlayers
        this.over = false
        this.element = document.getElementById(this.id)
        this.element.addEventListener("click", function clicked() {
            if (self.element.innerText !== '') return null
            if (self.over) return null
            self.element.removeEventListener('click', clicked)
            let board = Array.from(boxes).map(box => box.innerText)
            board.filter(value => value === 'X').length > board.filter(value => value === 'O').length ? self.addO() : self.addX()
            if (!self.twoPlayers && !self.over) {
                setTimeout(self.computerTurn, 300)
            }
            console.log(self.over)
        })
    }
    checkWin(player){
        console.log(player)
        let wins = [['0','1','2'], ['3','4','5'], ['6','7','8'], ['0','3','6'], ['1','4','7'], ['2','5','8'], ['0','4','8'], ['2','4','6']]
        let board = Array.from(boxes).map(box => box.innerText)
        let spaces = board.map((value, i) => {
            if (value === player){
                return i
            }
        }).join('')
        console.log(spaces)
        if (wins.some(win => win.every(num => spaces.includes(num)))) {
            this.over = true
            fullBoard.forEach(box => box.over = true)
            alert(`${player} wins!`)
        }
        else if(spaces.length >= 5) {
            alert('Draw!')
        }
    }
    addX(){
        let player = 'X'
        this.value = 'X'
        this.element.innerText = this.value
        this.checkWin(player)
        // if (!this.twoPlayers && !this.game) {
        //     setTimeout(self.computerTurn, 500)
        // }
    }
    addO(){
        let player = 'O'
        this.value = 'O'
        document.getElementById(this.id).innerText = this.value
        this.checkWin(player)
    }
    computerTurn(){
        let choices = Array.from(boxes).filter(bx => bx.innerText === '')
        let random = Math.floor(choices.length * Math.random())
        choices[random].innerText = 'O'
        console.log(choices[random].id)
    }
}

Array.from(boxes).forEach(bx => console.log(bx.id))
const fullBoard = Array.from(boxes).map(bx => new Box(bx.id, players))
console.log(fullBoard)