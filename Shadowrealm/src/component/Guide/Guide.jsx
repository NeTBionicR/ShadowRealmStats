import { useState } from "react";
import { Header } from "../Header/Header.jsx";
import Logo from "../../assets/logo.png";
import "../Guide/Guide.css"
import cultistGif from "../Guide/GuideAssets/Cultist.gif"; 
import bigCultistGif from "../Guide/GuideAssets/BigCultist.gif"; 
import assassinGif from "../Guide/GuideAssets/AssassinCultist.gif"; 
import bringerOfDeathGif from "../Guide/GuideAssets/BringerOfDeath.gif";
import warriorWoman from "../Guide/GuideAssets/WarriorWoman.gif";

export function Guide() {
    const [selectedEnemy, setSelectedEnemy] = useState(null);

    const enemies = [
        { 
            name: "Cultist", 
            gif: cultistGif,
            description: [
                "The Cultist hurls fireballs in your direction, but these projectiles cannot pass through walls. Use the environment to your advantage by positioning yourself behind obstacles to block their attacks.",
                "Bait the Cultist into attacking, then quickly dash out of cover to close the distance and strike. Their slow recovery time after casting a fireball leaves them vulnerable to a swift counterattack."
            ]
        },
        { 
            name: "BigCultist", 
            gif: bigCultistGif,
            description: [
                "This towering foe wields two devastating attacks: a wide-sweeping melee strike and a ground slam that creates a shockwave. Both attacks deal significant damage but have noticeable wind-up animations.",
                "Stay mobile and watch for their attack cues. Dodge-roll through their melee swing or jump over the shockwave to avoid damage. Punish them during their recovery phase with a series of quick strikes before retreating to a safe distance."
            ]
        },
        { 
            name: "Assassin", 
            gif: assassinGif,
            description: [
                "Armed with dual knives and enhanced agility, the Assassin Cultist is a relentless foe. They can close the distance quickly and unleash rapid, blight-based attacks that can overwhelm unprepared players.",
                "Keep your movements unpredictable to avoid their lunges. Use well-timed parries or blocks to interrupt their combos, then counter with a heavy attack to stagger them. Patience is key—wait for openings rather than engaging in a reckless exchange."
            ]
        }
    ];

    return (
        <div>
            <Header />
            <div className="guide-container">
                <div className="intro-section">
                    <img className="guide-logo" src={Logo} alt="Shadow Realm Logo" />
                    <p className="game-intro">
                        Welcome to the Shadow Realm, a gritty and atmospheric world where danger lurks in every shadow.
                        Take up the mantle of a relentless female warrior, armed with her blade and unwavering resolve,
                        as she confronts a malevolent cult threatening to unravel the fabric of existence.
                        With its fast-paced 2D hack-and-slash combat, meticulously crafted pixel art, 
                        and immersive world design, Shadow Realm offers a challenging and rewarding experience for seasoned players.
                        This guide is your key to mastering the game's mechanics, refining your combat skills, and uncovering the secrets hidden within the Shadow Realm.
                        Prepare to sharpen your instincts and face the darkness head-on.
                    </p>
                </div>

                <div className="guide-box boss-section">
                    <h2>Hero's Guide</h2>
                    <div className="hero-content">
                        <img 
                            src={warriorWoman}
                            alt="Warrior Woman"
                            className="boss-gif"
                        />
                        <p className="game-intro">The female warrior of the Shadow Realm is a force to be reckoned with, wielding her blade with precision and agility. To survive the cult’s onslaught, you’ll need to master her versatile moveset and adapt to the chaos of battle. Balance aggression with caution—while the sword slashes are excellent for dealing consistent damage, overcommitting can leave you vulnerable. Use the dash-slash to create breathing room or finish off weakened enemies, but remember it has a cooldown, so time it wisely. Mastering the timing of your crouch invincibility is crucial; it’s a lifesaver against fast or hard-hitting attacks, particularly from foes like the Assassin Cultist. Combine these techniques to stay mobile, unpredictable, and in control of the battlefield.</p>
                    </div>
                </div>

                <div className="guide-box enemies-section">
                    <h2>Enemies Guide</h2>
                    <div className="enemy-buttons">
                        {enemies.map((enemy) => (
                            <button
                                key={enemy.name}
                                className={`enemy-button ${selectedEnemy === enemy.name ? 'active' : ''}`}
                                onClick={() => setSelectedEnemy(enemy.name)}
                            >
                                {enemy.name}
                            </button>
                        ))}
                    </div>
                    <div className="enemy-display">
                        {selectedEnemy && (
                            <div className="enemy-content">
                                <img 
                                    src={enemies.find(e => e.name === selectedEnemy).gif}
                                    alt={`${selectedEnemy} animation`}
                                    className="enemy-gif"
                                />
                                <div className="enemy-description">
                                    {enemies.find(e => e.name === selectedEnemy).description.map((paragraph, index) => (
                                        <p key={index} className="game-intro">{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="guide-box boss-section">
                    <h2>Bringer Of Death Guide</h2>
                    <div className="hero-content">
                        <img 
                            src={bringerOfDeathGif}
                            alt="Bringer of Death"
                            className="boss-gif"
                        />
                        <p className="game-intro">The Bringer of Death is the formidable leader of the cult, a towering and menacing foe who commands the battlefield with devastating attacks. His presence is a true test of your skill and mastery of the warrior’s abilities. Patience is key when facing the Bringer of Death. Bait out his attacks, avoid his slashes with well-timed dodges or jumps, and use your dash-slash to escape his AoE onslaught. Chip away at his health with calculated sword slashes, and don’t get greedy—overextending will leave you vulnerable to his devastating counterattacks.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}