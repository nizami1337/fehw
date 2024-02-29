//1
let car = {
    brand: "BMW",
    model: "M8 Competition",
    year: 2021,
    color: "black",
    status: false,
    velocity: 0,
    start() {
        if (this.status) {
            console.log("car already started");
        } else {
            this.status = true;
            console.log("car started")
        }
    },
    stop() {
        if (!this.status) {
            console.log("car already idle");
        } else {
            this.status = false;
            console.log("car stopped")
        }
    },
    accelerate(x) {
        if (!this.status) {
            console.log("start the car first")
        } else {
            this.velocity += x
            console.log(`velocity increased by ${x}. current speed ${this.velocity}`)
        }
    },
    decelerate(x) {
        if (!this.status) {
            console.log("start the car first")
        } else {
            this.velocity -= x
            if (this.velocity < 0) this.velocity = 0
            console.log(`velocity decreased by ${x}. current speed ${this.velocity}`)
        }
    }
}

// // 2
// let user = {
//     username: "cooluser829",
//     email: "cooluser@example.com",
//     password: "topsecretpassword123"
// }

// user.bio = "hello world"
// console.log(user)
// Object.seal(user)
// user.birthdate = 1999
// console.log(user)


// // 3
// let receipt = {
//     name: "omelet",
//     ingredients: ['eggs', 'butter'],
//     instruction: "lorem ipsum dolor sit amet"
// }

// receipt.description = "hello world"
// console.log(receipt)
// console.log("extensible: ", Object.isExtensible(receipt))
// Object.preventExtensions(receipt)
// receipt.qwerty = "hi world"
// console.log(receipt)
// console.log("extensible: ", Object.isExtensible(receipt))

// // 4
// let order = {
//     items: [{ itemId: 1, name: "T-shirt", quantity: 2, price: 20 }, { itemId: 2, name: "Jeans", quantity: 1, price: 50 }],
//     shippingAddress: { street: "123 Main St", city: "Anytown", state: "CA", zip: "12345" },
//     cart: [],
//     addToCart(name, quantity) {
//         // check = true
//         // for (let i = 0; i<this.cart.length; i++) {
//         //     console.log(this.cart)
//         //     console.log(this.cart[i])
//         //     if (this.cart[i].name == name) {
//         //         this.cart[i].quantity = this.cart[i].quantity + quantity
//         //         check = false
//         //         console.log(item)
//         //         break
//         //     }
//         // }
//         // if (check) {
//         //     console.log("check")
//         //     for (let item in this.items) {
//         //         item = this.items[item]
//         //         if (item.name == name) {
//         //             this.cart.push({itemId: item.itemId, quantity: quantity})
//         //             break
//         //         }
//         //     }
//         // }
//         for (let item in this.items) {
//             item = this.items[item]
//             if (item.name == name) {
//                 this.cart.push({itemId: item.itemId, quantity: quantity})
//                 break
//             }
//         }
//     }
// }

// // Object.seal(order)