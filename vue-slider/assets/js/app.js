const app = new Vue (
    {
        el: '#app',

        data: {
            contatore: 0,

            immagini: [
                './assets/img/homer.jpeg',
                './assets/img/marge.jpeg',
                './assets/img/bart.jpeg',
                './assets/img/lisa.jpeg',
                './assets/img/maggie.jpeg'
            ],
        },

        methods: {
            immaginePrecedente() {
                if (this.contatore === 0) {
                    return this.contatore = this.immagini.length - 1;
                }
                return this.contatore -= 1; 
            },
    
            immagineSuccessiva() {
                if (this.contatore === this.immagini.length - 1) {
                    return this.contatore = 0;
                }
                
                return this.contatore += 1; 
            },
    
            cambiaImmagine(contatore) {
                return this.contatore = contatore;
            }
        }, 
        
        mounted() {
            
            document.addEventListener('keydown', function (evento) {
                if (evento.key === 'ArrowLeft') {
                    app.immaginePrecedente();
                } else if (evento.key === 'ArrowRight') {
                    app.immagineSuccessiva();
                }
            });

            setInterval(this.immagineSuccessiva, 3000);
        
        }
    }
)
