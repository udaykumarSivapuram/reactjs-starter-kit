import { ARTICLE } from "../actionTypes"

export function addArticle(payload) {
    console.log("payload", payload);
    return { type: ARTICLE.ADD_ARTICLE, payload }
};