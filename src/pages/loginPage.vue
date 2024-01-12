<template>
  <div class="login-container">
    <div class="text-h6">Welcome Back Audacity!</div>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
      <div class="row flex-center q-py-md">OR Login With</div>
      <div class="row flex-center">
        <q-img
          src="https://seeklogo.com/images/G/google-logo-28FA7991AF-seeklogo.com.png"
          style="height: 40px; width: 40px"
          spinner-color="primary"
          spinner-size="82px"
        />
        <q-tooltip> Upcoming Features & Need Server </q-tooltip>
      </div>
    </form>
    <div class="register-link">
      Don't have an account? <router-link to="/register">Register</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      const userCredentials = {
        username: this.username,
        password: this.password,
      };
      const lastQueue = localStorage.getItem('lastQueue');
      localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
      this.$router.push(`/playback/${JSON.parse(lastQueue).playID}`);
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.register-link {
  margin-top: 20px;
}
</style>
