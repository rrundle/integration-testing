const { PORT, app } = require('./index.js')

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`) // eslint-disable-line
})
