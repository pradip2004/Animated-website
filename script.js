document.querySelector(".nav").innerHTML = `<div class="nav-left">
<a href="" class="nav-item">Home</a>
<a href="" class="nav-item">Pricing</a>
<a href="" class="nav-item">Products</a>
</div>
<a href="" class="nav-item-center">logo</a>
<div class="nav-right">
<a href="" class="nav-item">Our Journey</a>
</div>`

document.querySelector(".hero-section").innerHTML = `<div class="hero-section-part1 animation-1">
<h5>01.</h5>
<h2>Sustainability.</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<div class="hero-section-part1-img-wrapper">
      <img class="img-animate1" src="./assets/pinkgreenplant.jpg" alt="">
</div>
</div>
<div class="hero-section-part2 animation-1">
<div class="hero-section-part-2-heading">
      <h1>Ephemeral</h1>
      <h1>Equilibrium.</h1>
</div>
<div class="hero-section-part2-img-text">
      <img class="img-animate" src="./assets/pinkplant.jpg" alt="">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum ut eius.</p>
</div>
</div>
<div class="hero-section-part3 animation-1">
<div class="circle">
      <i class="ri-arrow-down-line"></i>
</div>
<h4>visit our gallery</h4>
</div>`

document.querySelector(".motive-section").innerHTML = `<h3>our motive</h3>
<p>Lorem ipsum dolor sit amet <span id="span-1"></span> consectetur adipisicing elit. Saepe eum
      blanditiis corrupti molestias modi molestiae maiores vero architecto totam rerum?<span
            id="span-2"></span> Molestiae cupiditate laborum <span id="span-3"></span>odio totam ex
      voluptate architecto! Praesentium debitis itaque molestias mollitia provident eligendi deleniti
      impedit iure dolor repudiandae.</p>`



const scroll = new LocomotiveScroll({
      el: document.querySelector('.main'),
      smooth: true
});

gsap.from('.nav a', {
      stagger: .1,
      opacity: 0,
      y: 20,
      duration: 2.5,
      ease: 'power4.out'
})

Shery.textAnimate(".hero-section-part-2-heading h1", {

      style: 2,
      y: 10,
      delay: 0.2,
      duration: 2,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      multiplier: 0.1,
});

gsap.from('.animation-1', {
      opacity: 0,
      y: 50,
      stagger: .2,
      duration: 1,
      ease: Expo
})

Shery.imageEffect('.img-animate', {
      style: 3,
      config: { "uFrequencyX": { "value": 35.11, "range": [0, 100] }, "uFrequencyY": { "value": 25.95, "range": [0, 100] }, "uFrequencyZ": { "value": 22.9, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 42.36 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7499999743635942 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.21, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
      debug: false,
})

Shery.imageEffect('.img-animate1', {
      style: 5,
      config: { "a": { "value": 1.37, "range": [0, 30] }, "b": { "value": 0.68, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.6666666894545837 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.61, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
      // debug: true,
})

gsap.from(".img-animate", {
      y: "100",
      opacity: 0,
      duration: 1,
      ease: Expo.easeInOut
})

Shery.imageEffect('.banner-img', {
      style: 5,
      gooey: true,
      config: { "a": { "value": 4.12, "range": [0, 30] }, "b": { "value": -0.98, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.9515738504753224 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 3.89, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.18, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 33 } }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.32, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
      // debug: true,
})