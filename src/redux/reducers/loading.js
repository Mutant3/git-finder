export default function reducer(loading = false, action){
    switch (action.type) {
        case 'LOADING_ON':
            return loading = true
        case 'LOADING_OFF':
            return loading = false
        default:
            return loading
    }
}
