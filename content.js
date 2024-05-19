import {getToggleVideoExtension, getMoneyValue, getToggleExtensionValue} from "./utils/getStorageData.js";
import data from "./utils/data.js";

window.addEventListener('load', async function() {
    const money = await getMoneyValue();
    const toggleExtension = await getToggleExtensionValue();
    if(toggleExtension)
    {
        const leftover = document.querySelector('td[nowrap][data-th="Likutis"]');
        const totalLetfover = document.querySelector('td[nowrap][data-th="Galutinis likutis"]');
        const totalLetfoverBold = document.querySelector('td[data-th="Galutinis likutis"] span.number');
        const totalLeftoverDuplicate = document.querySelector('td[data-th="Likutis"] span.number-alt')
        const total_amount = document.querySelector('td.amount');
        const ui_amount_value = document.querySelector('span.ui-amount__value-positive');
        const monthly_income = document.querySelector('.pfm-overview__income span.ui-amount__value-positive');
        if(leftover && total_amount)
        {
            leftover.innerHTML = money;
            total_amount.innerHTML = money + " EUR"
        }
        else if(totalLetfover && totalLetfoverBold) {
            totalLetfover.innerHTML = money;
            totalLetfoverBold.innerHTML = money;
            leftover.innerHTML = money;
            totalLeftoverDuplicate.innerHTML = money;
        }
        else if(ui_amount_value)
        {
            let moneyInt = Number(money.replaceAll(' ', ''))
            ui_amount_value.innerHTML = moneyInt;
            moneyInt = moneyInt * 0.07;
            let formattedNumber = new Intl.NumberFormat('fr-FR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }).format(moneyInt);
            monthly_income.innerHTML = formattedNumber.replaceAll(',', '.');
            
            const addElements = () => {
                let elements = document.querySelectorAll('.-sortable tbody tr');
                let income = document.querySelector('.pfm-overview__income span.ui-amount__value-positive');
                if(income && elements.length > 30)
                {
                    let moneyValue = Number(money.replaceAll(' ', ''))
                    moneyValue = 0.7 * moneyValue + 0.44;
                    formattedNumber = new Intl.NumberFormat('fr-FR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      }).format(moneyValue);
                    income.innerHTML = formattedNumber.replaceAll(',', '.');
                }
                    
                if(elements)
                {
                    elements.forEach((item, index) => {
                        let data_item = getRowByIndexNumber(data, index);
                        if(data_item)
                        {
                            item.querySelector('.col-category ui-caption').innerHTML = `<ui-icon glyph="income" bgcolor="alert-green" size="medium" state="hydrated"><svg aria-hidden="true"><use xlink:href="#ui-glyph-income"></use></svg></ui-icon>${data_item.category}`;
                            item.querySelector('.col-fromto a').innerText = data_item.receiver;
                            item.querySelector('.col-amount ui-status').innerText = "+" +   new Intl.NumberFormat('fr-FR', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                              }).format(Number(money.replaceAll(' ', '') *  data_item.percent)).replaceAll(',','.').replace(/\s/g, '\u2002');      
                            item.querySelector('.col-amount ui-status').setAttribute('type', 'active');
                        }
                    })
                }
            }

            setInterval(addElements, 1000);
        }
    }
});

function getRowByIndexNumber(arr, index)
{
    for(let element of arr)
    {
        if(element.indexNumber == index)
            return element;
    }

    return false;
}