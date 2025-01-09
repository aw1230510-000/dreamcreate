window.addEventListener('DOMContentLoaded', function () {
    // ローカルストレージからデータを取得
    let savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
        document.getElementById('name').textContent = savedData.name;
        document.getElementById('furigana').textContent = savedData.furigana;
        document.getElementById('mail').textContent = savedData.mail;
        document.getElementById('select-options').textContent = savedData.select;
        document.getElementById('details').textContent = savedData.details;
    }
});