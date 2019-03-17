export function SimpleLoggerMiddleware(req, res, next) {
  console.log(`Request...`);
  next();
}
