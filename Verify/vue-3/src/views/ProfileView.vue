<script setup lang="ts">
import criiptoAuth from '../../criipto-auth'
import { reactive, onMounted } from 'vue/dist/vue';

const state = reactive({
  userName: 'user',
  isLoggedIn: false,
  claims: JSON.parse(sessionStorage.getItem('claims') || '{}'),
});

function matchCallback() {
  criiptoAuth.redirect
    .match()
    .then((result) => {
      if (result && result.claims) {
        state.isLoggedIn = true;
        state.claims = result.claims;
        state.userName = result.claims.name;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

onMounted(() => {
    matchCallback();
});

const logout = () => {
  criiptoAuth.logout({
    redirectUri: 'http://localhost:5173',
  });
  sessionStorage.removeItem('claims');
};

</script>

<template>
  <div class="profile">
    <div v-if="state.isLoggedIn">
      <h1> 
        Hello, <span>{{ state.userName }}</span>
      </h1>
      <div class="content">
        <div class="left">
          <h2>You are logged in</h2>
          <button @click="logout">Logout</button>
        </div>
        <div class="right">
          <ul>
            <li v-for="(value, key) in state.claims" :key="key">
              {{ key }}: {{ value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Please login on the Home page</h2>
    </div>
  </div>
</template>

<style>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px; 
  position: relative;
  top: 50px;
  left: 0;
  z-index: 0;
}

h1 {
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
}

.left {
  margin-left: 2.5rem;

}

.right {
  flex: 1;
  margin-left: 2rem;
  overflow-y: scroll
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 6.5rem;
}

span {
  color: #0070f3;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 0.5rem;
}

li:last-of-type {
  border-bottom: none;
}

</style>