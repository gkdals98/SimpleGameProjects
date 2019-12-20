<template>
  <div class="status_canvas_wrapper">
    <canvas ref="status_canvas"></canvas>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      provider: {
        context: null
      }
    }
  },
  provide () {
    return {
      provider: this.provider
    }
  },

  mounted () {
    this.provider.context = this.$refs['status_canvas'].getContext('2d')
    this.$refs['status_canvas'].width = this.$refs['status_canvas'].parentElement.clientWidth
    this.$refs['status_canvas'].height = this.$refs['status_canvas'].parentElement.clientHeight
  }
}
</script>
