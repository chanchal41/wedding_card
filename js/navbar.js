class MyNavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `   
      <div class="navbar-div">
      <nav>
        <div class="hamburger-Menu-div">
          <div class="stacks stacks-1"></div>
          <div class="stacks stacks-2"></div>
          <div class="stacks stacks-3"></div>
        </div>
        <a href="/">
          <div class="logo-div">
            <img
              loading="lazy"
              src="/assets/img/logo.png"
              alt="company logo"
              srcset=""
              width="90"
              height="29"
            />
          </div>
        </a>
        <ul class="links-list">
          <li>
            <a
              class="wedding-invitation"
              id="link-list-items"
              href="/wedding-card.html"
              >Wedding Invitation</a
            >
          </li>
          <li>
            <a
           
              class="video-invite-link video-invitation"
              >Video Invitation</a
            >
          </li>
        </ul>
        <div class="login-lang-div">
          <select name="language-selector" id="language-selector">
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
          </select>
          <div class="login login-btn" id="login-btn">Login</div>
          <div class="profile-img-div"></div>
        </div>
  
        <div class="mobile-slider">
          <div>
            <div class="login-info-container">
              <button class="mobile-login-btn" id="login-btn">Login</button>
            </div>
            <a href="/wedding-card.html"
              ><div class="mobile-link-div">
                <img
                  loading="lazy"
                  src="/assets/img/navbar/card-invite.webp"
                /><span class="wedding-invitaion-mobile"
                  >Wedding Invitation</span
                >
              </div></a
            >
            <a 
              ><div class="mobile-link-div video-invitaion">
                <img
                  loading="lazy"
                  src="/assets/img/navbar/video-invite.webp"
                /><span class="video-invitaion-mobile">Video Invitation</span>
              </div></a
            >
            <a href="/my-order.html"
              ><div class="mobile-link-div">
                <img loading="lazy" src="/assets/img/navbar/order.webp" /><span
                  class="My-Orders-mobile"
                  >My Orders</span
                >
              </div></a
            >
            <a href="/draft.html"
              ><div class="mobile-link-div">
                <img loading="lazy" src="/assets/img/navbar/draft.webp" /><span
                  class="My-Draft-mobile"
                  >My Draft</span
                >
              </div></a
            >
            <a href="/my-wishlist.html"
              ><div class="mobile-link-div">
                <img
                  loading="lazy"
                  src="/assets/img/navbar/wishlist-icon.webp"
                /><span class="My-Wishlist-mobile">My Wishlist</span>
              </div></a
            >
          </div>
        </div>
      </nav>
      <div id="dashboard"></div>
    </div>`;
    }
  }
  customElements.define("my-navbar", MyNavbar);
  let clickedBurger = 0;
  document.querySelector(".hamburger-Menu-div").addEventListener("click", () => {
    if (clickedBurger == 0) {
      document.querySelector(".mobile-slider").style.display = "block";
      document.querySelector("body").style.overflowY = "hidden";
      clickedBurger++;
    } else {
      document.querySelector(".mobile-slider").style.display = "none";
      document.querySelector("body").style.overflowY = "scroll";
      clickedBurger = 0;
    }
  });
  
  document.querySelector(".mobile-slider").addEventListener("click", (e) => {
    document.querySelector(".mobile-slider").style.display = "none";
    document.querySelector("body").style.overflowY = "scroll";
    clickedBurger = 0;
  
  });
  document
    .querySelector(".mobile-slider > div")
    .addEventListener("click", (e) => {
      e.stopPropagation();
    });
  