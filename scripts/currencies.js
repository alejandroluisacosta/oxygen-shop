const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";
let usdExchangeObject = {};

const fetchCurrencyExchanges = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            try {
                const jsonData = await response.json();
                usdExchangeObject = jsonData.usd;
                console.log(usdExchangeObject);
            }
            catch(error) { console.log(error); }
        }
    }
    catch(error) { console.log(error); }
}
fetchCurrencyExchanges(url);
console.log(usdExchangeObject);

document.addEventListener("DOMContentLoaded", function() {
    const usdBtn = document.getElementById("usd");
    const eurBtn = document.getElementById("eur");
    const gbpBtn = document.getElementById("gbp");
    const basicPrice = document.getElementById("basic");
    const professionalPrice = document.getElementById("professional");
    const premiumPrice = document.getElementById("premium");

    eurBtn.addEventListener("click", () => {
        eurExchangeRate = usdExchangeObject.eur;
        console.log(eurExchangeRate);
        professionalPrice.innerText = 25 * eurExchangeRate;
    })
})