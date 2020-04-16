export const REMOVE_FEATURE = "REMOVE_FEATURE"


export const remove = (feature) => {
    console.log('add is running')
    return { type: REMOVE_FEATURE, payload: feature};
}