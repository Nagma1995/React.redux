import { createStore } from 'redux'
import UserReduser from './UserReduser'

const UserStore = createStore(UserReduser)
export default UserStore