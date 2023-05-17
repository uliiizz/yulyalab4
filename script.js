
    const form = document.querySelector("form");
    const resultDiv = document.getElementById("result");
    form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const lat = form.lat.value;
    const lng = form.lng.value;
    const date = form.date.value;
    const url = `http://localhost:8080/api?lat=${lat}&lng=${lng}&date=${date}`;


    const maxAttempts = 3; // Максимальна кількість спроб
    let attempts = 0; // Лічильник спроб

    while (attempts < maxAttempts) {
        try {
        const response = await fetch(url);
        const data = await response.json();
        resultDiv.innerHTML = `Схід сонця: ${data.results.sunrise}<br>Захід сонця: ${data.results.sunset}`;
        break; // Вихід з циклу у разі успішного отримання даних
        } catch (error) {
        console.log(error);
        attempts++; // Збільшення лічильника спроб
        }
    }

    if (attempts === maxAttempts) {
        resultDiv.innerHTML = "Помилка"; // Виведення повідомлення про помилку, якщо досягнуто максимальну кількість спроб
    }

    });
