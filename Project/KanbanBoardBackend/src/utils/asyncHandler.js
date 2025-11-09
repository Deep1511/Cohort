// //TODO : We may need it later
// const asyncHandler = (reqestHandler) => {
//   return (req, res, next) => {
//     Promise.resolve(reqestHandler(req, res, next)).catch((err) => next(err));
//   };
// };

// export { asyncHandler };

function asyncHandler(reqestHandler) {
  return function (req, res, next) {
    Promise.resolve(reqestHandler(req, res, next)).catch(function (err) {
      next(err);
    });
  };
}

export { asyncHandler };
