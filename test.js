const parentElement1 = document.getElementById('section-footer')
const crossSellProduct1 = document.createElement("div");   // Create a <button> element
const pathname = window.location.pathname; // products/antibacterial-cleaner-refill
console.log("pathname 1234: ", pathname)
crossSellProduct1.innerHTML = pathname;
parentElement1.appendChild(crossSellProduct1);

if (pathname.startsWith('/products/')) {
    const handle = pathname.substr('/products/'.length, pathname.length)
    console.log("handle: ", handle)

    const handleEle = document.createElement("div");   // Create a <button> element
    handleEle.innerHTML = handle
    parentElement1.appendChild(handleEle)


    fetch("http://localhost:4000/token/plano-234.myshopify.com")
        .then(response => response.json())
        .then(rs => {
            console.log("token: ", rs)
            // get mapping
            // fetch("http://localhost:4000/mapping/5447451246743")
            //     .then(rp => rp.json())
            //     .then(rs => {
            //         console.log("rs*: ", rs)
            //         console.log(rs.mappingProductId)
            //         const { product: { image, title, handle}} =  rs.mappingProductId
            //         const product = document.createElement("div");   // Create a <button> element
            //         product.innerHTML = `
            //                 <div>
            //                      <a href="/products/${handle}">
            //                         <span>${title}</span>
            //                     </a>
            //                     <img style ="width: 100px; height: 100px;" src="${image.src}" alt="${title}">
            //                 <div>
            //         `

            //         parentElement1.appendChild(product)
            //         console.log("after append")



            //         // fetch("https://cors-anywhere.herokuapp.com/https://plano-234.myshopify.com/cart/add", {
            //         //     method: "POST",
            //         //     headers: {
            //         //         "Content-Type": "application/json",
            //         //         "Accept": "application/json",
            //         //         "X-Shopify-Access-Token": rs.token,
            //         //         "Access-Control-Allow-Origin" : "*",
            //         //         "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
            //         //     },
            //         //     body: JSON.stringify({
            //         //         id: '35276846268567',
            //         //         quantity: 89
            //         //     })
            //         // })
            //         //     .then(response => response.json())
            //         //     .then(text => {
            //         //         console.log("text 22: ", text)
        
            //         //         return text;
            //         //     });
            //     })

            // fetch("https://cors-anywhere.herokuapp.com/https://plano-234.myshopify.com/cart/add", {
                fetch("https://plano-234.myshopify.com/cart/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "X-Shopify-Access-Token": rs.token,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
                },
                body: JSON.stringify({
                    id: '35276846268567',
                    quantity: 89
                })
            })
                .then(response => response.json())
                .then(text => {
                    console.log("text 22: ", text)

                    return text;
                });

        });


}


async function addItem(variantId, quantity) {
    const result = await fetch("/cart/add.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-Shopify-Access-Token": "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"
        },
        body: JSON.stringify({
            id: '35276846268567',
            quantity: 89
        })
    })
}



// window.onload = async function() {
//     async function test() {
//         // const parentElement = document.getElementById('shopify-section-recently-viewed-products')
//         const parentElement = document.getElementById('section-footer')

//         if (!parentElement) {
//             alert("not exist")
//             console.log("ERROR: element not exist")
//         } else {
//             alert("existed")

//             const crossSellProduct = document.createElement("div");   // Create a <button> element
//             crossSellProduct.innerHTML = "CLICK ME";                   // Insert text

//             // get handle of product
//             // ex: https://plano-234.myshopify.com/products/antibacterial-cleaner-refill
//             const pathname = window.location.pathname; // products/antibacterial-cleaner-refill
//             console.log("pathname: ", pathname)

//             if (pathname.startsWith('products')) {
//                 const handle = pathname.substr('products'.length, pathname - 1)
//                 console.log("handle: ", handle)

//                 // get mapping
//                 const rs = await fetch('https://d8f3c6cb69f6.ngrok.io/api/mapping')
//                     .then(response => response.json())
//                     .then(commits => commits);
//                 console.log("result get mapping: ", rs)
//             }


//             parentElement.appendChild(crossSellProduct);
//             console.log("Crossell added");
//         }
//     }

//     await test()
// } 
 
