const intiialState = 0

const Counter = (state = intiialState, actions) => {
    switch(actions.type){
        case "COUNT_UP":
            return{
                state : state + 1
            }
        case "COUNT_DOWN":
            return{
                state : state + 1
            }
        default: return state
    }
}
export default Counter