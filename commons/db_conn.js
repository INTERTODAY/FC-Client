var mysql = require('mysql');
var config = require('../secret/db_info').dev;

module.exports = function () {

	return {

		// DB 연결을 맺는다
		init: function () {
			return mysql.createConnection({
				host    : config.host,
				port : config.port,
				user : config.user,
				password : config.password,
				database: config.database,
                mutipleStatements: true
			});
		},

		// DB 연결 테스트
		test_open: function (conn) {
			conn.connect(function(err) {
				if(err){
					console.error('mysql connection error.');
					console.error(err);
					throw err;
				}else{
					console.info('mysql is connected successfully.');
				}
			});
		}
	};
};