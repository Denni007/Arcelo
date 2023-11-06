var data = {
  "products": [
    {
      "category": "PeanutButter",
      "productName": "Natural Creamy Peanut Butter",
      "links": ["NATURAL CREAMY 360", "NATURAL CREAMY 550", "NATURAL CREAMY 850", "NATURAL CREAMY 1250"],
      "review": "5"
    },
    {
      "category": "PeanutButter",
      "productName": "Natural Crunchy Peanut Butter",
      "links": ["NATURAL CRUNCHY 360", "NATURAL CRUNCHY 550", "NATURAL CRUNCHY 850", "NATURAL CRUNCHY 1250"],
      "review": "4.5"
    },
    {
      "category": "PeanutButter",
      "productName": "Classic Creamy Peanut Butter",
      "links": ["CLASSIC CREAMY 360", "CLASSIC CREAMY 550", "CLASSIC CREAMY 850", "CLASSIC CREAMY 1250"],
      "review": "4.7"
    },
    {
      "category": "PeanutButter",
      "productName": "Classic Crunchy Peanut Butter",
      "links": ["CLASSIC CRUNCHY 360", "CLASSIC CRUNCHY 550", "CLASSIC CRUNCHY 850", "CLASSIC CRUNCHY 1250"],
      "review": "4.8"
    },
    {
      "category": "PeanutButter",
      "productName": "Chocolate Creamy Peanut Butter",
      "links": ["CHOCOLATE CREAMY 360", "CHOCOLATE CREAMY 550", "CHOCOLATE CREAMY 850", "CHOCOLATE CREAMY 1250"],
      "review": "4.9"
    },
    {
      "category": "PeanutButter",
      "productName": "Chocolate Crunchy Peanut Butter",
      "links": ["CHOCOLATE CRUNCHY 360", "CHOCOLATE CRUNCHY 550", "CHOCOLATE CRUNCHY 850", "CHOCOLATE CRUNCHY 1250"],
      "review": "4.6"
    },
    {
      "category": "HighProteinPeanutButter",
      "productName": "Premium High Protein",
      "links": ["CLASSIC CRUNCHY 360"],
      "review": "3.5"
    },
    {
      "category": "HighProteinPeanutButter",
      "productName": "All Vegan High Protein Peanut Butter",
      "links": ["CLASSIC CRUNCHY 360"],
      "review": "4"
    },
    {
      "category": "HighProteinPeanutButter",
      "productName": "Added Whey High Protein Peanut Butter",
      "links": ["CLASSIC CRUNCHY 360"],
      "review": "4.2"
    }
  ]
}

  function createProductHTML(product) {
    const fullStars = Math.floor(product.review);
    const hasHalfStar = product.rating - fullStars >= 0.5;
    
    // Create the HTML for the rating stars
    const ratingHTML = Array(fullStars).fill('<i class="fas fa-star"></i>').join(' ');
    if (hasHalfStar) {
        ratingHTML += ' <i class="fas fa-star"></i>';
    }
   


    return `
        <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="product-item wow fadeInUp delay-0-2s">
                <div class="image">
                    <img src="assets/images/product/${product.links[0]}.png" alt="${product.productName}"
                    
                   
  >
                </div>
                <div class="content">
               
                    <h5><a href="product-details.html">${product.productName}</a></h5>
                    <span class="price">
                    <span>180</span>
                    </span> 
                    <br>
                    <div class="ratting">
                    ${ratingHTML}
                    (${product.review})
                    </div>
                   
                
                </div>
            </div>
        </div>
    `;
}

const productContainer = document.querySelector(".product-container");

  data.products.forEach(product => {
    const productHTML = createProductHTML(product);
    productContainer.innerHTML += productHTML;
});