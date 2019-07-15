new Vue ({
  el: '#vue-app',
  data: {
    characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
    ninjas: [
      {name: 'Ryu', age: 25},
      {name: 'Yoshi', age: 35},
      {name: 'Ken', age: 55},
    ],
  },
  // methods 中的方法每次渲染都是会全部执行一遍 ,如果A执行过后，B方法也一定会执行
  methods: {},
  // computed;只有首次渲染会全部执行所有方法，渲染过后单个调用方法的时候就不再互相影响，只会执行调用的指定方法
  computed: {},
});
