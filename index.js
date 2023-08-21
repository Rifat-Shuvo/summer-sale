

let total = 0
let button = document.getElementById('pu')
button.setAttribute("disabled", "true")
document.getElementById('product1').addEventListener('click', function(){
    
    let productNameContainer = document.getElementById('productName1')
    let productName = productNameContainer.innerText
    let orderEntry = document.getElementById('orderList')
    let cont = orderEntry.childElementCount
    let listItem = document.createElement('li')
    listItem.innerHTML = `${cont + 1}. ${productName}`
    
    orderEntry.appendChild(listItem)



    
    let productPrice1 = document.getElementById('productPrice1')
    let presentTotal = parseFloat(productPrice1.innerHTML)
   
    total = total + presentTotal
    document.getElementById('totalPrice').innerText = total.toFixed(2)
    document.getElementById('total').innerText = total.toFixed(2)

    if (total != 0) {
        button.removeAttribute("disabled")
    }

    if (total >= 200) {
        discount = (20/100)*total
        grandTotal = total - discount
        document.getElementById('discount').innerText = discount.toFixed(2)
        document.getElementById('total').innerText = grandTotal.toFixed(2)
    } 
    
})

document.getElementById('product2').addEventListener('click', function(){
    
    let productNameContainer = document.getElementById('productName2')
    let productName = productNameContainer.innerText
    let  orderEntry = document.getElementById('orderList')
    let cont = orderEntry.childElementCount
    let listItem = document.createElement('li')
    listItem.innerHTML = `${cont + 1}. ${productName}`
    
    orderEntry.appendChild(listItem)




    let productPrice1 = document.getElementById('productPrice2')
    let presentTotal = parseFloat(productPrice1.innerHTML)
   
    total = total + presentTotal
    document.getElementById('totalPrice').innerText = total.toFixed(2)
    document.getElementById('total').innerText = total.toFixed(2)

    if (total != 0) {
        button.removeAttribute("disabled")
    }

    if (total >= 200) {
        discount = (20/100)*total
        grandTotal = total - discount
        document.getElementById('discount').innerText = discount.toFixed(2)
        document.getElementById('total').innerText = grandTotal.toFixed(2)
    } 
    
})

document.getElementById('product3').addEventListener('click', function(){
    
    let productNameContainer = document.getElementById('productName3')
    let productName = productNameContainer.innerText
    let  orderEntry = document.getElementById('orderList')
    let cont = orderEntry.childElementCount
    let listItem = document.createElement('li')
    listItem.innerHTML = `${cont + 1}. ${productName}`
    
    orderEntry.appendChild(listItem)




    let productPrice1 = document.getElementById('productPrice3')
    let presentTotal = parseFloat(productPrice1.innerHTML)
   
    total = total + presentTotal
    document.getElementById('totalPrice').innerText = total.toFixed(2)
    document.getElementById('total').innerText = total.toFixed(2)

    if (total != 0) {
        button.removeAttribute("disabled")
    }

    if (total >= 200) {
        discount = (20/100)*total
        grandTotal = total - discount
        document.getElementById('discount').innerText = discount.toFixed(2)
        document.getElementById('total').innerText = grandTotal.toFixed(2)
    } 
    
})


document.getElementById('product4').addEventListener('click', function(){
    
    let productNameContainer = document.getElementById('productName4')
    let productName = productNameContainer.innerText
    let  orderEntry = document.getElementById('orderList')
    let cont = orderEntry.childElementCount
    let listItem = document.createElement('li')
    listItem.innerHTML = `${cont + 1}. ${productName}`
    
    orderEntry.appendChild(listItem)




    let productPrice1 = document.getElementById('productPrice4')
    let presentTotal = parseFloat(productPrice1.innerHTML)
   
    total = total + presentTotal
    document.getElementById('totalPrice').innerText = total.toFixed(2)

    document.getElementById('total').innerText = total.toFixed(2)

    if (total != 0) {
        button.removeAttribute("disabled")
    }

    if (total >= 200) {
        discount = (20/100)*total
        grandTotal = total - discount
        document.getElementById('discount').innerText = discount.toFixed(2)
        document.getElementById('total').innerText = grandTotal.toFixed(2)
    } 
})

document.getElementById('product5').addEventListener('click', function(){
    
    let productNameContainer = document.getElementById('productName5')
    let productName = productNameContainer.innerText
    let  orderEntry = document.getElementById('orderList')
    let cont = orderEntry.childElementCount
    let listItem = document.createElement('li')
    listItem.innerHTML = `${cont + 1}. ${productName}`
    
    orderEntry.appendChild(listItem)




    let productPrice1 = document.getElementById('productPrice5')
    let presentTotal = parseFloat(productPrice1.innerHTML)
   
    total = total + presentTotal
    document.getElementById('totalPrice').innerText = total.toFixed(2)
    document.getElementById('total').innerText = total.toFixed(2)

    if (total != 0) {
        button.removeAttribute("disabled")
    }

    if (total >= 200) {
        discount = (20/100)*total
        grandTotal = total - discount
        document.getElementById('discount').innerText = discount.toFixed(2)
        document.getElementById('total').innerText = grandTotal.toFixed(2)
    } 
    
})


document.getElementById('product6').addEventListener('click', function(){
    
    let productNameContainer = document.getElementById('productName6')
    let productName = productNameContainer.innerText
    let  orderEntry = document.getElementById('orderList')
    let cont = orderEntry.childElementCount
    let listItem = document.createElement('li')
    listItem.innerHTML = `${cont + 1}. ${productName}`
    
    orderEntry.appendChild(listItem)




    let productPrice1 = document.getElementById('productPrice6')
    let presentTotal = parseFloat(productPrice1.innerHTML)
   
    total = total + presentTotal
    document.getElementById('totalPrice').innerText = total.toFixed(2)
 
    if (total != 0) {
        button.removeAttribute("disabled")
    }
    
        
    if (total >= 200) {
        discount = (20/100)*total
        grandTotal = total - discount
        document.getElementById('discount').innerText = discount.toFixed(2)
        document.getElementById('total').innerText = grandTotal.toFixed(2) 
    }
    

})

document.getElementById('home').addEventListener('click', function () {
    let p ,q,r
    p = 0.00
    q = 0.00
    r = 0.00
    total = 0
    document.getElementById('totalPrice').innerText = p.toFixed(2)
    document.getElementById('discount').innerText = q.toFixed(2)
    document.getElementById('total').innerText = r.toFixed(2)
    document.getElementById('orderList').innerHTML = ``
    button.setAttribute("disabled", "true")
})


