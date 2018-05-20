//javascript thuần
//showContent

function showContent(obj){
	if(obj.value == 'Ẩn'){
	obj.parentElement.children[0].style.display = 'none';
	obj.value = 'Hiện'; 
	} else {
		obj.parentElement.children[0].style.display = 'block';
		obj.value = 'Ẩn';
	}
};

//jquery
$(document).ready(function(){
	//showContent
	//$('input[type=button]').on('click',function(){
	//	if($(this).text() == 'Ẩn'){
	//		$(this).parent().find('div.content').hide();
	//		$(this).text('Hiện');
	//	} else {
	//		$(this).parent().find('div.content').show();
	//		$(this).text('Ẩn');
	//	}
	//});
	//table
	$('.ds table tbody tr input').on('click',function(){
		var record = $(this).closest('tr'); //closest('selector') hoặc parents('selector');
		record.hide();
		$('.kq table tbody').append('<tr>'+ record.html() +'</tr>');
	});	
	
	$(document).on('click','.kq table tbody tr input',function(){
		var record = $(this).closest('tr');
		var id = record.find('.maHD').text();
		record.remove();
		$('.ds .maHD').each(function(){
			if($(this).text()== id){
				var x = $(this).parent();
				x.show();
				x.find('td input[type=checkbox]').prop('checked',false);
			}
		});
	});

	$('#dk-btn').on('click',function(){
		var ngay = [];
		$('.kq table tbody tr').each(function() {
        ngay.push($(this).find('td:eq(2)').text());
    });
		var x = ngay.length;
		if(x<3){
			alert('Đăng ký ít nhất 3 hoạt động');
		} else {
			var uni = $.unique(ngay);
			if(x != uni.length){
				alert('Đăng ký hoạt động bị trùng ngày');
			} else {
				alert('Đăng ký thành công');
			}
		}
	});
});





