import { ARTICLE } from "../actionTypes"

const initialState = {
    articles: []
}

function rootReducer(state = initialState, action) {
    if (action.type === ARTICLE.ADD_ARTICLE) {
        state.articles.push(action.payload)
    }
    return state;
}

export default rootReducer;