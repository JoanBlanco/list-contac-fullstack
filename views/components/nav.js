const navbar = document.querySelector('#navbar');

window.addEventListener('load', () => {
  // RUTAS DEL NAV
  if (window.location.pathname === '/') {
    createNavHome();
  } else if (window.location.pathname === '/login/') {
    createNavLogin();
  } else if (window.location.pathname === '/signup/') {
    createNavSignup();
  }  else if (window.location.pathname === '/contacts/') {
    createNavContacts();
  }

  // BURGER BTN
  const burgerBtn = navbar.children[0].children[1].children[0].closest('.burger');
  burgerBtn.addEventListener('click', menuBurger);
});

// NAV HOME
const createNavHome = () => {
  const div = document.createElement('DIV');
  div.id = 'container';
  div.classList.add('flex', 'justify-between', 'items-center', 'gap-4', 'w-full', 'px-6', 'bg-neutral-700', 'h-20', 'fixed', 'm');
  div.innerHTML = `
    <a class="text-neutral-100 font-bold text-xl capitalize" href="/">ContactApp</a>
    <div class="flex justify-end items-center gap-8 w-2/4">
        <!-- BURGER SVG CONTAINER -->
        <div id="burger-container" class="burger flex justify-center items-center cursor-pointer z-20 text-neutral-100 md:hidden transition ease-in-out">
            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>              
        </div>
        <!-- MENU MOBILE -->
        <ul id="menu" class="hidden flex-col gap-4 justify-start items-center fixed top-20 right-0 bottom-0 bg-neutral-800 w-2/4 h-screen py-4 z-10 md:bg-transparent md:relative md:h-20 md:top-0 md-py-0 md:flex md:flex-row md:justify-end md:items-center md:gap-8 md:w-auto transition duration-1000 ease-in-out">
            <!-- LOGIN -->
            <li>
                <a class="nav-link font-bold text-neutral-100 text-lg capitalize flex gap-1 items-center transition ease-in-out" href="/login/">
                    Login
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>  
                    
                </a>
            </li>
            <!-- SIGN UP -->
            <li>
                <a class="text-neutral-100 text-lg capitalize bg-neutral-500 rounded py-2 px-4 flex gap-1 items-center font-bold md:hover:opacity-75 transition ease-in-out" href="/signup/">
                    Sign Up
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>                      
                </a>
            </li>
        </ul>
    </div>
    `;

  navbar.appendChild(div);
};
// LOGIN NAV
const createNavLogin = () => {
  const div = document.createElement('DIV');
  div.id = 'container';
  div.classList.add('flex', 'justify-between', 'items-center', 'gap-4', 'w-full', 'px-6', 'bg-neutral-700', 'h-20', 'fixed', 'm');
  div.innerHTML = `
      <a class="text-neutral-100 font-bold text-xl capitalize" href="/">ContactApp</a>
      <div class="flex justify-end items-center gap-8 w-2/4">
          <!-- BURGER SVG CONTAINER -->
          <div id="burger-container" class="burger flex justify-center items-center cursor-pointer z-20 text-neutral-100 md:hidden transition ease-in-out">
              <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>              
          </div>
          <!-- MENU MOBILE -->
          <ul id="menu" class="hidden flex-col gap-4 justify-start items-center fixed top-20 right-0 bottom-0 bg-neutral-800 w-2/4 h-screen py-4 z-1000 md:bg-transparent md:relative md:h-20 md:top-0 md-py-0 md:flex md:flex-row md:justify-end md:items-center md:gap-8 md:w-auto transition duration-1000 ease-in-out">
              <!-- SIGN UP -->
              <li>
                  <a class="text-neutral-100 text-lg capitalize bg-neutral-500 rounded py-2 px-4 flex gap-1 items-center font-bold md:hover:opacity-75 transition ease-in-out" href="/signup/">
                      Sign Up
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                      </svg>                      
                  </a>
              </li>
          </ul>
      </div>
      `;

  navbar.appendChild(div);
};
// NAV SIGNUP
const createNavSignup = () => {
  const div = document.createElement('DIV');
  div.id = 'container';
  div.classList.add('flex', 'justify-between', 'items-center', 'gap-4', 'w-full', 'px-6', 'bg-neutral-700', 'h-20', 'fixed', 'm');
  div.innerHTML = `
      <a class="text-neutral-100 font-bold text-xl capitalize" href="/">ContactApp</a>
      <div class="flex justify-end items-center gap-8 w-2/4">
          <!-- BURGER SVG CONTAINER -->
          <div id="burger-container" class="burger flex justify-center items-center cursor-pointer z-20 text-neutral-100 md:hidden transition ease-in-out">
              <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>              
          </div>
          <!-- MENU MOBILE -->
          <ul id="menu" class="hidden flex-col gap-4 justify-start items-center fixed top-20 right-0 bottom-0 bg-neutral-800 w-2/4 h-screen py-4 z-10 md:bg-transparent md:relative md:h-20 md:top-0 md-py-0 md:flex md:flex-row md:justify-end md:items-center md:gap-8 md:w-auto transition duration-1000 ease-in-out">
              <!-- LOGIN -->
              <li>
                  <a class="nav-link font-bold text-neutral-100 text-lg capitalize flex gap-1 items-center transition ease-in-out" href="/login/">
                      Login
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>  
                      
                  </a>
              </li>
          </ul>
      </div>
      `;

  navbar.appendChild(div);
};
// NAV CONTACTS
const createNavContacts = () => {
  const div = document.createElement('DIV');
  div.id = 'container';
  div.classList.add('flex', 'justify-between', 'items-center', 'gap-4', 'w-full', 'px-6', 'bg-neutral-700', 'h-20', 'fixed', 'm');
  div.innerHTML = `
      <a class="text-neutral-100 font-bold text-xl capitalize" href="/">ContactApp</a>
      <div class="flex justify-end items-center gap-8 w-2/4">
          <!-- BURGER SVG CONTAINER -->
          <div id="burger-container" class="burger flex justify-center items-center cursor-pointer z-20 text-neutral-100 md:hidden transition ease-in-out">
              <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>              
          </div>
          <!-- MENU MOBILE -->
          <ul id="menu" class="hidden flex-col gap-4 justify-start items-center fixed top-20 right-0 bottom-0 bg-neutral-800 w-2/4 h-screen py-4 z-10 md:bg-transparent md:relative md:h-20 md:top-0 md-py-0 md:w-auto md:flex md:flex-row md:justify-end md:items-center md:gap-8  transition duration-1000 ease-in-out">
              <!-- SIGN OUT -->
              <li class="w-38">
                  <button class="text-neutral-100 text-lg capitalize bg-neutral-500 rounded py-2 px-4 flex gap-1 items-center font-bold md:hover:opacity-75 transition ease-in-out">
                    Logout
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>                  
                  </button>
              </li>
          </ul>
      </div>
      `;
  const logoutBtn = div.children[1].children[1].children[0].children[0];

  logoutBtn.onclick = async () => {
    try {
      await axios.get('/api/logout/');
      window.location.pathname = '/login/';
      window.history.replaceState({},'', '/login');
    } catch (error) {
      console.log(error);
    }
  };

  navbar.appendChild(div);
};

// BURGER BTN
const menuBurger = (e) => {
  const target = e.target.closest('.burger');
  if (target.nextElementSibling.classList.contains('hidden')) {
    target.nextElementSibling.classList.toggle('hidden');
    target.nextElementSibling.classList.toggle('flex');
    target.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    
      `;
  } else {
    target.nextElementSibling.classList.toggle('hidden');
    target.nextElementSibling.classList.toggle('flex');
    target.innerHTML = `
      <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    
      `;
  }

};


