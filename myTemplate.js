function myTemplate(id,data){
	// 获取到模板的ID，并且获取到模板的内容，返回到字符串str中
	var str = document.querrySelect('#'+id).innerHTML;
	// 创建正则表达式对象，以这种表达式来创建，可以代表{{}}格式中的文字内容
	var reg = /{{(\w+)}}/;
	// 让正则表达式对象直接检索str中与reg表达式联系的文字，返回到result中
	var result = reg.exec(str);
	// 如果对象中有多个属性，那么就进行循环计算，直到对象中没有值（为null）为止
	while(result){
	// 用result里搜索到的数据替换掉模板中data对象中的数据
		str = str.replace(result[0],data[result[1]]);
		// 最后进行一次检索，这样会改变result的值，这种exec方法是检索一个就把检索的排除掉，检索下一个
		result = reg.exec(str);
	}
	// 返回str，方便在其它地方调用最终要使用到的str的信息
	return str;
}