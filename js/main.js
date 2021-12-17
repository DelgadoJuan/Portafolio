let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('Juan Agustín Delgado')
  .pauseFor(9000)
  .deleteChars(10)
  .start();
 

gsap.from('.proyectos_title', {
    scrollTrigger: {
        trigger: '.proyectos_title',
        toggleActions: 'restart none none none'
    },
    x: "-=500px",
    autoAlpha: 0

})


gsap.from('.proyecto1', {
    scrollTrigger: {
        trigger: '.proyecto1',
    },
    x: "-=500px",
    autoAlpha: 0,
    duration: 1,
    delay: 0.5


})
gsap.from('.proyecto2', {
    scrollTrigger: {
        trigger: '.proyecto2',
    },
    x: "+=500px",
    autoAlpha: 0,
    duration: 1,
    delay: 0.5
});