<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';

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
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store
        .dispatch('FETCH_ASK')
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch(error => {
          console.log(error);
        });
    }, 3000);
  },
};
</script>
