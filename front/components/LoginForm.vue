<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <form @submit.prevent="get_token()">
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
              @click="close"
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
            <h1>Авторизация</h1>
          </div>
          <div class="input_form">
            <label for="auth">Email</label>
            <input type="email" id="auth" v-model="login" required="" />
          </div>
          <div class="input_form">
            <label for="auth1">Пароль</label>
            <input type="password" id="auth1" v-model="password" required="" />
          </div>
          <div class="btns">
            <button class="btn-sub" type="submit">Войти</button>
            <p style="user-select: none">_</p>
          </div>
        </div>
      </form>
      <div style="position: relative">
        <button class="btn-reg" @click="close1">регистрация</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {
      login: "",
      password: "",
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    close1() {
      this.$emit("click1");
    },
    async get_token() {
      let credetentials = {
        mail: this.login,
        pwd: this.password,
      };
      fetch("http://127.0.0.1:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credetentials),
      })
        .then((response) => response.json())
        .then((json) => {
          if (!json.detail) {
            localStorage.setItem("access_token", json.access_token);
            location.reload();
          } else {
            if (this.password.length < 6) {
              alert("Минимальная длина пароля - 6 символов");
            } else {
              alert(JSON.stringify(json.detail));
            }
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
  padding-left: 8px;
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
  color: rgb(235, 81, 96);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  width: 137px;
  height: 24px;
  margin: 0 auto;
  position: absolute;
  bottom: 35px;
  right: -70px;
}
.btn-sub {
  border-radius: 6px;
  background: rgb(235, 81, 96);
  width: 228px;
  height: 49px;
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
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
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
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
  height: 493px;
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
  left: 350px;
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