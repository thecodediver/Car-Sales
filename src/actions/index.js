export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export const ADD_FEATURE = 'ADD_FEATURE'

export function removeFeature(featureName) {
  return {
    type: REMOVE_FEATURE,
    payload: featureName
  }
}

export function addFeature(feature) {
  return {
    type: ADD_FEATURE,
    payload: feature
  }
}