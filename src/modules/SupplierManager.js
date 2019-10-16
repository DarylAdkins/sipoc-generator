const remoteURL = "http://localhost:5002"

export default {

    getAll() {
        return fetch(`${remoteURL}/suppliers`).then(result => result.json())
    },

    getOne(id) {
        return fetch(`${remoteURL}/suppliers/${id}`).then(result => result.json())
    },

    post(newSupplier) {
        return fetch(`${remoteURL}/suppliers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSupplier)
        }).then(data => data.json())
    }
}