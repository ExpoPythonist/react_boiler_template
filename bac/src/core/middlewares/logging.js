const loggingMiddleware = store => next => action => {
    next(action);
  };

export default loggingMiddleware;