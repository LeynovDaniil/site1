var check_1, check_2, check_3, check_4, check_5, check_6, bt;

bt = document.getElementById("bt").onclick = radioBt;



var m_1 = document.getElementById("check_1")
var m_2 = document.getElementById("check_2")
var m_3 = document.getElementById("check_3")
var m_4 = document.getElementById("check_4")
var m_5 = document.getElementById("check_5")
var m_6 = document.getElementById("check_6")
var res_div = document.getElementById("block_res")
var title_res = document.getElementById("title_res")
var block_content = document.getElementById("block_content")
function radioBt () {
	var j = 0
	
	if(m_1.checked){
		j++
			
	}
	
	
	
	if(m_3.checked){
		j++
		// console.log(j)
	}

	
	
	if(m_5.checked){
		j++
		// console.log(j)
	}

	

	if (j<3){
		title_res.textContent = "Результат"
		title_res.style.fontWeight = '700'
		block_content.style.background = '#e5e5e5'
		block_content.style.boxShadow = '0 0 9px rgba(0, 0, 0, 0.35)'
		block_content.style.font = '25px'
		res_div.textContent = 'До профи тебе далеко, но стоит работать над собой!'
	}else{
		res_div.textContent = 'Ты, я погляжу, знаток! Мое почтение!'
		title_res.textContent = "Результат"
		title_res.style.fontWeight = '700'
		block_content.style.background = '#e5e5e5'
		block_content.style.boxShadow = '0 0 9px rgba(0, 0, 0, 0.35)'
		block_content.style.font = '25px'
		
		
	}
// 	console.log(j)
// 	// window.location.href = '../from.html'
// 	// window.location.href = '../site_my_test/from.html'
	

// 	if(j<3){
// 		// let div_block = document.createElement('div')
// 		// div_block.className = "block"
// 		// div_block. innerHTML = '<div class="res" id="res"></div>'
		
// 	}else{
		
// 	}
 }



// let div = document.createElement('div');
// div.className = "alert";
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";