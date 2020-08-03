const parentElement1 = document.getElementById('section-footer')
const crossSellProduct1 = document.createElement("div");   // Create a <button> element
const pathname = window.location.pathname; // products/antibacterial-cleaner-refill
console.log("pathname: ", pathname)
crossSellProduct1.innerHTML = JSON.stringify(pathname);  
parentElement1.appendChild(crossSellProduct1);

if (pathname.startsWith('/products/')) {
    const handle = pathname.substr('/products/'.length, pathname - 1)
    console.log("handle: ", handle)

    const handleEle = document.createElement("div");   // Create a <button> element
    handleEle.innerHTML = handle
    parentElement1.appendChild(handleEle)


    // get mapping
    // const rs = await fetch('https://d8f3c6cb69f6.ngrok.io/api/mapping')
    //     .then(response => response.json())
    //     .then(commits => alert(commits[0].author.login));
    // console.log("result get mapping: ", rs)

    fetch(url)
        .then(response => response.json())
        .then(text => {
            console.log("text: ", text)
            
            return text;
        });
}


window.onload = async function() {
    async function test() {
        // const parentElement = document.getElementById('shopify-section-recently-viewed-products')
        const parentElement = document.getElementById('section-footer')

        if (!parentElement) {
            alert("not exist")
            console.log("ERROR: element not exist")
        } else {
            alert("existed")

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
                    .then(commits => commits);
                console.log("result get mapping: ", rs)
            }


            parentElement.appendChild(crossSellProduct);
            console.log("Crossell added");
        }
    }

    await test()
} 
 
