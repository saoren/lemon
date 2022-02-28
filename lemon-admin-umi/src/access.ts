/*
 * @Author: L.柠
 * @Date: 2022-02-28 13:27:37
 */
export default (initialState: any)=>{
    initialState= Array.isArray(initialState) ? initialState :  []

    let home = {
        HOME: initialState.includes('HOME') || false,
    }
    return {
        ...home
    }
}