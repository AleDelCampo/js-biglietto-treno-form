const completeName = document.getElementById("name");

const km = document.querySelector("#kilometers");

const age = document.querySelector("#eta");

const button = document.querySelector("#create");

const totalPrice = document.getElementById("total");

let regularPrice;

let finalPrice

create.addEventListener("click",
    function () {
        document.getElementById("detailNameSurname").innerText = `${completeName.value}`;
    }
)

create.addEventListener("click", 
    function () { 
        regularPrice = km.value * 0.21;

        finalPrice = regularPrice;

        if (age.value < 18) {
            finalPrice = regularPrice - (regularPrice * 0.2);
            totalPrice.innerHTML = "20% di sconto per i Minorenni!!"
        } else if (age.value >= 65) {
            finalPrice = regularPrice - (regularPrice * 0.4);
            totalPrice.innerHTML = "40% di sconto per igli Anziani!!"
        }   

        finalPrice = finalPrice.toFixed(2)

        totalPrice.innerHTML += `Il totale del pagamento è di:€${finalPrice}`;
    }       
)
