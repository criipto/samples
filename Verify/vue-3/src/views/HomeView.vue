<script setup lang="ts">
import criiptoAuth from '../../criipto-auth'

// Login with redirect
const loginWithEid = () => {
  criiptoAuth.redirect
    .authorize({
      redirectUri: 'http://localhost:5173/profile',
    })
    .then((result) => {
      console.log('result', result);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<template>
  <main>
    <h1>
      Hello, <span>user</span>
    </h1>
    <button @click="loginWithEid">Login with eID</button>
  </main>
</template>

<style >
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #0070f3;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0062cc;
}

span {
  color: #0070f3;
}
</style>
