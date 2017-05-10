 //地区
     new PCAS('location_p', 'location_c', 'location_a', '北京市', '', '');　

//产品外边框
　　　$('.wpcolor').click(function(){
    　　　$(this).toggleClass('wpcolor-a');
　　　})

   //命名    
          var username_1 = $('input[name="username"]'),
              number_1 = $('input[name="number"]'),
              canpin_1 = $('input[name="product"]'),
              address_1 = $('input[name="address"]');
  //用户名           
           $(username_1).focus(function(){
          $(this).next().removeClass('colour-input1').addClass('colour-input2'); 
           }).blur(function(){
            if ($(this).val().length >= 2 && $(this).val().length <=10 && $(this).val() !='') {
              $(this).next().text('输入成功').removeClass('colour-input1').addClass('colour-input4'); 
              Name = true;
            }else{
                $(this).next().text('请输入正确的姓名').removeClass('colour-input1').removeClass('colour-input4').addClass('colour-input3'); 
            }
           })
  //手机号
           $(number_1).focus(function(){
              $(this).next().removeClass('colour-input1').addClass('colour-input2');

            }).blur(function(){
              if($(this).val().match(/^[1][3][0-9]{9}$/) && $(this).val()!=''){
                $(this).next().text('输入成功').removeClass('colour-input1').addClass('colour-input4');
                Number1 = true; 
              }else{
              $(this).next().text('请输入正确的手机格式号码').removeClass('colour-input1').removeClass
              ('colour-input4').addClass('colour-input3');  
              }
            })
      
  //详细地址
              $(address_1).focus(function(){
            $(this).next().removeClass('colour-input1').addClass('colour-input2'); 

           }).blur(function(){
            if ($(this).val().length >= 2 && $(this).val().length <=300  && $(this).val() !='') {
              $(this).next().text('输入成功').removeClass('colour-input1').addClass('colour-input4'); 
              address1 = true;
            }else{
                $(this).next().text('请填写收货地址').removeClass('colour-input1').removeClass('colour-input4').addClass('colour-input3'); 
            }
           })
      
 
   //按钮验证
             $('.money-btn').click(function(){
               if ($(username_1).val().length ==0 && $(number_1).val().length==0 && $(address_1).val().length==0) {
                   alert('请输入正确信息')
               }else{
                   alert('提交成功')
               }
            })
