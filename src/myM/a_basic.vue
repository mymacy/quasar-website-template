<template>
  <div class="btns">
    <div class="grp">
      <q-btn color="primary" @click="getAll">getAll</q-btn>
      <q-btn color="primary" @click="getOne">getOne</q-btn>
      <q-btn color="primary" @click="addOne">addOne</q-btn>
    </div>
  </div>
</template>


<script>
export default {
	data() {
		return {
			items: [
				"item1",
        "item2",
        "item3",
			],
      // myApi: 'http://127.0.0.1:8000/api/',         // dev
      myApi: window.location.origin+"/api/",    // production
		}
	},
	methods: {
		getAll() {
			console.log('getting all items')
			let theAdress = this.myApi + 'rezept/all/'
      let theConfigToUse = {
        headers: {
          'Authorization': 'Token ' + this.authToken
        }
      }
      this.$axios.get(theAdress, theConfigToUse)
				.then((res) => {
					console.log(res.data)
					// console.log(res.data)
					// console.log(res.status)
					// console.log(res.statusText)
					// console.log(res.headers)
					// console.log(res.config)
				})
        .catch((error) => {
					if (error.response) {
						console.log(error.response.data)
					}
				})
		},
    getOne() {
      console.log('getting one item')
      let theAdress = this.myApi + 'rezept/rud/2'
      let theConfigToUse = {
        headers: {
          'Authorization': 'Token ' + this.authToken
        }
      }
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
    addOne() {
      console.log('creating new item')
      let theAdress = this.myApi + 'rezept/create/'
      let theDataToSend = {
        titel: "arswchfwicken350",
        langerText: "dies islang"
      }
      let theConfigToUse = {
        headers: {
          'Authorization': 'Token ' + this.authToken
        }
      }
      this.$axios.post(theAdress, theDataToSend, theConfigToUse)
        .then((res) => {
          console.log(res.data)
        })
        .catch((error) => {
					if (error.response) {
						console.log(error.response.data)
					}
				})
    },
	},
  computed: {     // basic states
    authToken() {
      return this.$store.state.daToken
    }
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
