import React from 'react';
import './Style.css';

function Hero() {
  return (
    <div>
    <section class="bg-primary-3 has-divider text-light o-hidden">
      <div class="container layer-2">
        <div class="row justify-content-center pt-lg-5">
          <div class="col-xl-5 col-lg-6 col-md-7 text-center text-lg-left mb-5 mb-lg-0">
            <h1 class="display-3">Find Articles</h1>
            <div class="my-4">
              <p class="lead">SEER (Software Engineering Evidence Repository) is a searchable database of evidence curated by Software Engineering experts from the Software Engineering Research Lab (SERL) at AUT.</p>
              <span><a href="#">Read more about us here.</a></span>
            </div>
            <div class="d-flex justify-content-center justify-content-lg-start">
            </div>
          </div>
          <div class="col">
            <div class="row justify-content-center">
              <div class="col-xl-8 col-md-10">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="divider">
        <svg width="100%" height="96px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" class="injected-svg bg-primary-alt" data-src="assets/img/dividers/divider-2.svg">
    <path d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"></path>
</svg>
      </div>
    </section>
    </div>
  );
}

export default Hero;
