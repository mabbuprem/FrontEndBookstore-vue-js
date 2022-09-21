import AxiosService from "../AxiosService/AxiosService"
export default class BookService {
    getAllBookService() {
        let token = localStorage.getItem('token')
        //console.log(reqPayload);
        let httpHeaders = {
            headers: {
                'Authorization': "Bearer " + token,
                'Content-type': 'application/json'
            }
        }
         return AxiosService.prototype.getService('displayAllBooks', true, httpHeaders)
    }

addToWishlistService(reqPayload) {
    let token = localStorage.getItem('token')
    // console.log(reqPayload);
    let httpHeaders = {
        headers: {
            'Authorization': "Bearer " + token,
            'Content-type': 'application/json'
        }
    }
     return AxiosService.prototype.postService('addBookToWishlistByBookId', reqPayload, true, httpHeaders)
}

addToCartService(reqPayload) {
    let token = localStorage.getItem('token')
    // console.log(reqPayload);
    let httpHeaders = {
        headers: {
            'Authorization': "Bearer " + token,
            'Content-type': 'application/json'
        }
    }
     return AxiosService.prototype.postService('addBookToCartByBookId', reqPayload, true, httpHeaders)
}
}


