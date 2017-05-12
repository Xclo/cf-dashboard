global.__DEVELOPMENT__ = (process.env.NODE_ENV === 'development');

let config = {
	development: {
		isProduction: false,
		port: 8080,
		protocol: 'http'
  },
	production: {
		isProduction: true,
		port: process.env.PORT,
		httpsPort: 8080,
		protocol: 'http'
	},
}[__DEVELOPMENT__ ? 'development' : 'production'];

config.host = 'localhost:5000';

config = {
	...config,
	app: { name: 'React Redux Example Development' },
	cookie: { maxAge: 1800000 },
};

config.site = __DEVELOPMENT__ ?
	`${config.protocol}://${config.host}:${config.port}` :
	`${config.protocol}://${config.host}`;

export default config;
