export const generateToken = (user, message, statusCode, response) => {
 const token = user.generateJsonWebToken();
 const expirationDate = new Date(Date.now() + (process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000)); // 10 days from now
 response.status(statusCode).cookie("token",token, {
    expires: expirationDate,
    httpOnly: true
 }).json({
    success: true,
    message,
    token,
    user,
 })
}