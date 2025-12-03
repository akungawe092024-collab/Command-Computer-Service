// File: script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Script.js dimuat. Situs siap!');

    const body = document.body;
    
    // Tambahkan kelas setelah sedikit jeda untuk inisiasi transisi/animasi CSS
    setTimeout(() => {
        body.classList.add('loaded');
    }, 100); 

    // Kode JavaScript kustom dapat ditambahkan di sini.
});