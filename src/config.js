global.__PRODUCTION__ = (process.env.NODE_ENV === 'production');

let config = {
	development: {
		isProduction: false,
		port: 8080,
		protocol: 'http',
		cfRadiatorUrl: 'http://localhost:5000',
		ciRadiatorUrl: 'http://localhost:5001'
  },
	production: {
		isProduction: true,
		port: process.env.PORT,
		protocol: 'https',
		cfRadiatorUrl: ''
	},
}[__PRODUCTION__ ? 'production': 'development'];

config = {
	...config,
	app: { name: 'React Redux Example Development' },
	cookie: { maxAge: 1800000 },
};

export default config;
