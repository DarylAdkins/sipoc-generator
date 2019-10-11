const remoteURL = "http://localhost:5002"

export default {

    getAll() {
        return fetch(`${remoteURL}/sipocs`).then(result => result.json())
    },

    getOne(id) {
        return fetch(`${remoteURL}/sipocs/${id}`).then(result => result.json())
}
}