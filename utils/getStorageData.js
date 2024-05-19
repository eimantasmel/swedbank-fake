export async function getToggleExtensionValue() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get('toggle_extension', (result) => {
            resolve(result.toggle_extension);
        })
    })
}

export async function getMoneyValue() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get('money', (result) => {
            resolve(result.money);
        })
    })
}
