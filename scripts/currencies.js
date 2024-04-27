const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";
let usdExchangeObject = {};

const fetchCurrencyExchanges = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            try {
                const jsonData = await response.json();
                return jsonData.usd;
            }
            catch(error) { console.log(error); }
        }
    }
    catch(error) { console.log(error); }
}

const basicPrice = document.getElementById("basic");
const professionalPrice = document.getElementById("professional");
const premiumPrice = document.getElementById("premium");
const currenciesContainerMobile = document.getElementById("pricing__currencies-mobile");
const currenciesContainerDesktop = document.getElementById("pricing__currencies-desktop");

currenciesContainerMobile.addEventListener("change", async (event) => {
    if (event.target.value === "EUR") {
        const response = await fetchCurrencyExchanges(url)
        eurExchangeRate = response.eur;
        basicPrice.innerText = "0€";
        professionalPrice.innerText = (25 * eurExchangeRate).toFixed(1) + "€";
        premiumPrice.innerText = (60 * eurExchangeRate).toFixed(1) + "€";
    }
    else if (event.target.value === "GBP") {
        const response = await fetchCurrencyExchanges(url)
        gbpExchangeRate = response.gbp;
        basicPrice.innerText = "£0";
        professionalPrice.innerText = "£" + (25 * gbpExchangeRate).toFixed(1);
        premiumPrice.innerText = "£" + (60 * gbpExchangeRate).toFixed(1);
    }
    else {
        const response = await fetchCurrencyExchanges(url)
        basicPrice.innerText = "$0";
        professionalPrice.innerText = "$25";
        premiumPrice.innerText = "$60";
    }
})

if (window.innerWidth >= 1000) { // Pasar a media query
    currenciesContainerMobile.classList.add("hidden");
    currenciesContainerDesktop.classList.remove("hidden");

    const usdBtn = document.createElement("button");
    usdBtn.innerText = "USD";
    usdBtn.id = "usd";
    usdBtn.classList.add("pricing__currencies__button");
    usdBtn.classList.add("selected");

    const eurBtn = document.createElement("button");
    eurBtn.innerText = "EUR";
    eurBtn.id = "eur";
    eurBtn.classList.add("pricing__currencies__button");

    const gbpBtn = document.createElement("button");
    gbpBtn.innerText = "GBP";
    gbpBtn.id = "gbp";
    gbpBtn.classList.add("pricing__currencies__button");

    currenciesContainerDesktop.appendChild(usdBtn);
    currenciesContainerDesktop.appendChild(eurBtn);
    currenciesContainerDesktop.appendChild(gbpBtn);
    
    eurBtn.addEventListener("click", async () => {
        const response = await fetchCurrencyExchanges(url)
        eurExchangeRate = response.eur;
        basicPrice.innerText = "0€";
        professionalPrice.innerText = (25 * eurExchangeRate).toFixed(2) + "€";
        premiumPrice.innerText = (60 * eurExchangeRate).toFixed(2) + "€";
        eurBtn.classList.add("selected");
        usdBtn.classList.remove("selected");
        gbpBtn.classList.remove("selected");
    })
    
    gbpBtn.addEventListener("click", async () => {
        const response = await fetchCurrencyExchanges(url)
        gbpExchangeRate = response.gbp;
        basicPrice.innerText = "£0";
        professionalPrice.innerText = "£" + (25 * gbpExchangeRate).toFixed(2);
        premiumPrice.innerText = "£" + (60 * gbpExchangeRate).toFixed(2);
        gbpBtn.classList.add("selected");
        usdBtn.classList.remove("selected");
        eurBtn.classList.remove("selected");
    })
    
    usdBtn.addEventListener("click", async () => {
        const response = await fetchCurrencyExchanges(url)
        basicPrice.innerText = "$0";
        professionalPrice.innerText = "$25";
        premiumPrice.innerText = "$60";
        usdBtn.classList.add("selected");
        eurBtn.classList.remove("selected");
        gbpBtn.classList.remove("selected");
    })
}

else {
    currenciesContainerMobile.classList.remove("hidden");
    currenciesContainerDesktop.classList.add("hidden");
}