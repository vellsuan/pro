function doUpload() {
	var formData = new FormData($('#uploadForm')[0]);
	formData.append('num', '1');//可以在已有表单数据的基础上，继续添加新的键值对
	$.ajax({
		url: 'http://localhost:3000/upload',
		type: 'POST',
		cache: false,
		data: new FormData($('#uploadForm')[0]),
		processData: false,
		contentType: false,
		success: function (data, textStatus, jqXHR) {
		
		
		},
	})
}
