import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import smoothScroll from 'vue-smoothscroll'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoffee,faHandshake,faCode,faUserCircle,faHammer,faPen,faSchool,
  faSearch,faEnvelope,faMapMarkerAlt,faGlobe,faBlog,
  faBirthdayCake,faImage } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faGithub,faHtml5,faCss3Alt,faJsSquare, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'

library.add(faCoffee,faHandshake,faCode,faUserCircle,faHammer,faPen,
  faSchool,faSearch,faTwitter,faGithub,faEnvelope,faMapMarkerAlt,faGlobe,
  faBlog,faBirthdayCake,faHtml5,faCss3Alt,faJsSquare,faImage,faFacebook, faInstagram )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueParticles)
Vue.use(smoothScroll)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
