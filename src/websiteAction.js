window.onload = function() {
  let check = document.querySelector('#check');
  check.addEventListener('click', function() {
    document.querySelector('#search').value;

    products = document.querySelector('#products')

    createTabs(products);
  })

  function createTabs(products){
    cardCon = document.createElement("div")
    rowCon = document.createElement("div")
    leftCon = document.createElement("div")
    cardImg = document.createElement("img")
    rightCon = document.createElement("div")
    cardBody = document.createElement("div")
    cardHeader = document.createElement("h5")
    cardText = document.createElement("p")

    cardCon.className = "card text-info border-info mb-3"
    rowCon.className = "row no-gutters"
    leftCon.className = "col-md-4"
    cardImg.className = "card-img"
    rightCon.className = "col-md-8"
    cardBody.className = "card-body"
    cardHeader.className = "card-title"
    cardText.className = "card-text"

    cardCon.style = "max-width: 1080px;"

    cardImg.src = "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6403/6403425_sa.jpg"
    cardImg.alt = "failed to load"

    cardHeader.innerText = "Card title"
    cardText.innerText = "Some example text some example text. John Doe is an architect and engineer"
    products.appendChild(cardCon)
    cardCon.appendChild(rowCon)
    rowCon.appendChild(leftCon)
    rowCon.appendChild(rightCon)
    leftCon.appendChild(cardImg)
    rightCon.appendChild(cardBody)
    cardBody.appendChild(cardHeader)
    cardBody.appendChild(cardText)
    
  }
}

function generateAPIString(keyWord) {
  return "https://api.bestbuy.com/v1/products((search=" + keyWord
  +"))?apiKey=VFCoW7Ikv64nAhD4KxmuxF9A&sort=bestSellingRank.dsc&show=bestSellingRank,name,image,salePrice,customerReviewAverage,priceUpdateDate&format=json"
}