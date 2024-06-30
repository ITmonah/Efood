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
      <div style="max-width: 733px">
        <img src="public/img/scooter.png" alt="" />
      </div>
    </div>
    <div class="main_box">
      <h1>
        Our popular <span style="color: rgb(255, 104, 56)">Category</span>
      </h1>
      <div class="main_box_items">
        <ul class="category_btns">
          <div v-for="item in category" :key="item.id" class="category_btns_in">
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
        <div
          class="flex justify-between flex-wrap food_card_divs"
          style="gap: 6px"
        >
          <div v-for="p in product" :key="p.id" class="food_card_div">
            <FoodCard :product="p" />
          </div>
        </div>
      </div>
    </div>
    <div class="main_box_row">
      <img
        src="public/img/food_delivery.png"
        alt="food_delivery"
        class="img_tele"
      />
      <div class="main_box_row_text">
        <h1>
          <span style="color: rgb(255, 104, 56)">Stay</span> at home, we will
          Provide <span style="color: rgb(255, 104, 56)">good food</span>
        </h1>
        <div style="display: flex; flex-direction: column; gap: 21px">
          <p>
            We provide tasty food and superfast delivery at your home. Let’s use
            our services right now and get discounts of up to 50%.
          </p>
          <div class="main_box_row_item">
            <img src="public/img/main_box1.svg" alt="item1" />
            <p>fasted delivery in 30 Minutes</p>
          </div>
          <div class="main_box_row_item">
            <img src="public/img/main_box2.svg" alt="item2" />
            <p>300+ delivery men</p>
          </div>
          <div class="main_box_row_item">
            <img src="public/img/main_box3.svg" alt="item3" />
            <p>500+ restaurant & cafe shop</p>
          </div>
        </div>
        <button>See more</button>
      </div>
    </div>
    <div class="main_box">
      <h1>Top Food <span style="color: #ff7a50">restaurant</span></h1>
      <div class="grid xl:grid-cols-3 gap-11 lg:grid-cols-2 md:grid-cols-2">
        <div v-for="p in product" :key="p.id">
          <RestCard :product="p" />
        </div>
      </div>
    </div>
    <div class="main_box_row">
      <div class="main_box_row_text2">
        <h1>
          Download Our <span style="color: rgb(255, 104, 56)">Mobile App</span>
        </h1>
        <p>
          It's all at your fingertips -- the restaurants you love. Find the
          right food to suit your mood, and make the first bite last. Go ahead,
          download app and get 50% discount
        </p>
        <div class="flex gap-8">
          <button>
            <img src="public/img/app_store.svg" alt="app_store" />
          </button>
          <button>
            <img src="public/img/google_play.svg" alt="google_play" />
          </button>
        </div>
      </div>
      <img src="public/img/tele.png" alt="telephones" class="img_tele" />
    </div>
    <div class="main_box">
      <h1>What Our Client Are <span style="color: #ff7a50">Saying</span></h1>
      <div class="main_box_review">
        <img :src="product[0].image" alt="" />
        <div class="main_box_review_box">
          <div class="main_box_review_text">
            <span>“</span>
            <p>
              EFood has the most intriguing food order system in the country. UI
              in both their app and web Is very simple and easy to use,
              enhancing the UX. Their delivery men are also quite professional
              and knows the neighborhood well. Till now I never had to guide
              them to my address for delivery;
            </p>
            <span style="transform: rotate(180deg); bottom: -25px; right: -35px"
              >“</span
            >
          </div>
          <div class="review_bottom">
            <div class="review_bottom_text">
              <h1>Anglina Jole</h1>
              <p>Food lover</p>
            </div>
            <div class="flex gap-11">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M27 16H5"
                    stroke="#7B7B7B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 7L5 16L14 25"
                    stroke="#7B7B7B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M5 16H27"
                    stroke="#FF7A50"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 7L27 16L18 25"
                    stroke="#FF7A50"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <SubBox /> -->
  </div>
</template>

<script setup>
const { data: product } = await useFetch(
  "https://fakestoreapi.com/products?limit=5"
);
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
.review_bottom_text {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.review_bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 12px;
}
.main_box_review_text {
  position: relative;
}
.main_box_review_text p {
  max-width: 573px;
  color: rgb(54, 56, 83);
  font-size: 20px;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: 0.5px;
  text-align: left;
}
.main_box_review_text span {
  color: rgb(221, 221, 221);
  font-family: Nunito;
  font-size: 80px;
  font-weight: 400;
  line-height: 109px;
  letter-spacing: 0.5px;
  text-align: left;
  position: absolute;
  top: -20px;
  left: -50px;
}
.main_box_items {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 39px;
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 130px;
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
  max-width: 733px;
  width: 100%;
}
.main_head_text {
  max-width: 530px;
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
  transition: 0.3s;
}
.explore_btn:hover {
  transform: scale(1.1);
}
.explore_btn:active {
  opacity: 0.6;
}
.download_btn {
  color: rgb(54, 56, 83);
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  transition: 0.3 s;
  text-decoration-line: underline;
}
.download_btn:hover {
  color: rgb(255, 122, 80);
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
  flex-wrap: wrap;
  gap: 6px;
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
.main_box_row_text h1,
.main_box_row_text2 h1 {
  color: rgb(54, 56, 83);
  font-size: 36px;
  font-weight: 500;
  line-height: 50px;
  letter-spacing: 0%;
  text-align: left;
  text-transform: capitalize;
}
.main_box_row_text p,
.main_box_row_text2 p {
  color: rgb(54, 56, 83);
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
}
.main_box_row_text2 {
  width: 538px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.main_box_row_item p {
  color: rgb(54, 56, 83);
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
  text-transform: capitalize;
}
.main_box_row_item {
  display: flex;
  flex-direction: row;
  gap: 28px;
}
.main_box_row_text {
  max-width: 449px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.main_box_row_text button {
  width: 176px;
  height: 58px;
  border-radius: 30px 30px 1px 30px;
  box-shadow: 0px 22px 40px 0px rgba(255, 104, 56, 0.19);
  background: rgb(255, 122, 80);
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 20px;
  transition: 0.3s;
}
.main_box_row_text button:hover {
  transform: scale(1.1);
}
.main_box_row_text button:active {
  opacity: 0.6;
}
.main_box_row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.review_bottom_text h1 {
  color: rgb(255, 122, 80);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
}
.review_bottom_text p {
  color: rgb(170, 170, 170);
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0%;
  text-align: left;
}
.main_box_review_box {
  min-height: 358px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 40px;
}
.main_box_review img {
  object-fit: cover;
  width: 433px;
  height: 519px;
  border-radius: 24px;
  box-shadow: 0px 22px 40px 0px rgba(254, 182, 54, 0.08);
}
.main_box_review {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 1360px) {
  .main_head img {
    max-width: 533px;
    position: relative;
    width: 100%;
  }
  .main_head_text {
    margin-bottom: 0px;
  }
  .main_head {
    min-height: 481px;
    justify-content: space-between;
  }
}
@media screen and (max-width: 1155px) {
  .main_box_review {
    flex-direction: column;
  }
  .main_box_review_box {
    padding-right: 0px;
    margin-top: 30px;
  }
}
@media screen and (max-width: 1118px) {
  .category_btns {
    justify-content: center;
  }

  .category_btns_in {
    width: 49%;
  }
  .category_btns label {
    width: 100%;
  }
  .food_card_div {
    display: flex;
    justify-content: center;
    width: 24%;
  }
  .food_card_divs {
    justify-content: center;
  }
}
@media screen and (max-width: 1000px) {
  .main {
    gap: 90px;
  }
  .img_tele {
    width: 50%;
  }
}
@media screen and (max-width: 630px) {
  .img_tele {
    display: none;
  }
  .main_box_row {
    justify-content: center;
  }
  .main_head img {
    display: none;
  }
  .main_box_review_text span {
    display: none;
  }
  .main_box_review img {
    width: 50%;
    height: 50%;
  }
  .main_box_review_text p {
    font-size: 16px;
    line-height: 35px;
  }
  .main_box_review_box {
    min-height: 250px;
  }
  .category_btns_in {
    width: 100%;
  }
  .category_btns label {
    width: 100%;
  }
  .food_card_div {
    width: 49%;
  }
  .main_head_text h1 {
    font-size: 46px;
    line-height: 58px;
  }
  .main_head {
    min-height: 300px;
  }
  .main_box_row_text2 {
    width: 90%;
  }
  @media screen and (max-width: 560px) {
    .food_card_div {
      width: 100%;
    }
  }
}
</style>