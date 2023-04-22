

async function func1(){
    const response = await fetch(' https://www.cbr-xml-daily.ru/latest.js')
    const data = await response.json();

    let select1 = document.getElementById('little-rub')
    let select2 = document.getElementById('big-rub');
    let rez1 = document.getElementById('rezult');
    let rez2 = document.getElementById('rezult1')
    let rub = document.getElementById('rub');
    let elseValute = document.getElementById('else-valute')
    let entered1 =document.getElementById('entered1')
    let entered2 =document.getElementById('entered2')
    let rates = data.rates

    for (let key in rates){
        let newOption = new Option(key,rates[key]);
        if (rates[key]>1) select1.append(newOption);
        else select2.append(newOption);
    }
    let valueSelected
    select1.addEventListener('change', function (){
        valueSelected = this.value
        entered1.addEventListener('click', function (){
            if (rub.value !== ''){
                rez1.value = (rub.value*valueSelected).toFixed(2);
                rub.value = ''
            }
        })
    })
    select2.addEventListener('change', function (){
        valueSelected = this.value
        entered2.addEventListener('click', function (){
            if (elseValute.value !== ''){
                rez2.value = (elseValute.value/valueSelected).toFixed(2);
                elseValute.value = ''
            }
        })
    })

}
func1();

