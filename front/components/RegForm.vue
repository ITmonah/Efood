<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <form @submit.prevent="get_reg()">
        <div
          class="modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <div class="modal_head">
            <button
              type="button"
              class="btn-close"
              @click="close1"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M8.75 8.75L21.25 21.25"
                  stroke="#333333"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.75 21.25L21.25 8.75"
                  stroke="#333333"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button type="button" class="btn-close-reg" @click="close">
              Back
            </button>
            <h1>Sing Up</h1>
          </div>
          <div class="input_form">
            <label for="auth2">Email</label>
            <input
              type="email"
              id="auth2"
              v-model="login"
              required
              autocomplete="off"
            />
          </div>
          <div class="input_form">
            <label for="auth3">Username</label>
            <input
              type="text"
              id="auth3"
              v-model="name"
              required
              autocomplete="off"
            />
          </div>
          <div class="input_form">
            <label for="auth4">Password</label>
            <input
              type="password"
              id="auth4"
              v-model="password"
              required
              autocomplete="off"
            />
          </div>
          <div class="btns">
            <button class="btn-sub" :disabled="isDisabled">Sing up</button>
          </div>
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal1",
  data() {
    return {
      login: "",
      password: "",
      name: "",
      isDisabled: false,
    };
  },
  methods: {
    close() {
      this.$emit("close1");
    },
    close1() {
      this.$emit("close1");
      this.$emit("close");
    },
    async get_reg() {
      let credetentials = {
        email: this.login,
        name: this.name,
        password: this.password,
      };
      this.isDisabled = true;
      fetch("http://127.0.0.1:3000/registrate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credetentials),
      })
        .then((response) => response.json())
        .then((json) => {
          if (!json.error) {
            this.isDisabled = true;
            alert("Успешная регистрация");
            this.close();
            this.isDisabled = false;
          } else {
            this.isDisabled = false;
            alert(JSON.stringify(json.detail));
          }
        });
    },
  },
};
</script>

<style scoped>
.input_form label {
  color: rgb(0, 0, 0);
  font-size: 28px;
  font-weight: 400;
  line-height: 34px;
  text-align: left;
}
.input_form input {
  box-sizing: border-box;
  border-bottom: 2px solid rgb(0, 0, 0);
  background: rgb(255, 255, 255);
  width: 432px;
  height: 45px;
  color: rgb(0, 0, 0);
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  text-align: left;
}
.input_form {
  display: flex;
  flex-direction: column;
}
.modal_head {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.btn-reg {
  color: rgb(255, 122, 80);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  width: 137px;
  height: 24px;
  margin: 0 auto;
}

.btn-sub {
  border-radius: 5px;
  box-shadow: 0px 4px 14px 0px rgba(255, 104, 56, 0.19);
  background: rgb(255, 122, 80);
  width: 228px;
  height: 49px;
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  transition: 0.3s;
}
.btn-sub:hover {
  transform: scale(1.1);
}
.btn-sub:active {
  opacity: 0.6;
}
.btn-sub:disabled {
  opacity: 0.5;
}
.modal-backdrop h1 {
  color: rgb(0, 0, 0);
  font-size: 32px;
  font-weight: 400;
  line-height: 39px;
  text-align: left;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 39px;
  width: 558px;
  height: 557px;
  border-radius: 8px;
  background: rgb(255, 255, 255);
}

.btn-close {
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
  position: absolute;
  top: -30px;
  left: 300px;
}
.btn-close-reg {
  color: rgb(255, 122, 80);
  width: 64px;
  height: 24px;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  position: absolute;
  text-align: left;
  top: -24px;
  left: -206px;
}
.btns {
  display: flex;
  flex-direction: column;
  gap: 23px;
  justify-content: center;
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>