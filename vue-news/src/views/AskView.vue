<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
export default {
  components: {
    ListItem,
  },
  // computed: {
  //   ...mapGetters(['fetchedAsk']),
  //   // ...mapGetters({
  //   //   fetchedAsk: 'fetchedAsk',
  //   // }),

  //   // #2
  //   // ...mapState({
  //   //   fetchedAsk: state => state.ask,
  //   // }),

  //   // #1
  //   // ask() {
  //   //   return this.$store.state.ask;
  //   // },
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // },
};
</script>
