import React, { useEffect, useRef } from 'react';
import { Box, Grid, Typography } from '@mui/material';

class Particle {
  parent: ParticleSystem;
  id: string;
  position = { x: 0, y: 0 };
  diameter = 0;
  life = 0;
  speed = { x: 0, y: 0 };

  constructor(id: string, parent: ParticleSystem) {
    this.parent = parent;
    this.id = id;
    this.init();
  }

  init() {
    const interval = setInterval(() => {
      this.position.x += (this.speed.x * 60) / 1000;
      this.position.y -= (this.speed.y * 60) / 1000;
      this.life -= 1 / 60;
      if (this.life <= 0) {
        clearInterval(interval);
        this.parent.particles.delete(this.id);
      }
    }, 1000 / 60);
  }
}

class ParticleSystem {
  canvas: HTMLCanvasElement;
  size: { x: number; y: number };
  lastId = 0;
  ammount = 0;
  particles = new Map<string, Particle>();
  diameter = { min: 0, max: 0 };
  life = { min: 0, max: 0 };
  speed = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };

  constructor(canvas: HTMLCanvasElement, size: { x: number; y: number }) {
    this.canvas = canvas;
    this.size = size;
    this.canvas.width = size.x;
    this.canvas.height = size.y;
  }

  static getRandomNumberInInterval(interval: { min: number; max: number }) {
    const min = Math.ceil(interval.min);
    const max = Math.floor(interval.max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  createParticle() {
    const particle = new Particle(this.lastId.toString(), this);
    particle.position.x = ParticleSystem.getRandomNumberInInterval({
      min: 0,
      max: this.size.x,
    });
    particle.position.y = ParticleSystem.getRandomNumberInInterval({
      min: 0,
      max: this.size.y,
    });
    particle.diameter = ParticleSystem.getRandomNumberInInterval(this.diameter);
    particle.life = ParticleSystem.getRandomNumberInInterval(this.life);
    particle.speed.x = ParticleSystem.getRandomNumberInInterval(this.speed.x);
    particle.speed.y = ParticleSystem.getRandomNumberInInterval(this.speed.y);
    this.particles.set(this.lastId.toString(), particle);
    this.lastId++;
  }

  init() {
    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = 'white';
    this.particles = new Map();
    for (let i = 0; i < this.ammount; i++) this.createParticle();

    const render = () => {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(
          particle.position.x,
          particle.position.y,
          particle.diameter / 2,
          0,
          2 * Math.PI,
          false
        );
        ctx.closePath();
        ctx.fill();
      });
      requestAnimationFrame(render);
    };

    render();
  }
}

const DashboardMiddle: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const system = new ParticleSystem(canvasRef.current, {
        x: window.innerWidth,
        y: window.innerHeight,
      });
      system.ammount = 100;
      system.diameter = { min: 1, max: 2 };
      system.life = { min: 15, max: 20 };
      system.speed = { x: { min: -10, max: 10 }, y: { min: -10, max: 10 } };
      system.init();

      const resizeHandler = () => {
        if (canvasRef.current) {
          system.size = { x: window.innerWidth, y: window.innerHeight };
          system.canvas.width = window.innerWidth;
          system.canvas.height = window.innerHeight;
          system.init();
        }
      };

      window.addEventListener('resize', resizeHandler);

      return () => {
        window.removeEventListener('resize', resizeHandler);
      };
    }
  }, []);

  const features = [
    {
      title: 'SEO Optimization',
      description:
        'Improve your site visibility on search engines with our expert SEO services.',
    },
    {
      title: 'Social Media Marketing',
      description:
        'Engage your audience and boost your brand on social media platforms.',
    },
    {
      title: 'Web Development',
      description:
        'Get a custom-built website that is responsive, fast, and scalable.',
    },
    {
      title: 'Branding',
      description:
        'Build a strong brand identity with our comprehensive branding solutions.',
    },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        background: 'rgb(10, 10, 10)',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <canvas
        id="container"
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></canvas>

      <Box sx={{ p: 4, zIndex: 1, position: 'relative' }}>
        <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
          Our Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index} sx={{ maxWidth: 400 }}>
              <Box
                sx={{
                  p: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                  backdropFilter: 'blur(5px)',
                  color: 'white',
                }}
              >
                <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardMiddle;
