import axios from 'axios'

const ip = "localhost"
const port = "5000"
const protocol = "http"

const get = async (apiUrl) => {
    let res
    try {
        res = await axios.get(protocol+"://"+ip+(port?":":"")+port+"/api/"+apiUrl)
    } catch (error) {
        if(error.code === 'ERR_NETWORK'){
            console.log(error)
        }
    }
    return res
}

const post = async (apiUrl,object) => {
    let res
    try {
        res = await axios.post(protocol+"://"+ip+(port?":":"")+port+"/api/"+apiUrl,object)
    } catch (error) {
        if(error.code === 'ERR_NETWORK'){
            console.log(error)
        }
    }
    return res
}

const defaultExport = {get,post}

export default defaultExport