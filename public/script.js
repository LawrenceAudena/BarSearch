
var input_search = document.querySelector('#search').value;
var btn = document.querySelector('button');
var loading = document.querySelector('#loading');
btn.addEventListener('click', function(event){
	loading.textContent = 'loading...';
	//alert('testing');
});

