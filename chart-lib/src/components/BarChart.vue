<template>
  <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
</template>

<script>
export default {
  props: ["propsdata"],
  // 컴포넌트 속성 && 인스턴스 옵션
  mounted() {
    // var ctx = document.getElementById("barChart");
    // var ctx = this.$refs.barChart;

    new this.$_Chart(this.$refs.barChart, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: this.propsdata,
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        onClick: function() {
            this.$emit('refresh:chart');
        }
      },
    });
  },
};
</script>

<style></style>
