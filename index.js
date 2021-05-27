const $ = document.querySelector.bind(document)
var btnCat = $('.form .cat')
var btnDog = $('.form .dog')
var bxImg = $('img')
btnCat.addEventListener('click', ()=>{
	var link ="https://aws.random.cat/meow"
	bxImg.src = "https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"
	fetch(link)
	.then(response=>response.json())
	.then(data=>{
		var linkImg = data.file
		bxImg.src = linkImg;

	})
	.catch(err=>console.log('link loi '+ err))
	.pending(()=>console.log('chờ tí'))
})
btnDog.addEventListener('click', ()=>{
	var link ="https://random.dog/woof.json"
	bxImg.src = "https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"
	fetch(link)
	.then(response=>response.json())
	.then(data=>{
		var linkImg = data.url
		bxImg.src = linkImg;

	})
	.catch(err=>console.log('link loi '+ err))
})