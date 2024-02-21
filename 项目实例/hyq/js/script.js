tsParticles.load("tsparticles", {
  background: {
    color: {
      value: "#000"
    },
    image:
      "url(ygg.jpg)",
    size: "cover",
    repeat: "no-repeat",
    position: "center center"
  },
  fpsLimit: 60,
  emitters: {
    direction: "top",
    size: {
      width: 100,
      height: 0
    },
    position: {
      x: 50,
      y: 100
    },
    rate: {
      delay: 0.1,
      quantity: 5
    }
  },
  particles: {
    number: {
      value: 0

// //泡泡密度
// density:{
//         enable:true,
//          value:2
//      }


    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "image",
      image: [
        {
          src: "img/1.png",
          width: 202,
          height: 200
        },
        {
          src: "img/2.png",
          width: 1153,
          height: 1080
        },
        {
          src:
            "img/3.png",
          width: 894,
          height: 894
        }
      ]
    },
    opacity: {
      value: 1
    },
    size: {
      value: 28,//是否冒泡
      anim: {
        enable: true,
        speed: 20,
        size_min: 5,
        sync: true,
        startValue: "min",
        destroy: "max"
      }
    },
    move: {
      enable: true,
      speed: 4.5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "destroy",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      repulse: {
        distance: 100
      },
      push: {
        quantity: 4
      }
    }
  },
  detectRetina: true
});

