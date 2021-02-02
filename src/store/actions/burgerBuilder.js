import * as actionTypes from "./actionsTypes";

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGRDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGRDIENT,
        ingredientName: name
    }
}