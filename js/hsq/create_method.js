function getProvince(){
	alert("aljalgjljajglka");
	var url = 'http://182.92.169.209/api/v1/location/province.do';
	var html = $("#province_select").html();

	for (var i = 1; i < 10; i++) {
		html += '<option value="'+i+ '">'+'省'+i+'</option>';
	};
	$("#province_select").html(html);
/*
	$.ajax({
	        type: "GET",
	        url: url,
	        dataType:"json",
	        success: function(msg) { 
	        	alert(msg.code);
	        	if (msg.code == "20000") {
	        		var provincelist = msg.data;
	        		var len = provincelist.length;
			      	for(var i = 0; i < len; i++){
			      		var item = provincelist[i];
			      		var name = item.province_name;
			      		var code = category.province_code;
			      		html += '<li value="'+code+'">'+name+'</li>';
			      	}
	            }else{
	            	alert("error");
	            }
	         }
	});
*/
}

/*没有特殊字符*/
function isNoSpecialChar(str){
    str = $.trim(str);
    if(str.indexOf("\"") == -1 && str.indexOf("'") == -1 && str.indexOf("<") == -1 && str.indexOf(">") == -1  && str.indexOf("*") == -1  && str.indexOf("%") == -1 && str.indexOf("&") == -1 && str.indexOf("$") == -1    && str.indexOf("!") == -1){
      return true;
    }    
    return false;
}


function formValidate(){
  
  jQuery.validator.addMethod('check_time',
	function(){
		var start_time = $("#start_time").val();
		start_time = start_time.replace(/-/g,'/');
		start_time = new Date(start_time).getTime();

		var end_time = $("#end_time").val();
		end_time = end_time.replace(/-/g,'/');
		end_time = new Date(end_time).getTime();
		if(end_time <  start_time){
			return false;
		}else{
			return true;
		}
	},
	'<span class="icon"></span><font color=\'red\'>结束时间不能小于开始时间</font>'
	);

    jQuery.validator.addMethod('check_end_time',
	function(){
		var end_time = $("#end_time").val();
		end_time = end_time.replace(/-/g,'/');
		end_time = new Date(end_time).getTime();
		var nowtime =  new Date().getTime();
		if(end_time <  nowtime){
			return false;
		}else{
			return true;
		}
	},
	'<span class="icon"></span><font color=\'red\'>结束时间不能小于当前时间</font>'
	);

	jQuery.validator.addMethod('CheckSpecialChar',
	function(value,element){
		var str = element.val().trim();
		return isNoSpecialChar(str); 
	},
	'<span class="icon"></span><font color=\'red\'>不能含特殊字符！</font>'
	);


     
    jQuery.validator.addMethod("byteRangeLength", 
     	function(value, element, param) {
     	var length = value.length;
     	for(var i = 0; i < value.length; i++){
        	if(value.charCodeAt(i) > 127){
            	length++;
        	}
      	}
      	return this.optional(element) || ( length >= param[0] && length <= param[1] );   
     	}, 
     	$.validator.format("请确保输入的值在{0}-{1}个字节之间(一个中文字算2个字节)")
    );

}; 