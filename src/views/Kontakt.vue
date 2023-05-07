<template>
  <div class="contact-container">
    <form @submit.prevent="sendEmail" class="contact-form">
      <div class="title">VÕTA ÜHENDUST</div>
      <div class="input-container">
        <input
          v-model="name"
          type="text"
          class="input"
          placeholder="Täisnimi"
        />
        <input
          v-model="email"
          type="email"
          class="input"
          placeholder="Meiliaadress"
        />
      </div>
      <div class="textarea-container">
        <textarea
          v-model="message"
          class="textbox"
          placeholder="Sisu"
        ></textarea>
      </div>
      <div class="button-container">
        <button type="submit" class="button">SAADA</button>
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Kontakt",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      if (!this.name || !this.email || !this.message) {
        alert("Please fill all fields");
        return;
      }

      const templateParams = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      emailjs
        .send(
          "service_hhtzrmc",
          "template_vu7obor",
          templateParams,
          "9Ha_QUdN6WFbrk6ej"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Patua+One&display=swap");

.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  padding: 2rem;
  background-color: #a7c4d4;
  border-radius: 8px;
}

.title {
  font-family: "Patua One", cursive;
  margin-bottom: 1rem;
  color: #fff;
  font-size: 24px;
}

.input-container {
  width: 50%;
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  color: #4f6c77;
  border: none;
}

.textarea-container {
  width: 100%;
}

.textbox {
  width: 100%;
  height: 150px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  color: #4f6c77;
  border: none;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.button {
  font-family: "Patua One", cursive;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #4f6c77;
  color: #fff;
  border: none;
  border-radius: 8px;
}

/* Responsive styles for mobile devices */
@media screen and (max-width: 768px) {
  .input-container,
  .textarea-container,
  .button-container {
    width: 100%;
  }

  .input-container,
  .textarea-container {
    display: flex;
    justify-content: center;
  }

  .input {
    max-width: 100%;
    box-sizing: border-box;
  }

  .textbox {
    max-width: 100%;
    box-sizing: border-box;
  }
}
</style>