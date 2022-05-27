type tspBlackHoleOptions = {
  linkColor?: string
  connectColor?: string
  trailFillColor?: string
  grabLinkColor?: string
  backgroundColor?: string
}

export const tspBlackHole = (options: tspBlackHoleOptions) => {
  return {
    fullScreen: {enable: false, zIndex: 0}, //must be false to set canvas dimensions
    background: {
      color: {
        value: options.backgroundColor === 'default' ? '#000000' : options.backgroundColor // trail fillColor overrides background color when particles' "trail" property is enabled.
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'attract', //attract?, bubble, pause, push, remove, repulse, trail
        },
        onHover: {
          enable: true,
          mode: ['repulse', 'connect', 'grab'], //grab, bubble, repulse, connect, ['grab', 'bubble']
        },
        resize: true, //automatically resizes when canvas size changes
      },
      modes: {
        attract: {
          distance: 450,
          duration: 1.5,
          factor: 10
        },
        // push: {
        //   quantity: 4,
        // },
        repulse: {
          distance: 200,
          // duration: 1.2, // unnecessary for onHover event
        },
        // creates a soft white "glow" effect around the repulsed circle. the color of the connecting line is based off the color of the particle.
        connect: {
          radius: 220, // affects particles within circle of the set value
          distance: 100, // connects 2 particles that are within the set distance and within the set radius property
          links: {
            opacity: 0.2 // opacity of new connecting lines
          },
        },
        // grab: {distance, links.opacity: 0-1}
        grab: {
          distance: 200, //connects particles within distance to cursor
          links: {
            color: options.grabLinkColor === 'default' ? '#03C0C1' : options.grabLinkColor,
            // blink: true,
            // consent: true,
            opacity: 0.7 //opacity of new connecting lines
          }
        },
      },
    },
    particles: {
      color: {
        value: options.connectColor === 'default' ? '#FFFFFF' : options.connectColor,  // color of the links connect line from {interactivity: {modes: connect: { links }}} are set to the color of the particle
      },
      links: {
        color: options.linkColor === 'default' ? '#03C0C1' : options.linkColor,
        distance: 175,
        enable: true,
        opacity: 0.5,
        width: 0.5,
      },
      collisions: {
        enable: false, // prevent collisions between particles
      },
      move: {
        enable: true, // stationary or dynamic particles
        direction: 'none', // 'none', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left'
        speed: 3,
        outModes: { // { 'default', 'bottom', 'left', 'right', 'top' }
          default: 'bounce', // 'out', 'destroy', 'bounce', 'bounceHorizontal', 'bounceVertical, 'none', 'split' - follow when reaching limits of the canvas
        },
        random: false, // ???
        straight: false, // ???
        trail: { // creates a smoke like effect when no shapes only lines
          enable: true,
          length: 16,
          fillColor: options.trailFillColor === 'default' ? '#000000' : options.trailFillColor // replaces background: {color} when trail is enabled
        },
      },
      number: {
        // this.density = (canvas.width * canvas.height) / (densityOptions.factor * pxRatio * densityOptions.area);
        // this.density will be multiplied with the particles.number value
        density: {
          enable: true,
          area: 800,
        },
        value: 100,
      },
      opacity: {
        value: 0.5,
      },
      // circle, line, edge, triangle, polygon, star, image, []
      shape: {
        type: 'line' // type line seems to display no particle
      },
    },
    detectRetina: true,
  }
}