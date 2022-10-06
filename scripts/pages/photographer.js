async function getPhotographers() {
    try {
        const response = await fetch("../data/photographers.json")
        const data = await response.json()
        console.log(data.photographers)
        return data
    } catch (error) {
        console.log(error)
    }
}

