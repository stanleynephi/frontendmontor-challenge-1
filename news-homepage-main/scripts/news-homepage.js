//hamburger menu
const hamburger = document.querySelector("#hamburger")
const navigation = document.querySelector('.navigations');

hamburger.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamburger.classList.toggle('open');
});