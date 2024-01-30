const pricexkm = 0.21;

let km = Number(document.querySelector("#kilometers"));

let completeName = document.querySelector("#name");

let age = Number(document.querySelector("#eta"));

const saleminor = `${km}` *  pricexkm * 20 / 100;

const saleelderly =`${km}` * pricexkm * 40 / 100;

const pricemajor = `${km}` * `${pricexkm}`;

const priceminor = `${km}` * `${pricexkm}` - `${saleminor}`;

const priceelderly = `${km}` * `${pricexkm}` - `${saleelderly}`;

const minor = Number(priceminor.toFixed(2)); 

const elderly = Number(priceelderly.toFixed(2));

const regular = Number(pricemajor.toFixed(2));  



create.addEventListener("click",
    function () {
        document.getElementById("detailNameSurname").innerText = `${completeName.value}`;
    }
)

create.addEventListener("click", 
    function () { document.getElementById("total").innerText = `${minor}`;
        
    }
)
