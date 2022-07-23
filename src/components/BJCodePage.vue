<template>
  <div class="bjcode-page">
    <div class="box">
      <div v-for="(v, i) in new Array(11).fill(0)" v-bind:key="i" class="dot top" :class="`top-${i}`"
        :style="`left: ${i * 8.8}%; top: 0;`">
      </div>
      <div v-for="(v, i) in new Array(11).fill(0)" v-bind:key="i" class="dot right"
        :style="`top: ${i * 8.8}%; right: 0;`">
      </div>
      <div v-for="(v, i) in new Array(11).fill(0)" v-bind:key="i" class="dot bottom"
        :style="`right: ${i * 8.8}%; bottom: 0;`">
      </div>
      <div v-for="(v, i) in new Array(11).fill(0)" v-bind:key="i" class="dot left"
        :style="`bottom: ${i * 8.8}%; left: 0;`" :class="`left-${i}`">
      </div>
      <img src="../assets/avatar.png" class="avatar" @click="fullscreen" />
    </div>
    <div class="text">扫码未见异常</div>
    <div class="date">{{ date }}</div>
    <img src="../assets/bj.jpg" />
  </div>
</template>

<script>
function getDate() {
  const date = new Date()
  const y = date.getFullYear()
  const m = (date.getMonth() + 1).toString().padStart(2, '0')
  const d = date.getDate().toString().padStart(2, '0')
  const h = date.getHours().toString().padStart(2, '0')
  const min = date.getMinutes().toString().padStart(2, '0')
  const s = date.getSeconds().toString().padStart(2, '0')
  return `${y}-${m}-${d} ${h}:${min}:${s}`
}

export default {
  data() {
    return {
      date: getDate()
    }
  },

  mounted() {
    console.log(this)
    setInterval(() => {
      this.date = getDate()
    }, 500)
  },

  methods: {
    fullscreen() {
      document.documentElement.requestFullscreen()
    }
  }
}
</script>

<style lang="less" scoped>
.bjcode-page {
  width: 100vw;
  overflow-x: hidden;
  @size: 44vw;

  .box {
    @psize: 5vw;
    @bsize: calc(@psize * 2 + @size);
    position: absolute;
    top: 52vw - @psize;
    left: calc(50vw - @bsize / 2);
    padding: @psize;

    @green: rgba(0, 152, 121, 1.0);
    @lightgreen: rgba(60, 222, 147, 1.0);

    .dot {
      @dsize: 2.1vw;
      width: @dsize;
      height: @dsize;
      border-radius: 100%;
      position: absolute;
      background-color: @lightgreen;
    }

    @time: .6s;
    @func: steps(6);

    .top {
      animation: shift-right @time @func infinite;
    }

    .bottom {
      animation: shift-left @time @func infinite;
    }

    .right {
      animation: shift-down @time @func infinite;
    }

    .left {
      animation: shift-up @time @func infinite;
    }

    each(range(0, 1, 0.1), {
      @i: @index - 1;

      .top-@{i} {
        background-color: (1 - @value) * green + (@value) * @lightgreen;
      }

      .left-@{i} {
        background-color: (@value) * green + (1 - @value) * @lightgreen;
      }
    })
}

@d: 210%;

@keyframes shift-right {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(@d);
  }
}

@keyframes shift-left {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-@d);
  }
}

@keyframes shift-down {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(@d);
  }
}

@keyframes shift-up {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-@d);
  }
}

.avatar {
  width: @size;
  height: @size;
  border-radius: 4px;
}

.date {
  font-size: 17px;
  position: absolute;
  font-weight: bold;
  letter-spacing: -1px;
  top: 118vw;
  width: 100vw;
  text-align: center;
  color: #333333;
  transform: scaleX(0.87) scaleY(1.2);
  background-color: white;
  padding: 1vw;
  box-sizing: border-box;
}

.text {
  font-size: 5vw;
  position: absolute;
  letter-spacing: 2px;
  top: 108vw;
  width: 100vw;
  text-align: center;
  color: white;
  padding-left: 3vw;
  animation: 0.6s cubic-bezier(1, -1, 0, 2) fade alternate-reverse infinite;
}
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>