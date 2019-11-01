var work;
var rest;
var running;
var points_id ;
var nowtodo;
var vm = new Vue({
    el: '.container',
    data: {
      visibility: "todolist",
      condition: 'work',
      newTodo: "",//todolist input
      displayTime: '5',//'工作'一開始的顯示時間
      countDownTimer: 5,//'工作'計算的時間
      defaultCountDownTime: 5,//'工作'用於重新刷新的時間
      restTime: '3',//'休息'一開始的時間
      restCountDownTimer: 3,//'休息'計算的時間
      restDefaultCountDownTime: 3,//'休息'用於重新刷新的時間
      tomoto_total: '', //一個禮拜的番茄總數
      day1: [
        {date:''},
        {tomoto:'3'}
      ],
      day2: [
        {date:''},
        {tomoto:'24'}
      ], 
      day3: [
        {date:''},
        {tomoto:'20'}
      ],
      day4: [
        {date:''},
        {tomoto:'16'}
      ],
      day5: [
        {date:''},
        {tomoto:'12'}
      ],
      day6: [
        {date:''},
        {tomoto:'8'}
      ],
      day7: [
        {date:''},
        {tomoto: 4}
      ],
      work_rings: [
        {
          name: 'none',
          select: true
      }, {
          name: 'Default',
          select: false
      }, {
          name: 'alarm',
          select: false
      }, {
          name: 'alert',
          select: false
      }, {
          name: 'beep',
          select: false
      }, {
          name: 'bell',
          select: false
      }, {
          name: 'bird',
          select: false
      }, {
          name: 'bugle',
          select: false
      }, {
          name: 'digital',
          select: false
      }, {
          name: 'drop',
          select: false
      }, {
          name: 'horn',
          select: false
      }, {
          name: 'music',
          select: false
      }, {
          name: 'ring',
          select: false
      }, {
          name: 'warning',
          select: false
      }, {
          name: 'whistle',
          select: false
      }],
      break_rings: [
        {
          name: 'none',
          select: true
      }, {
          name: 'Default',
          select: false
      }, {
          name: 'alarm',
          select: false
      }, {
          name: 'alert',
          select: false
      }, {
          name: 'beep',
          select: false
      }, {
          name: 'bell',
          select: false
      }, {
          name: 'bird',
          select: false
      }, {
          name: 'bugle',
          select: false
      }, {
          name: 'digital',
          select: false
      }, {
          name: 'drop',
          select: false
      }, {
          name: 'horn',
          select: false
      }, {
          name: 'music',
          select: false
      }, {
          name: 'ring',
          select: false
      }, {
          name: 'warning',
          select: false
      }, {
          name: 'whistle',
          select: false
      }],
      todolists:[
        {
          id: 1,
          name: '一天的開始就是溜狗',
          check: false,
          complete: true,
          timer:['●','●'],
        },
        {
          id: 2,
          name: '吃個早餐',
          check: true,
          complete: false,
          timer:['●'],
        },
        {
          id: 3,
          name: '做一些事情',
          check: false,
          complete: false,
          timer:[],
        },
        {
          id: 4,
          name: '吃個午餐',
          check: false,
          complete: false,
          timer:[],
        },
        {
          id: 5,
          name: '睡個午覺',
          check: false,
          complete: false,
          timer:[],
        },
      ],
    },
    created: function() {
        //工作時鐘時間
        this.countDownTimer = this.defaultCountDownTime;
        var t = this.countDownTimer;
        var m = Math.floor(Math.floor(t % 3600) / 60);
        var s = t % 60;
        var c = m + ":" + s;
        this.displayTime = c;
        
        //休息時鐘時間
        this.restCountDownTimer = this.restDefaultCountDownTime;
        var rest_t = this.restCountDownTimer;
        var rest_m = Math.floor(Math.floor(rest_t % 3600) / 60);
        var rest_s = rest_t % 60;
        var rest_c = rest_m + ":" + rest_s;
        this.restTime = rest_c;
      
        //計算日期
        var dateTime=new Date();
      
        var day1Time = dateTime.setDate(dateTime.getDate());
        day1Time = new Date(day1Time);
        let day1_Month = day1Time.getMonth() + 1
        let day1_Date = day1Time.getDate()
        let day1 = day1_Month +'/'+ day1_Date
        this.day1.date = day1
      
        var day2Time = dateTime.setDate(dateTime.getDate() -1);
        day2Time = new Date(day2Time);
        let day2_Month = day2Time.getMonth() + 1
        let day2_Date = day2Time.getDate()
        let day2 = day2_Month +'/'+ day2_Date
        this.day2.date = day2
      
        var day3Time = dateTime.setDate(dateTime.getDate() -1);
        day3Time = new Date(day3Time);
        let day3_Month = day3Time.getMonth() + 1
        let day3_Date = day3Time.getDate()
        let day3 = day3_Month +'/'+ day3_Date
        this.day3.date = day3
      
        var day4Time = dateTime.setDate(dateTime.getDate() -1);
        day4Time = new Date(day4Time);
        let day4_Month = day4Time.getMonth() + 1
        let day4_Date = day4Time.getDate()
        let day4 = day4_Month +'/'+ day4_Date
        this.day4.date = day4
        
        var day5Time = dateTime.setDate(dateTime.getDate() -1);
        day5Time = new Date(day5Time);
        let day5_Month = day5Time.getMonth() + 1
        let day5_Date = day5Time.getDate()
        let day5 = day5_Month +'/'+ day5_Date
        this.day5.date = day5
      
        var day6Time = dateTime.setDate(dateTime.getDate() -1);
        day6Time = new Date(day6Time);
        let day6_Month = day6Time.getMonth() + 1
        let day6_Date = day6Time.getDate()
        let day6 = day6_Month +'/'+ day6_Date
        this.day6.date = day6
      
        var day7Time = dateTime.setDate(dateTime.getDate() -1);
        day7Time = new Date(day7Time);
        let day7_Month = day7Time.getMonth() + 1
        let day7_Date = day7Time.getDate()
        let day7 = day7_Month +'/'+ day7_Date
        this.day7.date = day7
      
      
        //計算總番茄
        let day1_tomoto = parseInt(this.day1[1].tomoto)
        let day2_tomoto = parseInt(this.day2[1].tomoto)
        let day3_tomoto = parseInt(this.day3[1].tomoto)
        let day4_tomoto = parseInt(this.day4[1].tomoto)
        let day5_tomoto = parseInt(this.day5[1].tomoto)
        let day6_tomoto = parseInt(this.day6[1].tomoto)
        let day7_tomoto = parseInt(this.day7[1].tomoto)
        let total = day1_tomoto+ day2_tomoto + day3_tomoto + day4_tomoto +day5_tomoto + day6_tomoto + day7_tomoto
        this.tomoto_total = total
    },
    methods: {
        work_ringcheck: function(id){
          this.work_rings.map((v,i)=>{
            if(i==id){
              v.select = true
            }else{
              v.select = false
            }
          })         
        },
        break_ringcheck : function(id){
          this.break_rings.map((v,i)=>{
            if(i==id){
              v.select = true
            }else{
              v.select = false
            }
          })         
        },
        // 工作時鐘設定
        setWorkClock: function(timer) {
            let Minute = Math.floor(Math.floor(timer % 3600) / 60);
            let Second = timer % 60;
            let Check = Minute + ":" + Second
            vm.displayTime = Check
        },
        // 休息時鐘設定
        setRestClock: function(timer) {
            let Minute = Math.floor(Math.floor(timer % 3600) / 60);
            let Second = timer % 60;
            let Check = Minute + ":" + Second
            vm.restTime = Check
        },
        // 工作計時中
        workClock: function(e) {
          running = true;

          this.work = setInterval(function() {
            if (vm.countDownTimer > 0 && running == true) {
              vm.countDownTimer--;
              vm.setWorkClock(vm.countDownTimer);
            } else {
              vm.workRefresh();           
            }
          }, 1000);
          $('.paly_box').css('backgroundColor','#FFF')
          $('#stopbtn').show();
          $('#playbtn').hide();
          
          $('.cricle_stop').show();
          $('.cricle_play').hide();
        },
        // 休息計時中
        restClock: function(e) {
          running = true;

          this.rest = setInterval(function() {
            if (vm.restCountDownTimer > 0 && running == true) {
              vm.restCountDownTimer--;
              vm.setRestClock(vm.restCountDownTimer);
            } else {
              vm.restRefresh();           
            }
          }, 1000);
          $('.paly_box').css('backgroundColor','#FFF')
          $('#rest_stopbtn').show();
          $('#rest_playbtn').hide();
          
          $('.rest_cricle_stop').show();
          $('.rest_cricle_play').hide();
        },
        // 工作暫停
        workStop: function() {
            $('.paly_box').css('backgroundColor','#FF4384')
            $('#playbtn').show();
            $('#stopbtn').hide();

            $('.cricle_stop').hide();
            $('.cricle_play').show();
            running = false;
            clearTimeout(this.work)
        },
        // 休息暫停
        restStop: function() {
            $('.paly_box').css('backgroundColor','#FF4384')
            $('#rest_playbtn').show();
            $('#rest_stopbtn').hide();

            $('.rest_cricle_play').show();
            $('.rest_cricle_stop').hide();
            running = false;
            clearTimeout(this.rest)
        },
        // 工作重新計時 
        workRefresh: function() {
          this.condition = 'rest'
          vm.pushtimer();
          vm.tomotototal();
          this.countDownTimer = this.defaultCountDownTime;
          this.workStop();
          this.setWorkClock(this.countDownTimer);
          vm.changeRest()
          
        },
        // 休息重新計時 
        restRefresh: function() {
          this.condition = 'work'
          this.restCountDownTimer = this.restDefaultCountDownTime;          
          this.restStop();          
          this.setRestClock(this.restCountDownTimer);
          vm.changeWork()
          
        },
        //更換成休息樣式
        changeRest: function(){
          //main那一頁
          $('.container').css('backgroundColor','#E5F3FF')
          $('#more').css('color','#00A7FF')
          $('.completebtn').css({'borderColor':'#00A7FF','color':'#00A7FF'})
          $('.paly_box').hide()
          $('.rest_box').show()
          $('.paly_container').css('borderColor','#00A7FF')
          
          //todolist_container那頁
          $('.small_cilcle').hide()
          $('.rest_small_cilcle').show()
          $('.cricle').css('backgroundColor','#E5F3FF')
        },
        //更換成工作樣式
        changeWork: function(){
          //main那一頁
          $('.container').css('backgroundColor','#FFEDF7')
          $('#more').css('color','#FF4384')
          $('.completebtn').css({'borderColor':'#FF4384','color':'#FF4384'})
          $('.rest_box').hide()
          $('.paly_box').show()
          $('.paly_container').css('borderColor','#FF4384')
          
          //todolist_container那頁
          $('.rest_small_cilcle').hide()
          $('.small_cilcle').show()
          $('.cricle').css('backgroundColor','#FFEDF7')
          
        },
        //塞資料
        pushtimer: function(){
          nowtodo.timer.push('●');
          vm.day1[1].tomoto = parseInt(vm.day1[1].tomoto) + 1
        },
        //抓取現在的TODO
        get: function(){          
          for(let i =0;i<vm.todolists.length;i++){
            if(vm.todolists[i].check == true){
              vm.workClock()              
              nowtodo = vm.todolists[i]
            }            
          }
        },
        //現在的行程完成
        complete: function(){
          for(let i =0;i<vm.todolists.length;i++){
            if(vm.todolists[i].check == true){          
              vm.todolists[i].check = false
              vm.todolists[i].complete = true
            }
          }
        },
        //換行程
        changetodo: function(id){
          this.todolists.map((v,i)=>{
            if(i==id){
              v.check = true
              this.countDownTimer = this.defaultCountDownTime;
              this.setWorkClock(this.countDownTimer);
            }else{
              v.check = false
            }
          })     
        },
        //計算總番茄
        tomotototal: function(){
          let day1_tomoto = parseInt(vm.day1[1].tomoto)
          let day2_tomoto = parseInt(vm.day2[1].tomoto)
          let day3_tomoto = parseInt(vm.day3[1].tomoto)
          let day4_tomoto = parseInt(vm.day4[1].tomoto)
          let day5_tomoto = parseInt(vm.day5[1].tomoto)
          let day6_tomoto = parseInt(vm.day6[1].tomoto)
          let day7_tomoto = parseInt(vm.day7[1].tomoto)
          let total = day1_tomoto+ day2_tomoto + day3_tomoto + day4_tomoto +day5_tomoto + day6_tomoto + day7_tomoto
          this.tomoto_total = total
          console.log(total)
        },
        //增加todo
        addTodo: function(){
          var value = this.newTodo.trim();
          // value = value.replace(/\s+/g,"");
          var timestamp = Math.floor(Date.now());
          if(!value){
            return
          };
          this.todolists.push({
            id: timestamp,
            name: value,
            check: false,
            complete: false,
            timer:[],
          })
          console.log(value,timestamp)
          this.newTodo = ""
         
        },
    }
})