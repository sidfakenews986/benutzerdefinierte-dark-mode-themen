const saveThemeButton = document.getElementById('save-theme');
const themeList = document.getElementById('theme-list');

function saveTheme() {
    const primaryColor = document.getElementById('primary-color').value;
    const secondaryColor = document.getElementById('secondary-color').value;

    const themeItem = document.createElement('li');
    themeItem.textContent = `Primär: ${primaryColor}, Sekundär: ${secondaryColor}`;
    themeList.appendChild(themeItem);

    // Hier können Sie den Code hinzufügen, um die Themen im LocalStorage zu speichern.
}

saveThemeButton.addEventListener('click', saveTheme);