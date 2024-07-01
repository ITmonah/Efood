<template>
  <div class="flex flex-col items-center">
    <header>
      <NuxtLink to="/" class="nav_logo"
        ><span style="color: rgb(255, 104, 56)">E</span>Food</NuxtLink
      >
      <nav class="header_nav">
        <ul class="navig">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/service">Service</NuxtLink></li>
          <li><NuxtLink to="/top_cities">Top cities</NuxtLink></li>
          <li><NuxtLink to="/contract">Contract</NuxtLink></li>
          <li>
            <button><img src="public/img/Search.svg" alt="search" /></button>
          </li>
          <li>
            <button><img src="public/img/Buy.svg" alt="buy_cart" /></button>
          </li>
          <li>
            <button class="sing_btn" v-if="!authShow" @click="showModal">
              Sign Up
            </button>
            <div v-if="authShow" class="flex gap-4">
              <p class="line-clamp-1" style="max-width: 150px">
                <b>{{ user.username }}</b>
              </p>
              <button @click="acc_exit" style="color: #eb5160">Exit</button>
            </div>
          </li>
        </ul>
      </nav>
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" v-model="togl" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <ul class="menu__box">
          <li @click="closeMenu()">
            <button class="sing_btn" v-if="!authShow" @click="showModal">
              Sign Up
            </button>
            <div v-if="authShow" class="flex gap-4">
              <p class="line-clamp-1" style="max-width: 150px">
                <b>{{ user.username }}</b>
              </p>
              <button @click="acc_exit" style="color: #eb5160">Exit</button>
            </div>
          </li>
          <li @click="closeMenu()">
            <NuxtLink to="/" class="flex gap-1">Home</NuxtLink>
          </li>
          <li @click="closeMenu()">
            <NuxtLink to="/service" class="flex gap-1">Service</NuxtLink>
          </li>
          <li @click="closeMenu()">
            <NuxtLink to="/top_cities" class="flex gap-1">Top cities</NuxtLink>
          </li>
          <li @click="closeMenu()">
            <NuxtLink to="/contract" class="flex gap-1">Contract</NuxtLink>
          </li>
        </ul>
      </div>
    </header>

    <div class="slot" style="max-width: 1171px"><slot /></div>

    <footer
      class="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 items-start gap-10 mem"
      style="max-width: 1171px; width: 100%; justify-content: space-between"
    >
      <div class="footer_links">
        <NuxtLink to="/"
          ><h2>
            <span style="color: rgb(255, 122, 80)">E</span>Food
          </h2></NuxtLink
        >
        <div class="flex flex-row gap-1.5 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5 8.50051C11.5 7.11924 10.3808 6 9.00051 6C7.61924 6 6.5 7.11924 6.5 8.50051C6.5 9.88076 7.61924 11 9.00051 11C10.3808 11 11.5 9.88076 11.5 8.50051Z"
              stroke="#363853"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.99951 19C7.80104 19 1.5 13.8984 1.5 8.56329C1.5 4.38664 4.8571 1 8.99951 1C13.1419 1 16.5 4.38664 16.5 8.56329C16.5 13.8984 10.198 19 8.99951 19Z"
              stroke="#363853"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="footer_info_text">Dhaka, Bangladesh</p>
        </div>
        <div class="flex flex-row gap-1.5 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M13.353 1.5C17.054 1.911 19.978 4.831 20.393 8.532"
              stroke="#363853"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.353 5.04297C15.124 5.38697 16.508 6.77197 16.853 8.54297"
              stroke="#363853"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0315 11.4724C14.0205 15.4604 14.9254 10.8467 17.4653 13.3848C19.9138 15.8328 21.3222 16.3232 18.2188 19.4247C17.8302 19.737 15.3613 23.4943 6.68447 14.8197C-1.99341 6.144 1.76157 3.67244 2.07394 3.28395C5.18377 0.173846 5.66682 1.58938 8.11539 4.03733C10.6541 6.5765 6.04254 7.48441 10.0315 11.4724Z"
              stroke="#363853"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="footer_info_text">0943833399</p>
        </div>
        <div class="flex flex-row gap-1.5 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g id="Iconly/Light/Message">
              <g id="Message">
                <path
                  id="Stroke 1"
                  d="M17.9026 8.85107L13.4593 12.4641C12.6198 13.1301 11.4387 13.1301 10.5992 12.4641L6.11841 8.85107"
                  stroke="#363853"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Stroke 3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.9089 21C19.9502 21.0084 22 18.5095 22 15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 18.5095 4.04979 21.0084 7.09114 21H16.9089Z"
                  stroke="#363853"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>
          <p class="footer_info_text">support@efood.com</p>
        </div>
        <div class="flex gap-2.5">
          <button><img src="public/img/facebook.svg" alt="facebook" /></button>
          <button><img src="public/img/twitter.svg" alt="twitter" /></button>
          <button>
            <img src="public/img/instagram.svg" alt="instagram" />
          </button>
          <button>
            <img src="public/img/pinterest.svg" alt="pinterest" />
          </button>
        </div>
      </div>
      <div class="footer_links lg:pl-10 md:pl-0">
        <h1>Service</h1>
        <NuxtLink to="/contract">How it works</NuxtLink>
        <NuxtLink to="/contract">Home delivery</NuxtLink>
        <NuxtLink to="/contract">Products</NuxtLink>
        <NuxtLink to="/contract">Menu</NuxtLink>
      </div>
      <div class="footer_links lg:pl-10 md:pl-0">
        <h1>Company</h1>
        <NuxtLink to="/contract">About Us</NuxtLink>
        <NuxtLink to="/contract">News</NuxtLink>
        <NuxtLink to="/contract">Our trusted partner</NuxtLink>
        <NuxtLink to="/contract">New users FAQ</NuxtLink>
      </div>
      <div class="footer_links lg:pl-10 md:pl-0">
        <h1>Supports</h1>
        <NuxtLink to="/contract">Help center</NuxtLink>
        <NuxtLink to="/contract">Feedback</NuxtLink>
        <NuxtLink to="/contract">Contact us</NuxtLink>
        <NuxtLink to="/contract">Terms conditins</NuxtLink>
      </div>
      <div class="footer_links lg:pl-10 md:pl-0">
        <h1>Resources</h1>
        <NuxtLink to="/contract">Download app</NuxtLink>
        <NuxtLink to="/contract">Blog</NuxtLink>
        <NuxtLink to="/contract">What’s new</NuxtLink>
        <NuxtLink to="/contract">Sitemap</NuxtLink>
      </div>
    </footer>
    <div class="spacer"></div>
    <div class="footer_privacy">
      <p>© 2021 EFood - All rights reserved.</p>
      <div class="footer_privacy_text">
        <p><NuxtLink to="/contract">Privacy</NuxtLink></p>
        <p><NuxtLink to="/contract">Security</NuxtLink></p>
        <p><NuxtLink to="/contract">Terms</NuxtLink></p>
      </div>
    </div>
    <modal v-show="isModalVisible" @close="closeModal" @click1="showModal1" />
    <modal1
      v-show="isModalVisible1"
      @close1="closeModal1"
      @close="closeModal"
    />
  </div>
</template>

<script>
import modal from "/components/LoginForm.vue";
import modal1 from "/components/RegForm.vue";

export default {
  name: "app",
  components: {
    modal,
    modal1,
  },
  data() {
    return {
      isModalVisible: false,
      isModalVisible1: false,
      authShow: false,
      user: {},
      togl: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    showModal1() {
      this.isModalVisible1 = true;
    },
    closeModal1() {
      this.isModalVisible1 = false;
    },
    closeMenu() {
      this.togl = false;
    },
    get_auth(token) {
      fetch("http://127.0.0.1:3000/getUsername", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if (!json.error) {
            this.user = json;
            this.authShow = true;
          } else {
            this.authShow = false;
          }
        });
    },
    async acc_exit() {
      localStorage.setItem("access_token", "");
      await navigateTo({ path: "/" });
      location.reload();
    },
  },
  beforeMount() {
    let token = localStorage.getItem("access_token");
    this.get_auth(token);
  },
};
</script>

<style>
.footer_privacy {
  display: flex;
  flex-direction: row;
  margin-bottom: 36px;
  max-width: 1171px;
  width: 100%;
  justify-content: space-between;
}
.footer_privacy_text {
  display: flex;
  flex-direction: row;
  gap: 52px;
}
.footer_privacy p {
  color: rgb(100, 100, 100);
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
}
.footer_info_text p {
  color: rgb(100, 100, 100);
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0%;
  text-align: left;
}
.spacer {
  background: rgb(150, 150, 150);
  opacity: 0.2;
  height: 1px;
  width: 100%;
  margin-bottom: 25px;
  margin-top: 25px;
}
.mem {
  margin-top: 150px;
}
.footer_info_text {
  color: rgb(55, 56, 61);
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0%;
  text-align: left;
}
.footer_links {
  display: flex;
  flex-direction: column;
  gap: 27.5px;
}
.footer_links h1 {
  color: rgb(55, 56, 61);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1%;
  line-height: 27px;
  text-align: left;
  align-items: flex-end;
}
.footer_links a {
  color: rgb(55, 56, 61);
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1%;
  text-align: left;
}
.footer_links h2 {
  color: rgb(55, 56, 61);
  font-size: 33px;
  font-weight: 500;
  letter-spacing: 5%;
  line-height: 27px;
  text-align: left;
  align-items: flex-end;
}

.router-link-exact-active {
  color: rgb(255, 104, 56);
  transition: 0.2s;
}
header {
  max-width: 1171px;
  width: 100%;
  margin-top: 54px;
  margin-bottom: 104px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.nav_logo {
  font-size: 33px;
  color: rgb(54, 56, 83);
  font-weight: 500;
  line-height: 39px;
  letter-spacing: 5%;
  text-align: left;
  text-decoration-line: none;
}
.navig {
  width: 786px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}
.navig li {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgb(54, 56, 83);
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0%;
  text-align: left;
}
.sing_btn {
  width: 120px;
  height: 50.41px;
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0%;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 22px 40px 0px rgba(255, 104, 56, 0.19);
  background: rgb(255, 122, 80);
  transition: 0.3s;
}
.sing_btn:hover {
  transform: scale(1.2);
}
.sing_btn:active {
  opacity: 0.6;
}
.hamburger-menu {
  display: none;
}
#menu__toggle {
  opacity: 0;
}
#menu__toggle:checked + .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked + .menu__btn > span::before {
  top: 0;
  transform: rotate(0deg);
}
#menu__toggle:checked + .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  left: 0 !important;
}
.menu__btn {
  position: fixed;
  top: 35px;
  right: 40px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 100;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #313131;
  transition-duration: 0.25s;
}
.menu__btn > span::before {
  content: "";
  top: -8px;
}
.menu__btn > span::after {
  content: "";
  top: 8px;
}
.menu__box {
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: fixed;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: #222222;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  transition-duration: 0.25s;
  z-index: 100;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.9);
}
.menu__box li {
  padding-left: 5%;
  font-size: 30px;
  color: #e7e7e7;
}
.menu__item {
  display: block;
  padding: 12px 24px;
  color: #333;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: 0.25s;
}
.menu__item:hover {
  background-color: #cfd8dc;
}
@media screen and (max-width: 1200px) {
  .slot,
  header,
  footer,
  .footer_privacy {
    padding-left: 2%;
    padding-right: 2%;
  }
}
@media screen and (max-width: 1000px) {
  .hamburger-menu {
    display: block;
  }
  .header_nav {
    display: none;
  }
  header {
    margin-top: 20px;
    margin-bottom: 50px;
  }
}
@media screen and (max-width: 630px) {
  .mem {
    margin-top: 80px;
  }
}
</style>