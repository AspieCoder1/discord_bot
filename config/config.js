const path = require('path');

if (process.env.NODE_ENV === 'development') {
	require('dotenv').config({ path: path.resolve(__dirname, './dev.env') });
}
