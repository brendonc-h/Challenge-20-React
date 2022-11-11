import React from 'react';

function About() {
    return(
        <section 
        id="about"
        className="flex items-center justify-center flex-col pt-20 pb-6"
        >
            <div className="text-center">
                <h1 className="text-4x1 md:text-7x1 dark:text -white mb-1 md:mb-3 font-bold">
                    Brendon Curry-Hobbs
                </h1>
                <p className="text-base md:text-x1 mb-3 font-medium">
                    Full Stack Web Developer 
                </p>
                <p className="text-sm max-w-xl mb-6 font-bold">
                    I'm am a Full Stack Web Developer originally from Wyoming. I live in Northern Colorado and have been coding for a few years. These are some of the projects that I have done so far. These projects are built from the ground up from planning and designing all the way up. These application's are to solve real world problems that make life easier.
                </p>

            </div>
        </section>
    );
}

export default About;