<template>
  <div class="flex flex-col items-center">
    <header>
      <NuxtLink to="/" class="nav_logo"
        ><span style="color: rgb(255, 104, 56)">E</span>Food</NuxtLink
      >
      <nav>
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
          <li><button class="sing_btn">Sign Up</button></li>
        </ul>
      </nav>
    </header>
    <div style="width: 1171px"><slot /></div>

    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "app",
  setup() {
    return {};
  },
};
</script>

<style>
.router-link-exact-active {
  color: rgb(255, 104, 56);
}
header {
  width: 1171px;
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
}
</style>