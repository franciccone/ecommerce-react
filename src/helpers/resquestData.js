import { catalog } from "../data/catalog"

export const requestData = () => {
    return new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve(catalog)
            }, 2000)
    })
}
