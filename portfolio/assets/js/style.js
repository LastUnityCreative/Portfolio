const switchButton = document.querySelector('#switch');

switchButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
});