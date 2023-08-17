setInterval(function(){kebiao()},1000);//刷新
function kebiao(){
	var z = new Date();
	var xq = z.getDay();
	var ke = hke();
	function hke(){
		if (xq == 1){ke = "数学<br>" + "升旗<br>" + "语文<br>" + "化学<br>" + "化学<br><br>" + "英语<br>" + "生物<br>" + "物理<br>" + "班会<br>" + "<br>" + "#晚化学<br>"}
		else if (xq == 3){ke = "语文<br>" + "英语<br>" + "英语<br>" + "化学<br>" + "物理<br><br>" + "数学<br>" + "数学<br>" + "生物<br>" + "数学讲解<br>" + "<br>" + "#晚数学<br>"}
		else if (xq == 4){ke = "物理<br>" + "物理<br>" + "语文<br>" + "数学<br>" + "数学<br><br>" + "化学<br>" + "化学<br>" + "体育<br>" + "物理讲解<br>" + "<br>" + "#晚语文<br>"}
		else if (xq == 5){ke = "英语<br>" + "英语<br>" + "数学<br>" + "语文<br>" + "语文<br><br>" + "生物<br>" + "生物<br>" + "物理<br>" + "自习<br>" + "<br>" + "#晚物理<br>"}
		else if (xq == 2){ke = "语文<br>" + "语文<br>" + "数学<br>" + "英语<br>" + "英语<br><br>" + "化学<br>" + "物理<br>" + "生物<br>" + "物理讲解<br>" + "<br>" + "#晚生物<br>"}
        else if (xq == 6){ke = "语文<br>" + "数学<br>" + "数学<br>" + "物理<br>" + "英语<br><br>" + "化学<br>" + "生物<br>" + "<br>" + "去浪<br>" + "<br>" + "#晚考试<br>"}
		else {ke = "理综考试<br><br><br><br><br><br>晚自习<br><br>"}
		return ke;
	}
	document.getElementById("kechengbiao").innerHTML = ke
}