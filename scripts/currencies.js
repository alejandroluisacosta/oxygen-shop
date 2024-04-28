const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";
let usdExchangeObject = {};

const fetchCurrencyExchanges = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            try {
                const jsonData = await response.json();
                usdExchangeObject = jsonData;
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
const usdBtn = document.getElementById("usd-desktop");
usdBtn.classList.add("selected");
const eurBtn = document.getElementById("eur-desktop");
const gbpBtn = document.getElementById("gbp-desktop");

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