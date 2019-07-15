new Vue ({
  el: '#vue-app',
  data: {
    name: '画江湖',
    job: 'web开发',
    website: 'http://www.thenetninja.co.uk',
    websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>',
  },
  methods: {
    greet: function (time) {
      return 'Hello Vue ' + time + '!' + this.name;
    },
  },
});

/*
* el:element 需要获取的元素，一定是HTML中的根容器元素
* data： 用于数据的存储
* websiteTag HTML原样标签输出
* website： 动态绑定超链接
*/
