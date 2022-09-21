const app = require('./src/app')

const entryPoint = () => {
    app.listen(app.get('PORT'), () => {
        console.log(`Listening at port ---> ${app.get('PORT')}`);
    })
}

entryPoint()