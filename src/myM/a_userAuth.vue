<template>
  <div class="btns">
    <div class="grp">
      <q-btn color="primary" @click="login">login</q-btn>
      <q-btn color="primary" @click="logout">logout</q-btn>
      <q-btn color="primary" @click="deleteUser">delete</q-btn>
      <q-btn color="primary" @click="checklog">checklog</q-btn>
      <q-btn color="primary" @click="whoami">whoami</q-btn>
    </div>
    <div class="grp">
      <q-btn color="primary" @click="register">register</q-btn>
      <q-btn color="primary" @click="activate">activate</q-btn>
      <q-btn color="primary" @click="resetpw">reset PW</q-btn>
      <q-btn color="primary" @click="resetConfirm">reset confirm</q-btn>
      <q-btn color="primary" @click="changepw">change pw</q-btn>
    </div>
    <div class="grp">
      <label for="name">Name: </label>
      <input type="text" name="name" v-model="imput.name">
      <label for="email">Email: </label>
      <input type="email" name="email" v-model="imput.email">
    </div>
    <div class="grp">
      <label for="email">Password: </label>
      <input type="password" name="email" v-model="imput.password">
      <label for="password_new">Password_new: </label>
      <input type="password" name="password_new" v-model="imput.password_new">
    </div>
    <div class="grp">
      <label for="status">Status: </label>
      <input type="text" v-model="status">
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			imput: {
				name: "",
				email: "",
				password: "",
        password_new: "",
			},
			status: "unknown",
			myApi: 'http://127.0.0.1:8000/api/'
		}
	},
	methods: {
		// login has advanced error log etc. backend = Djoser
		login() {
			console.log('login')
			console.log(this.authToken)
			let theAdress = this.myApi + 'token/create/'
			let theDataToSend = {
				username: this.imput.name,
				password: this.imput.password
			}
			this.$axios.post(theAdress, theDataToSend)
				.then((res) => {
					console.log(res.data)
					this.$store.state.daToken = res.data['auth_token']
          //if (rememberMe) {TODO}
          this.$q.localStorage.set('storageKey', this.authToken)
          this.status = 'logged in :-)'
					console.log(this.authToken)
					// console.log(res.data)
					// console.log(res.status)
					// console.log(res.statusText)
					// console.log(res.headers)
					// console.log(res.config)
				})
				.catch((error) => {
					if (error.response) {
						// The request was made and the server responded with a status code
						// that falls out of the range of 2xx
						console.log(error.response.data)
						console.log(error.response.status)
						console.log(error.response.headers)
					} else if (error.request) {
						// The request was made but no response was received
						// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
						// http.ClientRequest in node.js
						console.log(error.request)
					} else {
						// Something happened in setting up the request that triggered an Error
						console.log('Error', error.message)
					}
					console.log(error.config)
					this.$q.notify({
						color: 'negative',
						position: 'top',
						message: 'Loading failed',
						icon: 'report_problem'
					})
				})
		},
		logout() {
			console.log('logout')
			let theAdress = this.myApi + 'token/destroy/'
			let theConfigToUse = {
				headers: {
					'Authorization': 'Token ' + this.authToken
				}
			}
      let theDataToSend = {
				username: this.imput.name,
			}
      this.$q.localStorage.clear();
      this.status = 'logged out :-(';
      this.$axios.post(theAdress, theDataToSend, theConfigToUse)
				.then((res) => {
					console.log(res.data)
					this.$store.state.daToken = ''
				})
        .catch((error) => {
					if (error.response) {
						console.log(error.response.data)
					}
				})
		},
		deleteUser() {
			console.log('deleting')
			let theAdress = this.myApi + 'users/delete/'
			let theDataToSend = {
				current_password: this.imput.password
			}
      let theConfigToUse = {
        headers: {
          'Authorization': 'Token ' + this.authToken
        }
      }
			this.$axios.post(theAdress, theDataToSend, theConfigToUse)
				.then((res) => {
					console.log(res.data)
					console.log(res.status)
				})
				.catch((error) => {
					if (error.response) {
						console.log(error.response.data)
					}
				})
		},
		checklog() {
			console.log('check log status')
			let theAdress = this.myApi + 'checkauth/'
			let theConfigToUse = {
				headers: {
					'Authorization': 'Token ' + this.authToken
				}
			}
			console.log(this.authToken)
			this.$axios.get(theAdress, theConfigToUse)
				.then((res) => {
					console.log(res.data)
				})
        .catch((error) => {
					if (error.response) {
						console.log(error.response.data)
					}
				})
		},
		whoami() {
			console.log('checking who am i')
			let theAdress = this.myApi + 'me/'
			let theDataToSend = {
				// email: 'test@hallo.de'
			}
			let theConfigToUse = {
				headers: {
					'Authorization': 'Token ' + this.authToken
				}
			}
			this.$axios.patch(theAdress, theDataToSend, theConfigToUse)
				.then((res) => {
					console.log(res.data)
				})
        .catch((error) => {
					if (error.response) {
						console.log(error.response.data)
					}
				})
		},

		register() {
			console.log('registering')
			let theAdress = this.myApi + 'users/create/'
			let theDataToSend = {
				username: this.imput.name,
				email: this.imput.email,
				password: this.imput.password
			}
			this.$axios.post(theAdress, theDataToSend)
				.then((res) => {
					console.log(res.data)
					console.log(res.status)
				})
				.catch((error) => {
					if (error.response) {
						console.log(error.response.data)
					}
				})
		},
		activate() {
			console.log('activationg')
			let theAdress = this.myApi + 'users/activate/'
			let theDataToSend = {
				uid: 'NA',
				token: '4xg-cde725cbf9ef9fc52611'
			}
			this.$axios.post(theAdress, theDataToSend)
				.then((res) => {
					console.log(res.data)
					console.log(res.status)
				})
				.catch((error) => {
					if (error.response) {
						console.log(error.response.data)
					}
				})
		},
    resetpw() {
			console.log('reset pw')
			let theAdress = this.myApi + 'password/reset/'
			let theDataToSend = {
				email: this.imput.email
			}
			this.$axios.post(theAdress, theDataToSend)
				.then((res) => {
					console.log(res.data)
					console.log(res.status)
				})
        .catch((error) => {
					if (error.response) {
						console.log(error.response.data)
					}
				})
		},
		resetConfirm() {
      // takes params from url
			console.log('changing pw')
      let theAdress = this.myApi + 'password/reset/confirm/'
			let theDataToSend = {
				uid: this.$route.query.uid,
        token: this.$route.query.token,
				new_password: this.imput.password_new,
			}
			this.$axios.post(theAdress, theDataToSend)
				.then((res) => {
					console.log(res.data)
				})
        .catch((error) => {
					if (error.response) {
						console.log(error.response.data)
					}
				})
		},
    changepw() {
			console.log('changing pw')
			let theAdress = this.myApi + 'password/'
			let theDataToSend = {
        new_password: this.imput.password_new,
				current_password: this.imput.password
			}
      let theConfigToUse = {
        headers: {
          'Authorization': 'Token ' + this.authToken
        }
      }
			this.$axios.post(theAdress, theDataToSend, theConfigToUse)
				.then((res) => {
					console.log(res.data)
					console.log(res.status)
				})
        .catch((error) => {
					if (error.response) {
						console.log(error.response.data)
					}
				})
		},
    changename() {
			console.log('TODO')
		},

    getAll() {
			console.log('getting all')
			let theDataToSend = {
				url: this.url,
				name: 'der Peder',
				alter: 21
			}
			// this.$axios.get('http://127.0.0.1:8000/cmsCheckerApi/getAllWebsites', theDataToSend)
			this.$axios.get('http://127.0.0.1:8000/api/all/', theDataToSend)
				.then((res) => {
					console.log(res.data)
				})
        .catch((error) => {
					if (error.response) {
						console.log(error.response.data)
					}
				})
		},
		getOne() {
			console.log('getting all')
			let theDataToSend = {
				url: this.url,
				name: 'der Peder',
				alter: 21
			}
			// this.$axios.get('http://127.0.0.1:8000/cmsCheckerApi/getAllWebsites', theDataToSend)
			this.$axios.get('http://127.0.0.1:8000/api/all/', theDataToSend)
				.then((res) => {
					console.log(res.data)
				})
        .catch((error) => {
					if (error.response) {
						console.log(error.response.data)
					}
				})
		},
		addOne() {
			console.log('getting all')
			let theDataToSend = {
				url: this.url,
				name: 'der Peder',
				alter: 21
			}
			// this.$axios.get('http://127.0.0.1:8000/cmsCheckerApi/getAllWebsites', theDataToSend)
			this.$axios.get('http://127.0.0.1:8000/api/all/', theDataToSend)
				.then((res) => {
					console.log(res.data)
				})
        .catch((error) => {
					if (error.response) {
						console.log(error.response.data)
					}
				})
		}
	},
  created: function() {
    if (this.$q.localStorage.has('storageKey')) {
      this.$store.state.daToken = this.$q.localStorage.get.item('storageKey');
      this.status = "logged in :-)";
      this.whoami()
    } else {
      this.status = "logged out :-("
    }
  },
  computed: {     // basic states
    authToken() {
      return this.$store.state.daToken
    },
  },
}
</script>

<style>
  .btns {
    margin: 50px auto;
  }

  .grp {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
  }

  .btns .q-btn {
    margin: 0px 10px;
  }
</style>
