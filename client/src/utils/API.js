import axios from 'axios'

const API = {
  sendMessage: function (message) {
    return axios.post("/api/messages", message)
  }
}

export default API;