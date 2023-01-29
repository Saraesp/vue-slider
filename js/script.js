const {
        createApp
} = Vue;

createApp({
    data(){
        return{
            activeSlide : 0,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'sSpiderman Miles Morale',
                    text: 'Experience therise of Miles Moralesas the new hero mastersincredible, explosivenew powers to becomehis own Spider-Man.',
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },
    created(){
        this.autoScroll();
    },
    methods: {
        changeSlide(index){
            this.activeSlide = index;
        },
        next(){
            this.activeSlide++;
            if(this.activeSlide > this.slides.lenght -1){
                this.activeSlide = 0;
            }
        },
        prev(){
            this.activeSlide--;
            if(this.activeSlide > this.slides.lenght -1){
                this.activeSlide = 0;
            }
        },
        autoScroll(){
            setInterval(() => {
                this.next();
            }, 3000);
        }
    },
    
}).mount('#app');
