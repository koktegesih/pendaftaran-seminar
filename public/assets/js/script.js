document.addEventListener('DOMContentLoaded', function () {
    enforceAdminAccess();
});

function enforceAdminAccess() {
    const token = localStorage.getItem('authToken');
    const currentPage = window.location.pathname;

    const adminPages = [
        '/pendaftar'
    ];

    if (!adminPages.includes(currentPage)) {
        localStorage.removeItem('authToken');
    }
}