// File: script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Script.js dimuat. Situs siap!');

    // --- Contoh Fungsionalitas Ringan (jika ada elemen yang perlu dihidupkan) ---
    
    // Fungsi untuk menambah kelas 'loaded' setelah halaman dimuat 
    // (berguna untuk CSS transisi atau animasi inisial)
    const body = document.body;
    
    // Tambahkan kelas setelah sedikit jeda (agar CSS sempat ter-load)
    setTimeout(() => {
        body.classList.add('loaded');
    }, 100); 

    // Anda dapat menambahkan kode untuk menu mobile/hamburger di sini.
    // Contoh:
    // const navToggle = document.querySelector('.nav-toggle');
    // const navMenu = document.querySelector('.main-nav');

    // if (navToggle) {
    //     navToggle.addEventListener('click', () => {
    //         navMenu.classList.toggle('active');
    //     });
    // }
});