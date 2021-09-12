<template>
  <div>
    <p v-for="item in fetchedAsk">
      <router-link :to="`item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  computed: {
    ...mapGetters(['fetchedAsk']),
    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk',
    // }),

    // #2
    // ...mapState({
    //   fetchedAsk: state => state.ask,
    // }),

    // #1
    // ask() {
    //   return this.$store.state.ask;
    // },
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style></style>
