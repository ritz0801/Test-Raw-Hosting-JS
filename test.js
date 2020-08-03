window.onload = async function() {
    async function test() {
        const parentElement = document.getElementById('shopify-section-recently-viewed-products')

        if (!parentElement) {
            console.log("ERROR: element not exist")
        } else {
            const crossSellProduct = document.createElement("div");   // Create a <button> element
            crossSellProduct.innerHTML = "CLICK ME";                   // Insert text

            // get handle of product
            // ex: https://plano-01.myshopify.com/products/antibacterial-cleaner-refill
            const pathname = window.location.pathname; // products/antibacterial-cleaner-refill
            console.log("pathname: ", pathname)

            if (pathname.startsWith('products')) {
                const handle = pathname.substr('products'.length, pathname - 1)
                console.log("handle: ", handle)

                // get mapping
                const rs = await fetch('https://d8f3c6cb69f6.ngrok.io/api/mapping')
                    .then(response => response.json())
                    .then(commits => alert(commits[0].author.login));
                console.log("result get mapping: ", rs)
            }


            parentElement.body.appendChild(crossSellProduct);
            console.log("Crossell added");
        }
    }

    await test()
} 
 
