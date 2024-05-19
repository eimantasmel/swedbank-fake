import {getToggleExtensionValue, getMoneyValue} from "./utils/getStorageData.js";

document.addEventListener('DOMContentLoaded', async (e) => {
    const money = document.getElementById("money_amount");
    money.value = await getMoneyValue() ?? '';
    const toggleExtension = document.getElementById("toggle_extension");
    toggleExtension.checked = await getToggleExtensionValue();

    document.getElementById("money_amount").addEventListener("change", function() {
        chrome.storage.sync.set({['money']: this.value})
    });

    document.getElementById("toggle_extension").addEventListener("change", function() {
        if (this.checked) {
            chrome.storage.sync.set({['toggle_extension']: true})
        } else {
          chrome.storage.sync.set({['toggle_extension']: false})
        }
    });
})