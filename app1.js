new Vue ({
  el: '#vue-app',
  data: {
    age:25,
    x:0,
    y:0
  },
  methods: {
    add: function (inc) {
      this.age += inc;
    },
    subtract: function(dsc){
      this.age -= dsc;
    },
    updataXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    clicktest:function(){
      alert('prevent 阻塞点击事件跳转')
    }
  },
});

/*
* el:element 需要获取的元素，一定是HTML中的根容器元素
* data： 用于数据的存储
* websiteTag HTML原样标签输出
* website： 动态绑定超链接
* updataXY: 鼠标滑动实时位置
*/
