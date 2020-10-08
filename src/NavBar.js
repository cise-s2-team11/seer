import React from 'react';
import './Style.css';

function NavBar() {
  return (
    <div class="navbar-container ">
      <nav class="navbar navbar-expand-lg bg-primary-3 navbar-dark">
        <div class="container">
          <a class="navbar-brand fade-page" href="%PUBLIC_URL%">
            SEER
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
            <img class="icon navbar-toggler-open" src="assets/img/icons/interface/menu.svg" alt="menu interface icon" data-inject-svg />
            <img class="icon navbar-toggler-close" src="assets/img/icons/interface/cross.svg" alt="cross interface icon" data-inject-svg />
          </button>
          <div class="collapse navbar-collapse justify-content-end">
            <div class="py-2 py-lg-0">
              <ul class="navbar-nav">
                <li class="nav-item"><a href="#" class="nav-link">Submit an Article</a>
                </li>
                <li class="nav-item"><a href="#" class="nav-link">Sign Up</a>
                </li>
                <li class="nav-item"><a href="#" class="nav-link">Login</a>
                </li>
                <li class="nav-item"><a href="#" class="nav-link">About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
