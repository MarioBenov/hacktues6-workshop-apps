<template>
  <div class="cont">
    <div class="countdown">
      <div>
        <span>{{days}}</span>
        <span>дена</span>
      </div>
      <div>
        <span>{{hours}}</span>
        <span>часа</span>
      </div>
      <div>
        <span>{{minutes}}</span>
        <span>минути</span>
      </div>
      <div>
        <span>{{seconds}}</span>
        <span>секунди</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment'

const targetTime = moment('2020-10-04T23:59:59')

export default Vue.extend({
  data() {
    return  {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },

  mounted() {
    this.updateCountdown()
    setInterval(() => this.updateCountdown(), 1000)
  },

  methods: {
    updateCountdown() {
      const currTime = moment()
      const diffTime = moment.duration(targetTime.diff(currTime))

      this.days = diffTime.days()
      this.hours = diffTime.hours()
      this.minutes = diffTime.minutes()
      this.seconds = diffTime.seconds()
    }
  }
})
</script>

<style>
.cont {
  width: 1000px;
  background: white;
  margin: 0 auto;
  border-radius: 5px;
  padding: 50px;
}

.countdown {
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
}

.countdown > div > span {
  display: block;
  text-align: center;
}
</style>
