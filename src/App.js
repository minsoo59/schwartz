import React from "react";
import "./scss/styles.scss";

function App() {
  return (
    // <section className="main__contents">
    //   <nav>
    //     <i className="fas fa-list-ul"></i>
    //     <div className="header__top">
    //       <h1>
    //         <a href="http://localhost:3000/">Schwartz</a>
    //       </h1>
    //       <h1>
    //         <a href="http://localhost:3000/">Media</a>
    //       </h1>
    //     </div>
    //   </nav>
    //   <div className="main">
    //     <img
    //       src="https://images.unsplash.com/photo-1626884855789-2008c7eb9be4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
    //       alt="pic"
    //     ></img>
    //     <div className="arrow__down">⬇</div>
    //     <div className="bottom__letters">
    //       <p> News that lasts. </p>
    //       <div className="bottem__letters__detail">
    //         <span>About</span>
    //         <p>
    //           Schwartz Media publishes intelligent news and current affairs that
    //           breaks the 24-hour news cycle. We offer a nuanced examination of
    //           Australia and the world, focused on fresh insight and literary
    //           expression. Our audience reads to know, not just to agree. We
    //           invest in long-form journalism where the issues demand it,
    //           providing writing of a quality that makes difficult topics clear.
    //           Schwartz Media publishes Australia’s most respected writers across
    //           The Saturday Paper, The Monthly magazine and the daily podcast
    //           7am, alongside our sister publications, Quarterly Essay and
    //           Australian Foreign Affairs.
    //         </p>
    //       </div>
    //     </div>

    //     <section className="grid">
    //       <div>
    //         <p className="title">Journalism</p>
    //         <p className="descrtion">
    //           Our journalists create in-depth, independent, original public
    //           interest reporting, focusing on storytelling and insight.
    //         </p>
    //         <button>Learn more</button>
    //       </div>
    //       <img
    //         src="https://images.unsplash.com/photo-1627366046344-97ff66fb096b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    //         alt="pic"
    //       />

    //       <div>
    //         <p className="title">Journalism</p>
    //         <p className="descrtion">
    //           Our journalists create in-depth, independent, original public
    //           interest reporting, focusing on storytelling and insight.
    //         </p>
    //         <button>Learn more</button>
    //       </div>
    //       <img src="pic.png" alt="pic" />

    //       <div>
    //         <p className="title">Journalism</p>
    //         <p className="descrtion">
    //           Our journalists create in-depth, independent, original public
    //           interest reporting, focusing on storytelling and insight.
    //         </p>
    //         <button>Learn more</button>
    //       </div>
    //       <img src="pic.png" alt="" />
    //     </section>
    //   </div>
    // </section>
    <div>
      <main>
        <div class="hero">
          <div class="hero__photo"></div>
          <h2>News that lasts.</h2>
          <p>
            <span>About</span> Schwartz Media publishes intelligent news and
            current affairs that breaks the 24-hour news cycle. We offer a
            nuanced examination of Australia and the world, focused on fresh
            insight and literary expression. Our audience reads to know, not
            just to agree. We invest in long-form journalism where the issues
            demand it, providing writing of a quality that makes difficult
            topics clear. Schwartz Media publishes Australia’s most respected
            writers across The Saturday Paper, The Monthly magazine and the
            daily podcast 7am, alongside our sister publications, Quarterly
            Essay and Australian Foreign Affairs.
          </p>
        </div>
        <section class="products">
          <article class="product">
            <div>
              <h4 class="product__category">Journalism</h4>
              <p class="product__description">
                Our journalists create in-depth, independent, original public
                interest reporting, focusing on storytelling and insight.
              </p>
              <a href="#" class="btn">
                Learn more
              </a>
            </div>
            <img src="https://source.unsplash.com/random/500x360" />
          </article>
          <article class="product">
            <div>
              <h4 class="product__category">Journalism</h4>
              <p class="product__description">
                Our journalists create in-depth, independent, original public
                interest reporting, focusing on storytelling and insight.
              </p>
              <a href="#" class="btn">
                Learn more
              </a>
              <a href="#" class="btn">
                Learn more
              </a>
            </div>
            <img src="https://source.unsplash.com/random/500x360" />
          </article>
          <article class="product">
            <div>
              <h4 class="product__category">Journalism</h4>
              <p class="product__description">
                Our journalists create in-depth, independent, original public
                interest reporting, focusing on storytelling and insight.
              </p>
              <a href="#" class="btn">
                Learn more
              </a>
            </div>
            <img src="https://source.unsplash.com/random/500x360" />
          </article>
          <article class="product">
            <div>
              <h4 class="product__category">Journalism</h4>
              <p class="product__description">
                Our journalists create in-depth, independent, original public
                interest reporting, focusing on storytelling and insight.
              </p>
              <a href="#" class="btn">
                Learn more
              </a>
            </div>
            <img src="https://source.unsplash.com/random/500x360" />
          </article>
          <div class="line">
            <article class="product">
              <div>
                <h4 class="product__category">Journalism</h4>
                <img src="https://source.unsplash.com/random/500x360" />
                <p class="product__description">
                  Our journalists create in-depth, independent, original public
                  interest reporting, focusing on storytelling and insight.
                </p>
                <a href="#" class="btn">
                  Learn more
                </a>
              </div>
            </article>
            <article class="product">
              <div>
                <h4 class="product__category">Journalism</h4>
                <img src="https://source.unsplash.com/random/500x360" />
                <p class="product__description">
                  Our journalists create in-depth, independent, original public
                  interest reporting, focusing on storytelling and insight.
                </p>
                <a href="#" class="btn">
                  Learn more
                </a>
              </div>
            </article>
          </div>
        </section>
        <div class="links">
          <div class="link">
            <h4>Careers</h4>
            <span>Work at the country’s leading independent publisher. </span>
            <a href="#" class="btn">
              Learn more
            </a>
          </div>
          <div class="link">
            <h4>Careers</h4>
            <span>Work at the country’s leading independent publisher. </span>
            <a href="#" class="btn">
              Learn more
            </a>
          </div>
          <div class="link">
            <h4>Careers</h4>
            <span>Work at the country’s leading independent publisher. </span>
            <a href="#" class="btn">
              Learn more
            </a>
          </div>
        </div>
      </main>
      <footer>
        <div class="footer__top">
          <span>Schwartz</span>
          <ul>
            <li>Schwartz Media</li>
            <li>Schwartz Media</li>
            <li>Schwartz Media</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
