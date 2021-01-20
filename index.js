const UNICODE_MATCH_REG = /[^\x00-\xff]/g;
const CONTENT_MATCH_REG = /content\s*:\s*/;
module.exports = function (source) {
	if (CONTENT_MATCH_REG.test(source) && UNICODE_MATCH_REG.test(source)) {
		source = source.replace(UNICODE_MATCH_REG, function (m) {
			return "\\" + m.charCodeAt(0).toString(16);
		});
	}
	return source;
}
