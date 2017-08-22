/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-07-12 13:11:57
 * @version $Id$
 */

// 组件

Vue.component('my-demo',{


	template:"<p style='background:red'>测试</p>"

})

// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})	

var app12 = new Vue({


	el:'.app12',
	data:{

	}



})


var  app11=new Vue({


	el:'#app11',
	data:{

		message:"nieshming111"

	},
	components:{
		'my-demo':{	
			template:"<p style='background:blue'>"+55555+"</p>"
		}
	}


})


var  app10=new Vue({

	el:"#app10",
	data:{
		checked:false,
		checkedNames:[],
		selected: 'A',
	    options: [
	      { text: 'One', value: 'A' },
	      { text: 'Two', value: 'B' },
	      { text: 'Three', value: 'C' }
	    ],
	    picked:'',
	    toggle:'',
	    selected1:'',
	    toggled:'nieshi1',
	    a:"nieshi1",
	    b:'nieshi2'
	}


})


var  app9 = new Vue({

	el:'.app9',
	data:{
		name:"nieshiming"
	},
	methods:{

		test:function(event){

			console.log(this.name+"....");
			if(event){
				console.log(event);
			}

		},
		say:function(message){

			console.log(this.name+message);

		},
		self:function(){

			console.log(111);

		},
		esc:function(){

			console.log('esc');
		}

	}

})
// 这样写--事件并没有触发
// app9.test();


var app8 = new Vue({

 	el:'#app8',
 	data:{

 		demo:false,
 		demo1:true,
 		testdemo:{

 			nie:true,
 			shiming:false,
 			ming:true

 		},
 		style:{
 			fontsize:"14px",
 			background:"red",
 			border:"1px solid red"
 		}
 	}

 })
 var app7 = new Vue({

	  el: '#app7',
	  data: {
	    message: 'Hello',
	    firstname:'zhangsan',
	    lastname:'lisi',
	    ok:false
	  },
	  computed: {
	    // a computed getter
	    reversedMessage: function () {
	      // `this` points to the vm instance
	      return this.message.split('').reverse().join('')
	    },
	    fullname:function(){
	    	return this.firstname+this.lastname
	    }
	  }
	  // watch:{


	  // 	fullname:function(){
	  // 		console.log(this.fullname)
	  // 		this.fullname=this.firstname+this.lastname
	  // 	}


	  // }

})
var app = new Vue({

	el:'#app6',
	data:{

		demo:1,
		ok:true

	}

})

var app = new Vue({

	el:'#app',
	data:{
		message:"nieshiming",
	}
})

var app2 = new Vue({

	el:"#app2",
	data:{

		"message":"nieshiming"+new Date(),
		"show":true
	}
})

var app3 = new Vue({

	el:'#app3',
	data:{
		"demos":[
			{"name":'nieshiming'},
			{"name":'zhangsan'},
			{"name":'lisi'}
		]
	}
})

var app4 = new Vue({

	el:"#app4",
	data:{

		demo:0
	},
	methods:{
		showmessage:function(){
			this.demo++;
			console.log(this.demo)
		},

	}

})

// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
  template: '<li>这是vue的新模板</li>'
})


var app5 = new Vue({

	el:'#app5',
	data:{
		"demos":[
			{"name":'nieshiming'},
			{"name":'zhangsan'},
			{"name":'lisi'}
		],
		message:'demo',
		demohtml:"<p style='background:red'>1111111111111</p>",
		testid:'nieshiming'
	}
})

var Event = new Vue({


	el:'#eventa',
	data:{
		message:"nieshiming"
	},
	methods:{

		show:function(e){

			// e 位事件对象
			console.log(e);
			this.message = "1111";

		}
	}


})
var demodata = {'a':1,'b':2};

var  data1 = new Vue({

	el:'#data1',
	data:demodata

})
var  data2 = new Vue({

	el:'#data2',
	data:demodata

})
var app_watch = new Vue({
    el:'#app-watch',
    data:{
        firstname:'',
        lastname:'',
        fullname:''
    },
    watch:{
        firstname:function () {
            this.fullname = this.firstname + ' ' + this.lastname
        },
        lastname:function () {
            this.fullname = this.firstname + ' ' + this.lastname
        }
    }
})


