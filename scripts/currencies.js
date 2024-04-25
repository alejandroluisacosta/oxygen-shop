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
usdExchangeObject = fetchCurrencyExchanges(url);

const usdBtn = document.getElementById("usd");
const eurBtn = document.getElementById("eur");
const gbpBtn = document.getElementById("gbp");
const basicPrice = document.getElementById("basic");
const professionalPrice = document.getElementById("professional");
const premiumPrice = document.getElementById("premium");

eurBtn.addEventListener("click", async () => {
    const response = await fetchCurrencyExchanges(url)
    eurExchangeRate = response.eur;
    basicPrice.innerText = "0€";
    professionalPrice.innerText = (25 * eurExchangeRate).toFixed(2) + "€";
    premiumPrice.innerText = (60 * eurExchangeRate).toFixed(2) + "€";
})

gbpBtn.addEventListener("click", async () => {
    const response = await fetchCurrencyExchanges(url)
    gbpExchangeRate = response.gbp;
    basicPrice.innerText = "£0";
    professionalPrice.innerText = "£" + (25 * gbpExchangeRate).toFixed(2);
    premiumPrice.innerText = "£" + (60 * gbpExchangeRate).toFixed(2);
})

usdBtn.addEventListener("click", async () => {
    const response = await fetchCurrencyExchanges(url)
    basicPrice.innerText = "$0";
    professionalPrice.innerText = "$25";
    premiumPrice.innerText = "$60";
})