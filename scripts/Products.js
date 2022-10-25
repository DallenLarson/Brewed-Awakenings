import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click", (clickEvent) => {
        const itemClicked = clickEvent.target
            if (itemClicked.id.startsWith("product")) { 
                // "product" specified the target
                const [, productPrimaryKey] = itemClicked.id.split("--") 
                // deconstructing method here
    
            let matchingProduct = null
            for (const product of products) {
                if(parseInt(productPrimaryKey) === product.id) {
                    matchingProduct = product
                    // petName = pet.name
                    // walkerId = pet.walkerId
                    // window.alert(`${matchingPet} is being walked by ${matchingWalker}!`)
                }
            }

            // let matchingWalker = null
            // for (const walker of walkers) {
            //     if(matchingPet.walkerId === walker.id) {
            //         matchingWalker = walker
            //         petName = pet.name
            //         walkerId = pet.walkerId
            //     }
            // }

            window.alert(`✩✩ ${matchingProduct.name}: $${matchingProduct.price} ✩✩`)
        }
    }
)

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

