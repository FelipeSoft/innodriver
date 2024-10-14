const products = [
    { id: 1, name: "Produto 1", price: 10 },
    { id: 2, name: "Produto 2", price: 20 },
    { id: 3, name: "Produto 3", price: 30 },
    { id: 4, name: "Produto 4", price: 40 }
]

// MAP
let productsNode = products.map((element, index, array) => {
    return (
        <div class="element">{element}</div>
    )
});

// FOR
function renderList() {
    productsNode = [];
    for (let i = 0; i < products.length; i++) {
        products.push(<div>{products[i].price}</div>);
    }
    return productsNode;
}

return renderList();
