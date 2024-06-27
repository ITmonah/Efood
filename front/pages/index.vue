<template>
  <div class="main">
    <div class="main_head">
      <div class="main_head_text">
        <h1>super fast <span>Food delivery</span> service</h1>
        <p>
          We provide super fast-delivery service. Let’s use our services right
          now and get discounts of up to 50%
        </p>
        <div class="main_head_btns">
          <button class="explore_btn">Explore Food</button>
          <button class="download_btn">Download App</button>
        </div>
      </div>
      <div><img src="public/img/scooter.png" alt="" /></div>
    </div>
    <div class="main_box">
      <h1>
        Our popular <span style="color: rgb(255, 104, 56)">Category</span>
      </h1>
      <div class="main_box_items">
        <ul class="category_btns">
          <div v-for="item in category" :key="item.id">
            <li>
              <input
                type="radio"
                name="cat_radio"
                :id="`rad_cat` + item.name"
                :checked="item.name == 'Burger'"
                style="display: none"
              />
              <label :for="`rad_cat` + item.name">
                <img :src="`../img/category_${item.image}.svg`" alt="" />
                <p>{{ item.name }}</p>
              </label>
            </li>
          </div>
        </ul>
        <div v-for="p in product" :key="p.id">
          <FoodCard :product="p" />
        </div>
      </div>
    </div>
    <div class="main_box"></div>
  </div>
</template>

<script setup>
const { data: product } = await useFetch("https://fakestoreapi.com/products");
</script>

<script>
export default {
  data() {
    return {
      category: [
        { name: "Burger", image: 1 },
        { name: "Pizza", image: 2 },
        { name: "Sandwich", image: 3 },
        { name: "Asian Food", image: 4 },
        { name: "Set Menu", image: 5 },
      ],
    };
  },
};
</script>

<style scoped>
.main_box_items {
  display: flex;
  flex-direction: column;
  gap: 39px;
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 100px;
}
.main_head {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  min-height: 681px;
}
.main_box h1 {
  font-size: 36px;
  font-weight: 500;
  line-height: 43px;
  letter-spacing: 0%;
  text-align: left;
  text-transform: capitalize;
}
.main_head img {
  position: absolute;
  top: 0;
}
.main_head_text {
  width: 530px;
  margin-bottom: 110px;
}
.main_head_text h1 {
  font-size: 66px;
  color: rgb(54, 56, 83);
  font-weight: 500;
  line-height: 78px;
  letter-spacing: 0%;
  text-align: left;
  text-transform: capitalize;
  margin-bottom: 23px;
}
.main_head_text h1 span {
  color: rgb(255, 104, 56);
}
.main_head_text p {
  color: rgb(54, 56, 83);
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
  text-transform: capitalize;
  margin-bottom: 45px;
}
.explore_btn {
  width: 163px;
  height: 50.41px;
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 22px 40px 0px rgba(255, 104, 56, 0.19);
  background: rgb(255, 122, 80);
}
.download_btn {
  color: rgb(54, 56, 83);
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  text-decoration-line: underline;
}
.main_head_btns {
  display: flex;
  flex-direction: row;
  gap: 30px;
}
.category_btns label {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 210px;
  height: 70px;
  border-radius: 8px;
  background: rgb(255, 255, 255);
  color: rgb(54, 56, 83);
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  cursor: pointer;
}
.category_btns input[type="radio"]:checked + label {
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.12);
  background: rgb(255, 122, 80);
  color: white;
  transition: 0.2s;
}
.category_btns input[type="radio"]:checked + label img {
  filter: invert(100%);
  transition: 0.2s;
}
.category_btns {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.category_btns label img {
  width: 44px;
  height: 44px;
}
.main_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
</style>