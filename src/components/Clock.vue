<script>
    export default {
      name: 'Clock',
      startInterval: function (n, dt, inc) {
            setInterval(() => {
          if(n.min || n.min == 0) if((n.value + inc) < n.min) {n.value=n.default};
          if(n.max) if((n.value + inc) > n.max) {n.value=n.default};
              n.value += inc;
            }, dt);
      }
    }
</script>