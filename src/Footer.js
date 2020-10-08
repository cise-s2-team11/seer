import React from 'react';

function Footer() {
  return (
    <div>
        <footer class=" bg-primary-3 text-light">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col d-flex flex-column align-items-center align-items-md-start">
            <a class="navbar-brand" href="index.html">SEER</a>
            <ul class="nav mt-3">
              <li class="nav-item"><a href="#" class="nav-link pl-0 mr-2">About</a>
              </li>
              <li class="nav-item"><a href="#" class="nav-link pl-0 mr-2">Submit an Article</a>
              </li>
              <li class="nav-item"><a href="#" class="nav-link pl-0 mr-2">Join the Team</a>
              </li>
              <li class="nav-item"><a href="#" class="nav-link pl-0 mr-2">Sign-up/Login</a>
              </li>
            </ul>
            <small class="text-muted mt-2 d-none d-lg-block">&copy;2020 All Rights Reserved. SEER by Team 11 for CISE S2 2020.</small>
          </div>
          <div class="col-lg-5 col-md-6 mt-3 mt-lg-0">

            <div class="d-flex justify-content-center justify-content-md-end mt-3">

            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
