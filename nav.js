console.clear();

const app = (() => {
	let body;
	let menu;
	let menuItems;
	let logo;

	const init = () => {
		body = document.querySelector("body");
		menu = document.querySelector(".menu-icon");
		menuItems = document.querySelectorAll(".nav__list-item-a");
		logo = document.querySelector('.logo');
		logoActive = document.querySelector(".logo-active");

    applyListeners();
    applyListenersToLeave();
	};

	const applyListeners = () => {
    menu.addEventListener("click", () => toggleClass(body, "nav-active"));
  };
  
  const applyListenersToLeave = () =>{
    Array.from(menuItems).forEach(menuItem=>{
      menuItem.addEventListener("click",()=>toggleClass(body, "nav-active"))
    })
  }

	const toggleClass = (element, stringClass) => {
		if (element.classList.contains(stringClass)) {
			element.classList.remove(stringClass);
			logo.style.opacity = "1"
			logoActive.style.opacity = "0"
		} else {
			element.classList.add(stringClass);
			logo.style.opacity = "0"
			logoActive.style.opacity = "1"
		}
			
		
	};

	init();
})();
