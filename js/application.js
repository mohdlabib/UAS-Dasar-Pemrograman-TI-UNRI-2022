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
		no: '',
		dev: '',
		tile: '',
	},
	methods: {
		modal: function () {
			this.no = '';
			this.dev = '';
			this.tile = '';

			let edit = document.querySelector('#edit')
			edit.classList.add('d-none')

			$('#myModal').modal('show');
		},
		updateModal: function (id) {
			let modal = document.querySelector('#myModal')
			let add = document.querySelector('#add')
			let edit = document.querySelector('#edit')

			edit.classList.remove('d-none')
			add.classList.add('d-none')

			modal.getElementsByTagName("input")[0].value = id + 1

			this.no = this.datas[id].no;
			this.dev = this.datas[id].dev;
			this.tile = this.datas[id].tile;

			$('#myModal').modal('show');

		},
		addDass: function () {
			this.datas.push({
				id: this.id++,
				dev: this.dev,
				no: this.no,
				tile: this.tile
			});

			$('#myModal').modal('hide')

			Toast.fire({
				icon: 'success',
				tile: 'Successfully Add Data'
			})
		},
		updateData: function () {
			let modal = document.querySelector('#myModal')
			let id = modal.getElementsByTagName("input")[0].value

			for (let i = 0; i < this.datas.length; i++) {
				if (this.datas[i].id == id) {
					this.datas.splice(i, 1, {
						tile: this.tile,
						dev: this.dev,
						no: this.no,
						id: id
					});
				}
			}

			$('#myModal').modal('hide')

			Toast.fire({
				icon: 'success',
				tile: 'Successfully Update Data'
			})
		},
	}
})