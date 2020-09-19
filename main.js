var taskArr = []
var list = document.querySelector('#lista')
var btnAdd = document.querySelector('#btn_add')
var btnReset = document.querySelector('#btn_reset')
var btnDel = document.querySelector('#btn_del')
var input = document.querySelector('#input')

const renderList = ()=> {
	list.innerHTML = ''

	taskArr.map((value, index)=>{
		list.innerHTML += `<li><input type="checkbox" class="chkbox${index}">${value}</li>`
	})
	/*
	for(task of taskArr){
		list.innerHTML += `<li><input type="checkbox" class="chkbox${task}">${task}</li>`
	}
	*/
} 

const pushEvent = ()=> {
	taskArr.push(input.value.trim())
	input.value = ''
	input.focus()
	renderList()
}

btnAdd.onclick = ()=> {
	if (input.value.trim() == '') {
		alert('Não é permitido inserção vazia!\nTente novamente!')
	} else {
		pushEvent()
	}
}

input.addEventListener('keydown',(event)=> {
	if (event.keyCode == '13' ) {
		pushEvent()
	}
})

btnReset.onclick = ()=> {
	taskArr = [] 
	renderList()
}

btnDel.onclick = ()=> {
	taskArr = taskArr.filter((value, index, arr)=> {
		if(!document.querySelector('.chkbox'+index).checked){
		  renderList()
		}
})

}


