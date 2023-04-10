class MyFooter extends HTMLElement{connectedCallback(){this.innerHTML=`<footer>
        <div class="footer-main">
          <div class="footer-main-div company-info">
          <img loading="lazy" src="/assets/img/companyLogo.webp" alt="Company Logo" width="112" height="92">
            <p class="comp-para">
              Celebrare is a startup by Alumni of IIT Hyderabad working in the
              digital India sector to transform wedding invitations market. We
              have 3,00,000+ app downloads on play store.
            </p>
          </div>
          <div class="footer-main-div">
            <h2 class="Card-Categories">Card Categories</h2>
            <a class="All" href="/wedding-card/all.html">All</a>
            <a class="Royal" href="/wedding-card/royal.html">Royal</a>
            <a class="Hindu" href="/wedding-card/hindu.html">Hindu</a>
            <a class="South-Indian" href="/wedding-card/south-indian.html">South Indian</a>
            <a class="Bengali" href="/wedding-card/bengali.html">Bengali</a>
            <a class="Marathi" href="/wedding-card/marathi.html">Marathi</a>
            <a class="Buddha" href="/wedding-card/buddha.html">Buddha</a>
            <a class="Muslim" href="/wedding-card/muslim.html">Muslim</a>
            <a class="Sikh" href="/wedding-card/sikh.html">Sikh</a>
             <a class="General" href="/wedding-card/general.html">General</a>
            <a class="Christian" href="/wedding-card/christian.html">Christian</a>
            <a class="Other" href="/wedding-card/other.html">Other</a>
            <a class="Engagement" href="/wedding-card/engagement.html">Engagement</a>
          </div>
          <div class="footer-main-div">
            <h2 class="Policy">Policy</h2>
            <a class="Privacy-Policy" href="/policyNew.html?policy=privacyPolicy">Privacy Policy</a>
            <a class="Terms-Of-Use" href="/policyNew.html?policy=termsofuse">Terms Of Use</a>
            <a class="cancellation" href="/policyNew.html?policy=returnPolicy">Return, shipping & cancellation policy</a>
          </div>
          <div class="footer-main-div">
            <h2 class="Contact-info">Contact info</h2>
            <span class="faq">FAQ's</span>
            <a class="About-Us" href="/aboutUsPage.html">About Us</a>
            <a class="Contact-Us" href="/contact-us.html">Contact Us</a>
            <span>+91-8005993442</span>
            <span>support@celebrare.in</span>
          </div>
          <div class="footer-main-div stay-connected">
            <h2 class="Stay-Connected">Stay Connected</h2>
            <div class="social-links">
              <a href="https://in.pinterest.com/celebrare_in/" target="_blank" aria-label="pinterest page">
                <i class="fa fa-pinterest"></i
              ></a>
  
              <a href="https://www.facebook.com/celebrare.in" target="_blank" aria-label="pinterest page">
                <i class="fa fa-facebook-square"></i
              ></a>
            </div>
            <a
              class="googlePlayicon-div"
              href="https://play.google.com/store/apps/details?id=com.enjoy.celebrare"
              target="_blank"
              aria-label="playstore page"
            >
              <i class="fab fa-google-play me-2"></i>
              <div class="google-play-text Get-it-on" >Get it on Google Play</div>
            </a>
            <h2 class="qrcode-p Or-scan">Or scan QR code</h2>
            <img loading="lazy" class="qr-code" src="/assets/img/playstore-qr-code.webp" alt="google playstore" width="112" height="112">
          </div>
        </div>
        <hr>
        <div class="footer-copyright">
          <p>© Celebrare 2022</p>
        </div>
      </footer>`}}customElements.define("my-footer",MyFooter);