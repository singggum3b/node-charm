var encode = module.exports = require("punycode").encode
var ord = encode.ord = function ord(c) {
	return c.charCodeAt(0)
};
