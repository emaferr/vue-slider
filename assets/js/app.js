const app = new Vue (
    {
        el: '#app',

        data: {
            contatore: 0,
            immagini: [
                './assets/img/marge.jpeg',
                './assets/img/homer.jpeg',
                './assets/img/homer.jpeg',
                './assets/img/homer.jpeg'
            ]
        },
    }
    
)

const app2 = new Vue (
    {
        el: '#app2',

        data: {
            indice: 0,
            elementi: [
                1,
                2,
                3,
                4
            ]
        },
    }
    
)
