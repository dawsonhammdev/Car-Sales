export const ADD_FEATURE = "ADD_FEATURE"

export const add = (feature) => {
    console.log('add is running')
    return { type: ADD_FEATURE, payload: feature};
}