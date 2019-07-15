new Vue ({
  el: '#vue-app',
  data: {
    a: 0,
    b: 0,
    age: 20,
  },
  methods: {
    // methods 中的方法每次渲染都是会全部执行一遍 ,如果A执行过后，B方法也一定会执行
    /*
    addToA: function () {
      console.log('addToA')
      return this.a + this.age;
    },
    addToB: function () {
      console.log ('addToB');
      return this.b + this.age;
    },
    */
  },
  // computed;只有首次渲染会全部执行所有方法，渲染过后单个调用方法的时候就不再互相影响，只会执行调用的指定方法
  computed:{
    addToA: function () {
      console.log('addToA')
      return this.a + this.age;
    },
    addToB: function () {
      console.log ('addToB');
      return this.b + this.age;
    },
  }
});
