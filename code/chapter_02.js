let obj = {
    value: 5,
    add() {
        console.log(this.value)
        const sub = () => {
            console.log(this.value)
        }
        function again() {
            console.log(this.value)
        }
        sub()
        again()
    }
}

obj.add()