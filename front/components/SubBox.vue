<template>
  <div class="sub_box">
    <div class="sub_box_text">
      <h1>Subscribe to get the Latest Offer</h1>
      <p>
        Get our daily updates by subscribing to our newspaper, please drop your
        email below
      </p>
    </div>
    <div
      style="
        position: relative;
        max-width: 838.5px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      "
    >
      <input
        type="email"
        placeholder="Enter your email addres"
        id="sub_email"
      />
      <button class="sub_box_btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
        >
          <path
            d="M8.52503 14.3001C8.27998 14.3001 8.05378 14.1616 7.94328 13.9406L6.01408 10.0822C5.90813 9.87034 5.92633 9.61684 6.06088 9.42119L9.17503 5.20009L4.95328 8.31359C4.75763 8.44879 4.50413 8.46569 4.29223 8.36039L0.434476 6.43184C0.203076 6.31549 0.0620263 6.07304 0.0763263 5.81434C0.0899763 5.55564 0.257026 5.32944 0.500126 5.24039L12.8501 0.690388C13.0874 0.603938 13.3545 0.660488 13.5346 0.840538C13.714 1.01929 13.7725 1.28709 13.6847 1.52499L9.13473 13.875C9.04503 14.1181 8.81948 14.2851 8.56078 14.2988C8.54908 14.2994 8.53673 14.3001 8.52503 14.3001Z"
            fill="white"
          />
        </svg>
        <p>Subscribe</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sub_box {
  background: url(public/img/sub_box.svg);
  width: 100%;
  min-height: 312px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 20px;
  padding-left: 3%;
  padding-right: 3%;
}
.sub_box_text {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}
.sub_box_text h1 {
  color: rgb(255, 255, 255);
  font-size: 40px;
  font-weight: 500;
  line-height: 47px;
  letter-spacing: 0%;
  text-align: center;
}
.sub_box_text p {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: center;
  opacity: 0.8;
}
.sub_box input {
  border-radius: 70px;
  padding-left: 43px;
  box-shadow: 10px 24px 54px 0px rgba(0, 0, 0, 0.07);
  background: rgb(255, 255, 255);
  width: 100%;
  height: 78px;
  color: rgb(54, 56, 83);
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
}
.sub_box input::placeholder {
  color: rgb(54, 56, 83);
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
  opacity: 0.9;
}
.sub_box_btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 70px;
  background: rgb(255, 122, 80);
  width: 191.1px;
  height: 58.5px;
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: center;
  position: absolute;
  right: 0;
  margin-right: 10px;
  transition: 0.3s;
}
.sub_box_btn:hover {
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
}
@media screen and (max-width: 630px) {
  .sub_box h1 {
    font-size: 30px;
  }
}
</style>