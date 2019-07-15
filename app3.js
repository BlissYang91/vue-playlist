new Vue ({
  el: '#vue-app',
  data: {
   name:'',
   age:'',
   nameRef:'',
   ageRef:''
  },
  methods: {
   logName:function(){
     console.log('you entered your name')
   },
   logAge:function(){
     console.log ('you entered your age');
   },
    logNameref:function(){
      this.nameRef = this.$refs.nameRef.value;
     console.log('you entered your name')
   },
   logAgeref:function(){
     this.ageRef = this.$refs.ageRef.value;
     console.log ('you entered your age');
   }
  },
});

