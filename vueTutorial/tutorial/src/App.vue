<template>
  <div id="app">
      <Header></Header>
      <div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Header from "./components/Header"

export default {
  name: 'App',
  components : {
    Header,
  }
}
</script>


