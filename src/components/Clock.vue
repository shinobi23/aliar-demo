<script>
    export default {
      name: 'Clock',
      startInterval: function (n, dt, inc) {
            setInterval(() => {
              n.value += inc;
            }, dt);
      }
    }
</script>