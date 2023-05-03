const btn = document.querySelector('.j-btn-request');
	const result = document.querySelector('.j-result');

	btn.addEventListener('click', () => {
		const value_1 = document.querySelector('#input_1').value;
		const value_2 = document.querySelector('#input_2').value;
		let urlFetch = `https://picsum.photos/v2/list?page=${value_1}&limit=${value_2}`;

		if (value_1 < 1 || value_1 > 10 || typeof +value_1 !== 'number') {
			const p = document.createElement('p');
			p.innerText = 'Номер страницы вне диапазона от 1 до 10';
			p.style.color = 'red';
			result.append(p);
		} else if(value_2 < 1 || value_2 > 10 || typeof +value_2 !== 'number') {
			const p = document.createElement('p');
			p.innerText = 'Лимит вне диапазона от 1 до 10';
			p.style.color = 'red';
			result.append(p);
		}else{
			fetch(urlFetch, {mode: "no-cors"}) 
				.then((response) => {
					// console.log(response);
					let img = document.createElement('img');
					result.innerText = "";
					img.setAttribute('src', response.url);
					img.setAttribute('width', 350);
					img.setAttribute('height', 350);
					img.setAttribute('alt', 'image');
					result.appendChild(img);

				})
				.catch((event) => {
					console.log('Ошибка запроса', event);
				})

					localStorage.setItem('img', urlFetch);
					let oldData = localStorage.getItem('img');
					let p = document.createElement('p');
					p.append(oldData);
		}
		
	})