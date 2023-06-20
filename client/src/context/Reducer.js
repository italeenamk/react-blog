const Reducer = (state, action)=>{
    switch (action.type){
        case "LOGIN START":
            return{
                user: null,
                isFetching: true
            }
    }
}