// Массив предложенных сайтов
const websites = [
    "OwFoundation.html",
    "WTube.html",
    "BeyondTheAirwaves.html",
];

const input = document.getElementById("searchInput");
const suggestionsContainer = document.getElementById("suggestions");

// Функция для отображения всех сайтов
function showAllSuggestions() {
    // Очистка предыдущих результатов
    suggestionsContainer.innerHTML = "";

    // Отображение всех сайтов
    websites.forEach(site => {
        const item = document.createElement("div");
        item.classList.add("suggestion-item");
        item.textContent = site;
        item.onclick = () => {
            // Устанавливаем выбранный сайт в инпут
            window.location.href = site;
            // Очищаем подсказки
            suggestionsContainer.innerHTML = "";
        };
        suggestionsContainer.appendChild(item);
    });
}

// Показ списка при клике на поле ввода
input.addEventListener("focus", () => {
    showAllSuggestions();
});

// Скрытие списка при потере фокуса
input.addEventListener("blur", () => {
    setTimeout(() => {
        suggestionsContainer.innerHTML = "";
    }, 200); // Задержка, чтобы успеть кликнуть по элементу
});