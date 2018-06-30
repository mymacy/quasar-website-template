import axios from 'axios'

export default ({ Vue }) => {
    axios.defaults.baseURL = 'www.mymacy.de'
    axios.defaults.headers.common['Authorization'] = 'tokenShit'
    axios.defaults.headers.get['Accepts'] = 'application/json'
    Vue.prototype.$axios = axios
}
