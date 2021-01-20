const CHINESE_REG = /[^\x00-\xff]/g;
module.exports = function (source) {
	const pattern = CHINESE_REG;
	if (pattern.test(source)) {
		source = source.replace(pattern, function (m) {
			return "\\" + m.charCodeAt(0).toString(16);
		});
	}
	return source;
}