const Toast = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 2500,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer)
		toast.addEventListener('mouseleave', Swal.resumeTimer)
	}
})

const app = new Vue({
	el: '#App',
	data: {
		datas: datas,
		id: 6,
		isbn: '',
		author: '',
		title: '',
	},
	methods: {
		modal: function () {
			this.isbn = '';
			this.author = '';
			this.title = '';

			let edit = document.querySelector('#edit')
			edit.classList.add('d-none')

			$('#myModal').modal('show');
		},
		add: function () {
			this.datas.push({
				id: this.id++,
				author: this.author,
				isbn: this.isbn,
				title: this.title
			});

			$('#myModal').modal('hide')

			Toast.fire({
				icon: 'success',
				title: 'Successfully Add Data'
			})
		},
		update: function (id) {
			let modal = document.querySelector('#myModal')
			let add = document.querySelector('#add')
			let edit = document.querySelector('#edit')

			edit.classList.remove('d-none')
			add.classList.add('d-none')

			modal.getElementsByTagName("input")[0].value = id + 1

			this.isbn = this.datas[id].isbn;
			this.author = this.datas[id].author;
			this.title = this.datas[id].title;

			$('#myModal').modal('show');

		},
		updateData: function () {
			let modal = document.querySelector('#myModal')
			let id = modal.getElementsByTagName("input")[0].value

			for (let i = 0; i < this.datas.length; i++) {
				if (this.datas[i].id == id) {
					this.datas.splice(i, 1, {
						title: this.title,
						author: this.author,
						isbn: this.isbn,
						id: id
					});
				}
			}

			$('#myModal').modal('hide')

			Toast.fire({
				icon: 'success',
				title: 'Successfully Update Data'
			})
		},
	}
})