 //控制层 
app.controller('userController' ,function($scope,$controller   ,userService){	
	
	//注册用户
	$scope.entity = {};
	$scope.reg=function(){
		if($scope.entity.username==null || $scope.entity.username==""){
			alert("请填写用户名");
			return ;
		}
		if($scope.entity.password==null || $scope.entity.password==""){
			alert("请填写密码");
			return ;
		}
		if($scope.password==null || $scope.password==""){
			alert("请确认密码");
			return ;
		}
		//比较两次输入的密码是否一致
		if($scope.password!=$scope.entity.password){
			alert("两次输入密码不一致，请重新输入");
			$scope.entity.password="";
			$scope.password="";
			return ;			
		}
		if($scope.entity.phone==null || $scope.entity.phone==""){
			alert("请填写手机号码");
			return ;
		}
		if($scope.smscode==null || $scope.smscode==""){
			alert("请填写手机验证码");
			return ;
		}
		//新增
		userService.add($scope.entity,$scope.smscode).success(
			function(response){
				alert(response.message);
				if(response.message=="增加成功"){
					location.href="http://localhost:9106/login.html";
				}
				
			}		
		);
	}
    
	//发送验证码
	$scope.sendCode=function(){
		if($scope.entity.phone==null || $scope.entity.phone==""){
			alert("请填写手机号码");
			return ;
		}
		
		userService.sendCode($scope.entity.phone  ).success(
			function(response){
				alert(response.message);
			}
		);		
	}
	
});	
