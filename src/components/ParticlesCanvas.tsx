import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { ISourceOptions } from 'tsparticles-engine';
import type { Engine } from 'tsparticles-engine';
import { tspBlackHole } from '../particlesOptions/tspBlackHole';

const ParticlesCanvas = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      width="100%"
      height="100vh"
      options={
        tspBlackHole({
          linkColor: 'default',
          connectColor: 'default',
          trailFillColor: 'default',
          grabLinkColor: 'default',
          backgroundColor: 'default',
        }) as ISourceOptions
      }
      init={particlesInit}
    />
  );
};

export default ParticlesCanvas;
