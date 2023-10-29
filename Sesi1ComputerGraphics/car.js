class Car{
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    printDetail() {
    console.log(this.name)
    console.log(this.price)
    }
}

export default Car