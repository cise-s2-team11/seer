import React from 'react';
// import './Style.css';

function Search() {
  return (
    <div>
    <section class="bg-primary-alt">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-9">
            <h3 class="h2">Begin your search</h3>
            <div class="my-4">
              <form>
              <div class="form-group">
                <label for="keywords">Keywords</label>
                <input name="keywords" id="keywords" type="text" class="form-control form-control-lg" placeholder="Enter search query"></input>
              </div>
              <div>
                <div data-target="#panel-1" class="accordion-panel-title" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
                  <span class="h6 mb-0">Refine your search</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="https://www.w3.org/2000/svg" class="injected-svg icon" data-src="https://leap.mediumra.re/assets/img/icons/interface/plus.svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<path d="M19 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11Z" fill="#212529"></path>
<path d="M13 19L13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5L11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z" fill="#212529"></path>
</svg>
                </div>
                <div class="collapse" id="panel-1">
                  <div class="pt-3">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group mb-1">
                          <label></label>
                        </div>
                      </div>
                      <div class="form-group col-lg-6">
                        <label for="from-date">Date Published From</label>
                        <input name="from-date" id="from-date" type="month" class="form-control form-control-lg"></input>
                      </div>
                      <div class="form-group col-lg-6">
                        <label for="to-date">To</label>
                      <input name="to-date" id="to-date" type="month" class="form-control form-control-lg"></input>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="author">Author</label>
                      <input name="author" id="author" type="text" class="form-control form-control-lg"></input>
                    </div>
                    <div class="form-group">
                      <label for="methodology">SE Methodology</label>
                      <input name="methodology" id="methodology" type="text" class="form-control form-control-lg"></input>
                    </div>
                  </div>
                </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-4 col-lg-5 col-md-6">
                        <div class="form-group text-center">
                            <button class="btn btn-lg btn-primary btn-block mb-2" type="submit">Find articles</button>
                        </div>
                    </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </section>
    </div>
  );
}

export default Search;
