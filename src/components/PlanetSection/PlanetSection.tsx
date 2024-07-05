import React from 'react';
import PlanetCard from './PlanetCard';
import styles from './PlanetSection.module.css';

const PlanetSection: React.FC = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles['section-title']}>The 9 Planets in Our Solar System</h2>
            <div className={styles.row}>
                <PlanetCard
                    image="https://nineplanets.org/wp-content/uploads/2019/09/mercury.png"
                    title="Mercury"
                    description="The smallest and fastest planet, Mercury is the closest planet to the Sun and whips around it every 88 Earth days."
                    link="#"
                />
                <PlanetCard
                    image="https://nineplanets.org/wp-content/uploads/2019/09/venus.png"
                    title="Venus"
                    description="Spinning in the opposite direction to most planets, Venus is the hottest planet, and one of the brightest objects in the sky."
                    link="#"
                />
            </div>
            <div className={styles.row}>
                <PlanetCard
                    image="https://nineplanets.org/wp-content/uploads/2019/09/earth.png"
                    title="Earth"
                    description="The place we call home, Earth is the third rock from the sun and the only planet with known life on it - and lots of it too!"
                    link="#"
                />
                <PlanetCard
                    image="https://nineplanets.org/wp-content/uploads/2019/09/mars.png"
                    title="Mars"
                    description="The red planet is dusty, cold world with a thin atmosphere and is home to four NASA robots."
                    link="#"
                />
            </div>
            <div className={styles.row}>
                <PlanetCard
                    image="https://nineplanets.org/wp-content/uploads/2019/09/jupiter.png"
                    title="Jupiter"
                    description="The largest planet in our solar system, Jupiter is a gas giant with a surface covered in swirling clouds and an intense magnetic field."
                    link="#"
                />
                <PlanetCard
                    image="https://nineplanets.org/wp-content/uploads/2019/09/saturn.png"
                    title="Saturn"
                    description="The second largest planet, Saturn is well known for its spectacular ring system made of ice and rock."
                    link="#"
                />
            </div>
            <div className={styles.row}>
                <PlanetCard
                    image="https://nineplanets.org/wp-content/uploads/2019/09/uranus.png"
                    title="Uranus"
                    description="Uranus is a gas giant with a unique tilt that causes it to rotate on its side, making its seasons extreme."
                    link="#"
                />
                <PlanetCard
                    image="https://nineplanets.org/wp-content/uploads/2019/09/neptune.png"
                    title="Neptune"
                    description="Neptune is a gas giant known for its striking blue color and supersonic winds, the fastest in the solar system."
                    link="#"
                />
            </div>

            <div className={styles.separator}></div>

            <h2 className={styles['section-title']}>The Five Dwarf Planets</h2>
            <div className={styles.row}>
                <PlanetCard
                    image="https://nineplanets.org/wp-content/uploads/2019/09/ceres.png"
                    title="Ceres"
                    description="Ceres is the largest object in the asteroid belt between Mars and Jupiter and the only dwarf planet located in the inner solar system."
                    link="#"
                />
                <PlanetCard
                    image="https://nineplanets.org/wp-content/uploads/2019/09/pluto-1.png"
                    title="Pluto"
                    description="Once considered the ninth planet, Pluto is the best known of the dwarf planets. It resides in the Kuiper Belt, a region of icy bodies beyond the orbit of Neptune."
                    link="#"
                />
            </div>
            <div className={styles.row}>
                <PlanetCard
                    image="https://nineplanets.org/wp-content/uploads/2019/09/haumea.png"
                    title="Haumea"
                    description="Haumea is a dwarf planet located beyond Neptune’s orbit in the Kuiper Belt and is one of the fastest rotating large objects in our solar system."
                    link="#"
                />
                <PlanetCard
                    image="https://nineplanets.org/wp-content/uploads/2019/09/makemake.png"
                    title="Makemake"
                    description="Makemake is a dwarf planet in the Kuiper Belt that is slightly smaller and dimmer than Pluto."
                    link="#"
                />
            </div>
            <div className={styles.row}>
                <PlanetCard
                    image="https://nineplanets.org/wp-content/uploads/2019/09/eris.png"
                    title="Eris"
                    description="Eris is one of the largest known dwarf planets in our solar system and is located in the scattered disk, a distant area populated with icy bodies and dwarf planets."
                    link="#"
                />
            </div>

            <div className={styles.separator}></div>

            <h2 className={styles['section-title']}>Other Objects in The Solar System</h2>
            <div className={styles.row}>
                <PlanetCard
                    image="https://nineplanets.org/wp-content/uploads/2019/09/sun.png"
                    title="Sun"
                    description="The Sun is the star at the center of our solar system. It is a nearly perfect sphere of hot plasma, and it provides the energy necessary for life on Earth."
                    link="#"
                />
                <PlanetCard
                    image="https://nineplanets.org/wp-content/uploads/2019/09/moon.png"
                    title="Moon"
                    description="The Moon is Earth's only natural satellite and the fifth largest moon in the solar system. It influences Earth's tides and has been a focus of human exploration."
                    link="#"
                />
            </div>
            <div className={styles.row}>
                <PlanetCard
                    image="https://nineplanets.org/wp-content/uploads/2019/09/comet.png"
                    title="Comet"
                    description="Comets are icy bodies that release gas or dust. They are often visible from Earth when they pass close to the Sun, creating a bright coma and tail."
                    link="#"
                />
                <PlanetCard
                    image="https://nineplanets.org/wp-content/uploads/2019/09/asteroid.png"
                    title="Asteroid"
                    description="Asteroids are rocky bodies that orbit the Sun, mostly found in the asteroid belt between Mars and Jupiter. They vary greatly in size and shape."
                    link="#"
                />
            </div>
            <div className={styles.row}>
                <PlanetCard
                    image="https://nineplanets.org/wp-content/uploads/2019/09/asteroid-belt.png"
                    title="Asteroid Belt"
                    description="The asteroid belt is a region of the solar system located roughly between the orbits of the planets Mars and Jupiter, where the majority of the asteroids in our solar system are found."
                    link="#"
                />
            </div>
        </div>
    );
}

export default PlanetSection;
