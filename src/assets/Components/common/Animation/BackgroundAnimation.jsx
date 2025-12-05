import { useEffect } from "react";

export default function Fireworks() {
  useEffect(() => {
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let fireworks = [];

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    function createFirework() {
      const x = random(0, canvas.width);
      const y = random(0, canvas.height / 2);

      const colors = [
        "255, 0, 0", // red
        "0, 255, 0", // green
        "0, 128, 255", // blue
        "255, 255, 0", // yellow
        "255, 0, 255", // magenta
        "0, 255, 255", // cyan
        "255, 128, 0", // orange
        "128, 0, 255", // purple
      ];

      const chosenColor = colors[Math.floor(Math.random() * colors.length)];

      const particles = [];
      for (let i = 0; i < 60; i++) {
        particles.push({
          x,
          y,
          color: chosenColor,
          angle: random(0, Math.PI * 2),
          speed: random(1, 5),
          alpha: 1,
          size: random(2, 4),
        });
      }

      fireworks.push({ particles });
    }

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fireworks.forEach((fw, index) => {
        fw.particles.forEach((p) => {
          p.x += Math.cos(p.angle) * p.speed;
          p.y += Math.sin(p.angle) * p.speed;
          p.alpha -= 0.015;

          ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
          ctx.fillRect(p.x, p.y, p.size, p.size);
        });

        if (fw.particles[0].alpha <= 0) fireworks.splice(index, 1);
      });

      requestAnimationFrame(update);
    }

    setInterval(createFirework, 400);
    update();
  }, []);

  return (
    <canvas
      id="fireworks"
      className="absolute inset-0 sm:w-full sm:h-full pointer-events-none -z-10 w-[480px] h-full "
    ></canvas>
  );
}
