import { initializeApp  } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const fireConfig = {}

const app = initializeApp(fireConfig)
const db = getFirestore(app)

export default db

// firebase setup: https://firebase.google.com/docs/web/setup
// 其它參考安裝(vuefire): https://vuefire.vuejs.org/vuefire/getting-started.html#plugin