import { startLoading, stopLoading } from '../modules/app'

function wrapAsync(dispatch, getState, action) {
  dispatch(startLoading())
  const result = action(dispatch, getState)

  if (result instanceof Promise) {
    return result
      .then(() => dispatch(stopLoading()))
      .catch(() => dispatch(stopLoading()))
  }

  dispatch(stopLoading())
  return result
}

function createThunkMiddleware() {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return wrapAsync(dispatch, getState, action)
    }

    if (action && typeof action.payload === 'function') {
      return wrapAsync(dispatch, getState, action.payload)
    }

    return next(action)
  }
}

export default createThunkMiddleware()
