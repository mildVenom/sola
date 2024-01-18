import React, { useEffect, useState } from "react";
import particlesConfig from './config/particles-config';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesComponent() {
    const [init, setInit] = useState(false);

    initParticlesEngine(async (engine) => {
        await loadSlim(engine);
    }).then(() => {
        setInit(true);
    });

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className='min-h-screen z-0 max-h-screen'>
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={particlesConfig}
                />
            )}
        </div>
    );
}

export default ParticlesComponent;
