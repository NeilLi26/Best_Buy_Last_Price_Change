window.onload = function() {
  let check = document.querySelector('#check');
  check.addEventListener('click', function() {
    APIKeyword = document.querySelector('#search').value;

    initialiseAPI(generateAPIString(APIKeyword))
  })
}

function createTabs(productsCon, imgLink, prodcutName, productPrice, productReview, productLastPriceUpdate){
  cardCon = document.createElement("div")
  rowCon = document.createElement("div")
  leftCon = document.createElement("div")
  cardImg = document.createElement("img")
  rightCon = document.createElement("div")
  cardBody = document.createElement("div")
  cardHeader = document.createElement("h5")
  cardPrice = document.createElement("p")
  cardReview = document.createElement("p")
  cardLastPriceUpdate = document.createElement("p")

  cardCon.className = "card text-info border-info mb-3"
  rowCon.className = "row no-gutters"
  leftCon.className = "col-md-4"
  cardImg.className = "card-img"
  rightCon.className = "col-md-8"
  cardBody.className = "card-body"
  cardHeader.className = "card-title"
  cardPrice.className = "card-text"
  cardReview.className = "card-text"
  cardLastPriceUpdate.className = "card-text"

  cardCon.style = "max-width: 1080px;"

  cardImg.src = imgLink
  cardImg.alt = "failed to load"

  cardHeader.innerText = prodcutName
  cardPrice.innerText = "Price: $" + productPrice + "USD"
  cardReview.innerText = "Customer review: " + productReview
  cardLastPriceUpdate.innerText = "price last updated on: " + productLastPriceUpdate

  productsCon.appendChild(cardCon)
  cardCon.appendChild(rowCon)
  rowCon.appendChild(leftCon)
  rowCon.appendChild(rightCon)
  leftCon.appendChild(cardImg)
  rightCon.appendChild(cardBody)
  cardBody.appendChild(cardHeader)
  cardBody.appendChild(cardPrice)
  cardBody.appendChild(cardReview)
  cardBody.appendChild(cardLastPriceUpdate)
  
}

function generateAPIString(keyWord) {
  return "https://api.bestbuy.com/v1/products((search=" + keyWord
  +"))?apiKey=VFCoW7Ikv64nAhD4KxmuxF9A&sort=bestSellingRank.dsc&show=bestSellingRank,name,image,regularPrice,salePrice,customerReviewAverage,priceUpdateDate&format=json"
}

//MODIFIES: this
//EFFECTS: given the API, get the arrays filled
function initialiseAPI (API) {
  fetch(API)
    .then(response =>  response.json())
      .then(data => data.products)
        .then(
          products => generateTabsFromProducts(products)
          )
  // .catch(error => console.log('Error'))
}

//MODIFIES: this
//EFFECTS: given a list of producst in JSON form, create tabs with useful information
function generateTabsFromProducts(products) {
  console.log(products);

  var productsCon = document.querySelector('#products')

  document.body.removeChild(productsCon)
  
  var newProducts = document.createElement("div")
  newProducts.id = "products"
  document.body.appendChild(newProducts)

  products.forEach(element => {
    // numArray.push(Number(element.high));
    // numArray.push(Number(element.low));
    console.log(element.customerReviewAverage)
    console.log(element.name)
    console.log(element.regularPrice)
    console.log(element.salePrice)
    console.log(element.priceUpdateDate)

    productIMGLink = element.image
    productName = element.name
    productPrice = element.regularPrice
    productReview = element.customerReviewAverage
    productLastPriceUpdate = element.priceUpdateDate

    createTabs(newProducts, productIMGLink, productName, productPrice, productReview, productLastPriceUpdate)
  });
  
}