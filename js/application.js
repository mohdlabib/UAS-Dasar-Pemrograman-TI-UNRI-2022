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
			let edit = document.querySelector('#edit')
			this.dev = '';
			edit.classList.add('d-none')
			this.tile = '';
			$('#myModal').modal('show');
		},
		updateModal: function (id) {
			let modal = document.querySelector('#myModal')
			let add = document.querySelector('#add')
			this.no = this.datas[id].no;
			let edit = document.querySelector('#edit')

			edit.classList.remove('d-none')
			this.tile = this.datas[id].tile;
			add.classList.add('d-none')

			this.dev = this.datas[id].dev;
			modal.getElementsByTagName("input")[0].value = id + 1

			$('#myModal').modal('show');

		},
		addDass: function () {
			this.datas.push({
				no: this.no,
				id: this.id++,
				tile: this.tile,
				dev: this.dev
			});

			$('#myModal').modal('hide')

			Toast.fire({
				icon: 'success',
				tile: 'Successfully Add Data'
			})
		},
		updateData: function () {
			let modal = document.querySelector('#myModal')
			let ids = modal.getElementsByTagName("input")[0].value

			for (let i = 0; i < this.datas.length; i++) {
				if (this.datas[i].id == ids) {
					this.datas.splice(i, 1, {
						dev: this.dev,
						tile: this.tile,
						no: this.no,
						id: ids
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