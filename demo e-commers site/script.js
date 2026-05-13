const products = [
  { id: 1, name: "Wireless Headphones", price: "\u20B9 599", img: "https://phonokart.com/cdn/shop/files/TribeBlue2.jpg?v=1724054342" },
  { id: 2, name: "Smart Watch", price: "\u20B9 5999", img: "https://www.jiomart.com/images/product/original/rvnjwxmr8l/punnkfunnk-kids-smart-watch-1-44-tft-display-4g-sim-card-phone-with-long-lasting-voice-call-kids-gps-music-player-alarm-clock-games-ip67-waterproof-blue-product-images-orvnjwxmr8l-p608090268-0-202402191738.jpg?im=Resize=(420,420)" },
  { id: 3, name: "Gaming Mouse", price: "\u20B9 799", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSym1mQ5SjSWpmfPzwjkk4JtyQCdzupHCWhvA&s" },
  { id: 4, name: "Bluetooth Speaker", price: "\u20B9 1599", img:"https://www.boat-lifestyle.com/cdn/shop/files/Artboard5_44d335da-dfc3-4619-9e17-dbbd6a5162ad_1800x.png?v=1747114990"},
  { id: 5, name: "Keyboard", price: "\u20B9 2999", img: "https://www.notebookcheck.net/fileadmin/_processed_/9/7/csm_tomoko89_04774356cc.jpg" },
];

const grid = document.getElementById('product-grid');
let cartCount = 0;

products.forEach(item => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <div class="product-image-wrapper">
      <img src="${item.img}" alt="${item.name}">
    </div>
    <div class="product-info">
      <h3>${item.name}</h3>
      <p class="product-price">${item.price}</p>
      <button class="add-to-cart-btn" onclick="addToCart()">Add To Cart</button>
    </div>
  `;
  grid.appendChild(card);
});

function addToCart() {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
}

// Function to run when a product card is clicked
function openDetails(product) {
    const modal = document.getElementById('product-modal');
    
    // Update modal with the specific product's information
    document.getElementById('modal-title').innerText = product.name;
    document.getElementById('modal-img').src = product.image;
    document.getElementById('modal-price').innerText = `$${product.price}`;
    document.getElementById('modal-desc').innerText = product.description;

    // Show the modal
    modal.style.display = "block";
}

// On product-detail.html
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Find the product in your data array using this ID
const product = products.find(p => p.id == productId);
// Then display the product details on the page...

