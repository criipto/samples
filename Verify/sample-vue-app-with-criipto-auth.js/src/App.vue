<template>
  <header>
    <div class="wrapper">
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/profile">Profile</RouterLink>
        </nav>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  padding-top: 1rem;
  font-size: 1.1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
