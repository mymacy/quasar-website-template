import VueImg from 'v-img'

export default ({ Vue }) => {
  Vue.use(VueImg, {
      altAsTitle: true,
      thumbnails: false
  });
}
