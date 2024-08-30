import './style.scss'

import gsap from 'gsap';

import { ScrollTrigger, TextPlugin } from 'gsap/all';


window.onload = function () {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
    setTimeout(() => {

        gsap.fromTo('.hero_pedestal_inner', {
            y: '0px',
        }, {
            y: '-150px',
            scrollTrigger: {
                trigger: '.hero_decor',
                scrub: 1,
                // markers: true,
                start: '0% 50%',
                end: '0% 0%',
            }
        })
        gsap.fromTo('.hero_laptop_inner', {
            y: '0px',
        }, {
            y: '-250px',
            scrollTrigger: {
                trigger: '.hero_decor',
                scrub: 1,
                // markers: true,
                start: '0% 50%',
                end: '0% 0%',
            }
        })
        gsap.fromTo('.hero_radCard1_inner', {
            y: '0px',
        }, {
            y: '-100px',
            scrollTrigger: {
                trigger: '.hero_decor',
                scrub: 1,
                // markers: true,
                start: '0% 50%',
                end: '0% 0%',
            }
        })
        gsap.fromTo('.hero_radCard2_inner', {
            y: '0px',
        }, {
            y: '-300px',
            scrollTrigger: {
                trigger: '.hero_decor',
                scrub: 1,
                // markers: true,
                start: '0% 50%',
                end: '0% 0%',
            }
        })
        gsap.fromTo('.hero_card_inner', {
            y: '0px',
        }, {
            y: '-150px',
            scrollTrigger: {
                trigger: '.hero_decor',
                scrub: 1,
                // markers: true,
                start: '0% 50%',
                end: '0% 0%',
            }
        })
        gsap.fromTo('.hero_decorText_inner', {
            y: '0px',
        }, {
            y: '-300px',
            scrollTrigger: {
                trigger: '.hero_decor',
                scrub: 1,
                // markers: true,
                start: '0% 50%',
                end: '0% 0%',
            }
        })
        gsap.fromTo('.hero_radChart_inner', {
            y: '0px',
        }, {
            y: '-400px',
            scrollTrigger: {
                trigger: '.hero_decor',
                scrub: 1,
                // markers: true,
                start: '0% 50%',
                end: '0% 0%',
            }
        })
        gsap.fromTo('.hero_bars_inner', {
            y: '0px',
        }, {
            y: '-200px',
            scrollTrigger: {
                trigger: '.hero_decor',
                scrub: 1,
                // markers: true,
                start: '0% 50%',
                end: '0% 0%',
            }
        })


        gsap.fromTo('.hero_content_hint', {
            y: '-50px',
            opacity: 0
        }, {
            y: '0px',
            opacity: 1,
            duration: 1,
            delay: 3,

        })


        gsap.fromTo('.advantages_element_1', {
            y: '-100px',
            opacity: 0
        }, {
            y: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.advantages_element',
                scrub: 1,
                // markers: true,
                start: '0% 70%',
                end: '0% 70%',
            }
        })


        gsap.fromTo('.advantages_element_2', {
            y: '100px',
            opacity: 0
        }, {
            y: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.advantages_element',
                scrub: 1,
                // markers: true,
                start: '0% 60%',
                end: '0% 60%',
            }
        })
        gsap.fromTo('.advantages_element_3', {
            x: '100px',
            opacity: 0
        }, {
            x: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.advantages_element',
                scrub: 1,
                // markers: true,
                start: '0% 50%',
                end: '0% 50%',
            }
        })
        gsap.fromTo('.advantages_element_4', {
            x: '-100px',
            opacity: 0
        }, {
            x: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.advantages_element',
                scrub: 1,
                // markers: true,
                start: '0% 40%',
                end: '0% 40%',
            }
        })
        gsap.fromTo('.section_inner', {
            y: '-100px',
            opacity: 0
        }, {
            y: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.section_inner',
                scrub: 1,
                // markers: true,
                start: '0% 40%',
                end: '0% 40%',
            }
        })


        gsap.fromTo('.payment_subheader', {
            y: '-50px',
            opacity: 0
        }, {
            y: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.payment',
                scrub: 1,
                // markers: true,
                start: '0% 70%',
                end: '0% 70%',
            }
        })

        gsap.fromTo('.payment_header', {
            y: '-50px',
            opacity: 0
        }, {
            y: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.payment',
                scrub: 1,
                // markers: true,
                start: '0% 65%',
                end: '0% 65%',
            }
        })
        gsap.fromTo('.payment_text', {
            y: '-50px',
            opacity: 0
        }, {
            y: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.payment',
                scrub: 1,
                // markers: true,
                start: '0% 60%',
                end: '0% 60%',
            }
        })

        gsap.fromTo('.payment_content_decor_inner', {
            y: '-50px',
            opacity: 0
        }, {
            y: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.payment',
                scrub: 1,
                // markers: true,
                start: '0% 55%',
                end: '0% 55%',
            }
        })
        gsap.fromTo('.payment_content_key_inner', {
            y: '-50px',
            opacity: 0
        }, {
            y: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.payment',
                scrub: 1,
                // markers: true,
                start: '0% 50%',
                end: '0% 50%',
            }
        })
        gsap.fromTo('.payment_decor_add_inner', {
            y: '-50px',
            opacity: 0
        }, {
            y: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.payment',
                scrub: 1,
                // markers: true,
                start: '0% 45%',
                end: '0% 45%',
            }
        })

        gsap.fromTo('.security_subheader', {
            y: '-50px',
            opacity: 0
        }, {
            y: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.security',
                scrub: 1,
                // markers: true,
                start: '0% 70%',
                end: '0% 70%',
            }
        })

        gsap.fromTo('.security_header', {
            y: '-50px',
            opacity: 0
        }, {
            y: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.security',
                scrub: 1,
                // markers: true,
                start: '0% 65%',
                end: '0% 65%',
            }
        })

        gsap.fromTo('.security_text', {
            y: '-50px',
            opacity: 0
        }, {
            y: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.security',
                scrub: 1,
                // markers: true,
                start: '0% 60%',
                end: '0% 60%',
            }
        })

        gsap.fromTo('.security_decor_inner', {
            x: '-50px',
            opacity: 0
        }, {
            x: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.security',
                scrub: 1,
                // markers: true,
                start: '0% 55%',
                end: '0% 55%',
            }
        })
        gsap.fromTo('.security_content_element1', {
            x: '50px',
            opacity: 0
        }, {
            x: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.security',
                scrub: 1,
                // markers: true,
                start: '0% 50%',
                end: '0% 50%',
            }
        })

        gsap.fromTo('.security_content_element2', {
            x: '50px',
            opacity: 0
        }, {
            x: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.security',
                scrub: 1,
                // markers: true,
                start: '0% 45%',
                end: '0% 45%',
            }
        })





        gsap.fromTo('.contactUs_blockHeader', {
            y: '-50px',
            opacity: 0
        }, {
            y: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.contactUs',
                scrub: 1,
                // markers: true,
                start: '0% 60%',
                end: '0% 60%',
            }
        })




        gsap.fromTo('.contactUs_inner', {
            y: '-50px',
            opacity: 0
        }, {
            y: '0px',
            opacity: 1,
            scrollTrigger: {
                trigger: '.contactUs',
                scrub: 1,
                // markers: true,
                start: '0% 45%',
                end: '0% 45%',
            }
        })













        gsap.to('.hero_content_header', { duration: 3, text: { value: "<span>PAYMENT PROCESSING</span> FOR YOUR BUSINESS" } })
        document.getElementById('loader').classList.add('onone');
        setTimeout(() => {
            document.getElementById('loader').classList.add('dnone');
        }, 500);
    }, 500);

};
