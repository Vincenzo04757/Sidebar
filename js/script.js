const sidebar = document.getElementById('sidebar');
    const btn = document.getElementById('trigger-btn');
    const menuTexts = document.querySelectorAll('.menu-text');

    let sidebarActive = false;
    btn.addEventListener('click', () => {
        if (sidebarActive) {
            sidebar.style.width = '0';
            sidebarActive = false;
            menuTexts.forEach(text => {
                text.style.display = 'none';
            });
        } else {
            sidebar.style.width = '15vw';
            sidebarActive = true;
            menuTexts.forEach(text => {
                text.style.display = 'flex';
            });
        }
    });