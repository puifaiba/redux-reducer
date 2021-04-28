export function manageFriends(state = {
    friends = []
}, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return ({...state, 
            friends: [
                ...state.friends,
                action.friend
            ]});
        
        case "DELETE_FRIEND":
            const remId = state.friends.findIndex(friend => friend.id === action.id)
            return ({
                ...state,
                friends: [
                    ...state.friends.slice(0, remId),
                    ...state.friends.slice(remId + 1)
                ]
            })
        
        default:
            return state
    }
}
