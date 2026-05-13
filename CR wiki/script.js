
function showPage(pageId) {
   
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

   
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}


async function fetchAllCards() {
    const cardList = document.getElementById('card-list');
    const favSelect = document.getElementById('fav-card-select');

  
    if (!cardList && !favSelect) return;

    try {
        const response = await fetch('https://royaleapi.github.io/cr-api-data/json/cards.json');
        const cardsData = await response.json();

       
        if (cardList) cardList.innerHTML = "";

        cardsData.forEach(card => {
           
            if (cardList) {
                const div = document.createElement('div');
                div.className = 'card-item';
                const imgUrl = `https://royaleapi.github.io/cr-api-assets/cards/${card.key}.png`;

                div.innerHTML = `
                    <img src="${imgUrl}" onerror="this.src='https://placehold.co/150x200?text=Card'" alt="${card.name}">
                    <h4>${card.name}</h4>
                `;
                div.onclick = () => showCardDetails({
                    name: card.name,
                    rarity: card.rarity,
                    type: card.type,
                    desc: card.description || "A battle-ready card for the Arena.",
                    img: imgUrl,
                    elixir: card.elixir
                });
                cardList.appendChild(div);
            }

           
            if (favSelect) {
                const opt = document.createElement('option');
                opt.value = card.key;
                opt.innerText = card.name;
                favSelect.appendChild(opt);
            }
        });
    } catch (error) {
        console.error("Cards failed to load:", error);
    }
}


function showCardDetails(card) {
    const modal = document.getElementById('card-modal');
    const body = document.getElementById('modal-body');

    if (modal && body) {
        body.innerHTML = `
            <img src="${card.img}" style="width:150px">
            <h2>${card.name}</h2>
            <p><strong>Elixir:</strong> ${card.elixir} 💧</p>
            <p><strong>Rarity:</strong> ${card.rarity}</p>
            <p><strong>Type:</strong> ${card.type}</p>
            <hr style="margin:15px 0">
            <p style="font-style: italic; color: #555;">${card.desc}</p>
        `;
        modal.style.display = "block";
    }
}

function closeModal() {
    const modal = document.getElementById('card-modal');
    if (modal) modal.style.display = "none";
}


window.onclick = function (event) {
    const modal = document.getElementById('card-modal');
    if (event.target == modal) {
        closeModal();
    }
}


const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.onsubmit = (e) => {
        e.preventDefault();
        alert('Signup successful!');
        showPage('home');
    };
}


fetchAllCards();
