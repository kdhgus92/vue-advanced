<template>
  <div>
    <p v-for="item in fetchedAsk" v-bind:key="item.index">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <router-link v-bind:to="`item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { mapState } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedAsk"]),
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
