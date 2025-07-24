
// Initialize Lenis

gsap.from(".hero-title", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out"
});
gsap.from(".hero-sub", {
    opacity: 0,
    y: 30,
    delay: 0.4,
    duration: 1,
    ease: "power3.out"
});
gsap.from(".hero-desc", {
    opacity: 0,
    y: 30,
    delay: 0.8,
    duration: 1,
    ease: "power3.out"
});


document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const initAnimation = () => {

        let mySplit = new SplitText('.reveal', { type: 'chars' });
        let chars = mySplit.chars;

        gsap.from(chars, {
            yPercent: 130,
            stagger: 0.05,
            ease: "back.out",
            duration: 1,
            scrollTrigger: {
                trigger: '.why',
                start: "top 80%",

            }
        });

        let mySplitText1 = new SplitText('.reveal-type1', { type: 'words' });
        let words1 = mySplitText1.words;

        gsap.from(words1, {
            yPercent: 130,
            stagger: 0.1,
            ease: "back.out",
            duration: 1,
            scrollTrigger: {
                trigger: '.one',
                start: "top 80%",

            }
        });



        let mySplitText2 = new SplitText('.reveal-type2', { type: 'words' });
        let words2 = mySplitText2.words;

        gsap.from(words2, {
            yPercent: 130,
            stagger: 0.1,
            ease: "back.out",
            duration: 1,
            scrollTrigger: {
                trigger: '.two',
                start: "top 80%",

            }
        });


        let mySplitText3 = new SplitText('.reveal-type3', { type: 'words' });
        let words3 = mySplitText3.words;

        gsap.from(words3, {
            yPercent: 130,
            stagger: 0.1,
            ease: "back.out",
            duration: 1,
            scrollTrigger: {
                trigger: '.three',
                start: "top 80%",

            }
        });
    };



    if (document.fonts) {
        document.fonts.ready.then(initAnimation);
    } else {
        // Fallback for browsers that don’t support FontFaceSet
        window.addEventListener("load", initAnimation);
    }
});


const lenis = new Lenis({
    autoRaf: true,
});
// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
