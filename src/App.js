import React from "react";
import "./scss/styles.scss";

function App() {
  return (
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
              <h4 class="product__category">The Monthly</h4>
              <p class="product__description">
                The Monthly publishes long-form journalism from the nation's
                leading writers and thinkers, covering Australian politics,
                culture and ideas.
              </p>
              <a href="#" class="btn">
                Learn more
              </a>
              <a href="#" class="btn">
                Advertise
              </a>
            </div>
            <img src="https://source.unsplash.com/random/500x360" />
          </article>
          <article class="product">
            <div>
              <h4 class="product__category">The Saturday Paper</h4>
              <p class="product__description">
                The Saturday Paper is a weekly newspaper, dedicated to telling
                the whole story. It publishes long-form accounts of the week’s
                key stories.
              </p>
              <a href="#" class="btn">
                Learn more
              </a>
              <a href="#" class="btn">
                Advertise
              </a>
            </div>
            <img src="https://source.unsplash.com/random/500x360" />
          </article>
          <article class="product">
            <div>
              <h4 class="product__category">7am</h4>
              <p class="product__description">
                7am is a daily news podcast that tells the big stories through
                in-depth interviews and sharp analysis.
              </p>
              <a href="#" class="btn">
                Learn more
              </a>
              <a href="#" class="btn">
                Advertise
              </a>
            </div>
            <img src="https://source.unsplash.com/random/500x360" />
          </article>
          <div class="line">
            <article class="product">
              <div>
                <h4 class="product__category">Quarterly Essay</h4>
                <img src="https://source.unsplash.com/random/500x360" />
                <p class="product__description">
                  Quarterly Essay is the leading agenda-setting journal of
                  politics and culture in Australia.
                </p>
                <a href="#" class="btn">
                  Learn more
                </a>
                <a href="#" class="btn">
                  Advertise
                </a>
              </div>
            </article>
            <article class="product">
              <div>
                <h4 class="product__category">Australian Foreign Affairs</h4>
                <img src="https://source.unsplash.com/random/500x360" />
                <p class="product__description">
                  Australian Foreign Affairs is the country’s leading foreign
                  affairs journal.
                </p>
                <a href="#" class="btn">
                  Learn more
                </a>
                <a href="#" class="btn">
                  Advertise
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
            <h4>News</h4>
            <span>
              Keep in touch with what is happening at Schwartz Media.{" "}
            </span>
            <a href="#" class="btn">
              Learn more
            </a>
          </div>
          <div class="link">
            <h4>Contact</h4>
            <span>Get in touch with our editorial and advertising teams. </span>
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
