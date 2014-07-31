var boxes = [
  {name:'vim', desc:'编辑器之神'},
  {name:'git', desc:'小巧玲珑, 聪明好用'},
  {name:'python', desc:'简约不简单'},
  {name:'bash', desc:'飞一般的感觉'},
  {name:'firefox', desc:'可爱的小狐狸'},
  {name:'tmux', desc:'命令行神器'},
  {name:'redis', desc:'黑客的数据库'},
  {name:'phantomjs', desc:'无头浏览器'},
  {name:'emacs', desc:'神的编辑器'},
  {name:'more', desc:'coming soon!'},
]

var app = angular.module('datageek', []);

app.directive('boxes', function(){
  return {
    restrict: 'E',
    templateUrl: 'tpl/boxes.html',
    controller: function(){
      this.boxes = boxes;
    },
    controllerAs: 'ctrl'
  };
});

