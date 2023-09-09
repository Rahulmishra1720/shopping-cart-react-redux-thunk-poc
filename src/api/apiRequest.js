import axios from 'axios'
export async function axiosRequest(url, method, headers, params) {
    return params ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
        timeout: 60000

    }) : axios({
        url: url,
        method: method,
        headers: headers,
        data: {},
        timeout: 60000

    })
};

const getApiDetails = () => {
    const headers = { "Content-Type": "application/json" }
    return axiosRequest(`https://fakestoreapi.com/products?limit=10`, "GET", headers, {})
};

const getProductDetailById = (id) => {
    const headers = { "Content-Type": "application/json" }
    return axiosRequest(`https://fakestoreapi.com/products/${id}`, "GET", headers, {})
};

export { getApiDetails, getProductDetailById };