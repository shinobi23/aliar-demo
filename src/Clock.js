export default class Clock {
    methods: {
          startInterval: function (n, dt, inc) {
            setInterval(() => {
              n.value += inc;
            }, dt);
          }
      }
  }
