// --- FITUR 6: DARK MODE (CEK CEPAT) ---
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    }
})();

// --- UTAMA: SAAT HALAMAN SELESAI DIMUAT ---
document.addEventListener("DOMContentLoaded", function() {

    // --- FITUR 1: TABS ---
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab'); 
            tabLinks.forEach(function(item) {
                item.classList.remove('active');
            });
            tabPanes.forEach(function(item) {
                item.classList.remove('active');
            });
            this.classList.add('active');
            if (document.getElementById(tabId)) {
                document.getElementById(tabId).classList.add('active');
            }
        });
    });

    // --- FITUR 2: ACCORDION (FAQ) ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            const isActive = this.classList.contains('active');
            accordionHeaders.forEach(function(item) {
                item.classList.remove('active');
                item.nextElementSibling.style.maxHeight = null;
            });
            if (!isActive) {
                this.classList.add('active');
                const content = this.nextElementSibling;
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // --- FITUR 3: PRICING TOGGLE ---
    const toggleCheckbox = document.getElementById('pricing-toggle-checkbox');
    const monthlyLabels = document.querySelectorAll('.toggle-label[data-period="monthly"]');
    const yearlyLabels = document.querySelectorAll('.toggle-label[data-period="yearly"]');
    const monthlyPrices = document.querySelectorAll('.price-monthly');
    const yearlyPrices = document.querySelectorAll('.price-yearly');

    if (toggleCheckbox) {
        toggleCheckbox.addEventListener('change', function() {
            if (this.checked) { showYearly(); } 
            else { showMonthly(); }
        });
    }
    function showMonthly() {
        monthlyLabels.forEach(label => label.classList.add('active'));
        yearlyLabels.forEach(label => label.classList.remove('active'));
        monthlyPrices.forEach(price => price.classList.add('active'));
        yearlyPrices.forEach(price => price.classList.remove('active'));
    }
    function showYearly() {
        monthlyLabels.forEach(label => label.classList.remove('active'));
        yearlyLabels.forEach(label => label.classList.add('active'));
        monthlyPrices.forEach(price => price.classList.remove('active'));
        yearlyPrices.forEach(price => price.classList.add('active'));
    }

    // --- FITUR 4: VALIDASI FORM ---
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const companyInput = document.getElementById('company');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const isNameValid = checkRequired(nameInput, 'Nama lengkap wajib diisi');
            const isEmailValid = checkEmail(emailInput);
            const isCompanyValid = checkRequired(companyInput, 'Nama perusahaan wajib diisi');
            
            if (isNameValid && isEmailValid && isCompanyValid) {
                form.submit();
            }
        });
    }
    
    function showError(input, message) {
        const formGroup = input.parentElement;
        formGroup.classList.remove('success');
        formGroup.classList.add('error');
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.innerText = message;
    }
    function showSuccess(input) {
        const formGroup = input.parentElement;
        formGroup.classList.remove('error');
        formGroup.classList.add('success');
    }
    function checkRequired(input, message) {
        if (input.value.trim() === '') {
            showError(input, message);
            return false;
        } else {
            showSuccess(input);
            return true;
        }
    }
    function checkEmail(input) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (input.value.trim() === '') {
            showError(input, 'Email wajib diisi');
            return false;
        } else if (!emailRegex.test(input.value.trim())) {
            showError(input, 'Email tidak valid');
            return false;
        } else {
            showSuccess(input);
            return true;
        }
    }

    // --- FITUR 5: SCROLL REVEAL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } 
        });
    }, {
        threshold: 0.1 
    });
    const hiddenElements = document.querySelectorAll('.reveal-hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // --- FITUR 6: DARK MODE (LOGIKA TOMBOL) ---
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    const body = document.body;

    if (themeToggle) {
        if (body.getAttribute('data-theme') === 'dark') {
            themeToggle.checked = true;
        }

        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            }
        });
    }

});