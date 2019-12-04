(function (){
    "use strict";
    let balance = 0;
    const coffeeList = [
        { 
            name: 'creme',
            price: 8 
        },
        { 
            name: 'espres',
            price: 9 
        },
        { 
            name: 'espres-choc',
            price: 10
        },
        { 
            name: 'au-late',
            price: 12
        },
        { 
            name: 'late-mac',
            price: 14
        },
        { 
            name: 'cappuch',
            price: 10 
        },
        { 
            name: 'chocolad',
            price: 13 
        },
        { 
            name: 'milch',
            price: 16 
        },
        { 
            name: 'heiss',
            price: 8 
        }
    ];
    const cash = [ 1, 2, 5, 10];


    
    const balanceCont = document.getElementById('balance');
    const coffeeContainer = document.querySelector('.cofbtn');
    const cashList = document.getElementById('cash-nominal');
    const restCash = document.getElementById('rest');

    cashList.innerHTML = cashRender(cash);
    priceRender(coffeeList);

    /* console.log(balanceCont.innerHTML);
    console.log(coffeeContainer.innerHTML); */

    coffeeContainer.addEventListener('click', onCofbtnClick);
    cashList.addEventListener('click', onCashClick);
    restCash.addEventListener('click', takeRest);

    

    function cashRender(cash, currency = 'грн') {
        let html='';
        cash.forEach(nominal => {
            html += `<button class="cash" data-name="${ nominal }"> ${nominal} ${currency}</button>`;
        });
        return html;
    }

    function priceRender(coffeeList, currency = 'грн'){
        coffeeList.forEach(element => /* console.log(document.getElementById(element.name).innerHTML, element.price)) */
        document.getElementById(element.name).innerHTML = ` ${element.price} ${currency}`);
    }

    function onCofbtnClick(event){
        event.preventDefault();
        const coffeeName = event.target.getAttribute('id');
        console.log(coffeeName);  
        const coffee = coffeeList.find(item => item.name === coffeeName);
        const rest = balance - coffee.price;
        if (rest >=0 ){
            setTimeout(() => {
                alert('Возьми кофе!!!');
            }, 2000);
            restCash.innerHTML = `${rest} грн`;
            balance = 0;
            balanceCont.innerHTML = `${balance} грн`;
        } else {
            alert('Добавь денег!!!');
        }
    } 

    function onCashClick(event){
        event.preventDefault();
        const cash = event.target.getAttribute('data-name');
        balance += parseInt(cash);
        balanceCont.innerHTML = `${balance} грн`;
    }

    function takeRest(event){
        event.preventDefault();
        restCash.innerHTML = '0 грн';
    }
})();