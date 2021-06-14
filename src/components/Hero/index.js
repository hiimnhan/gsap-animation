import React, { useRef, useEffect } from "react";

import gsap from "gsap";

import arrow from "../../images/arrow.svg";
import allOfUs from "../../images/all.PNG";
import holdHand from "../../images/hold_hand.jpg";

import "./style.scss";
const Hero = () => {
    let hero = useRef(null);
    let images = useRef(null);
    let content = useRef(null);

    let tl = gsap.timeline();

    useEffect(() => {
        // images vars
        const holdHandImage = images.firstElementChild;
        const allOfUsImage = images.lastElementChild;

        // content vars
        const headlineFirst = content.children[0].children[0];
        const headlineSecond = headlineFirst.nextSibling;
        const headlineThird = headlineSecond.nextSibling;
        const contentP = content.children[1];
        const contentButton = content.children[2];

        gsap.to(hero, 0, { css: { visibility: "visible" } });

        // images animation
        tl.from(holdHandImage, { duration: 1.2, y: 1280, ease: "power3.out" })
            .from(
                holdHandImage.firstElementChild,
                { duration: 2, scale: 1.6, ease: "power3.out" },
                0.2
            )
            .from(
                allOfUsImage,
                { duration: 1.4, y: 1280, ease: "power3.out" },
                0.2
            )
            .from(
                allOfUsImage.firstElementChild,
                { duration: 2, scale: 1.6, ease: "power3.out" },
                0.2
            );

        // content animation
        tl.from(
            [
                headlineFirst.children,
                headlineSecond.children,
                headlineThird.children,
            ],
            {
                stagger: {
                    each: 0.2,
                    y: 44,
                    ease: "power3.out",
                    delay: ".8",
                },
            },
            0.15
        )
            .from(
                contentP,
                { duration: 1, y: 20, opacity: 0, ease: "power3.out" },
                1.4
            )
            .from(
                contentButton,
                { duration: 1, y: 20, opacity: 0, ease: "power3.out" },
                1.6
            );
    }, [tl]);
    return (
        <div className='hero'>
            <div className='container'>
                <div className='hero-inner' ref={(el) => (hero = el)}>
                    <div className='hero-content'>
                        <div
                            className='hero-content-inner'
                            ref={(el) => (content = el)}
                        >
                            <h1>
                                <div className='hero-content-line'>
                                    <div className='hero-content-line-inner'>
                                        Thích mấy lời em nói
                                    </div>
                                </div>
                                <div className='hero-content-line'>
                                    <div className='hero-content-line-inner'>
                                        trong veo
                                    </div>
                                </div>
                                <div className='hero-content-line'>
                                    <div className='hero-content-line-inner'>
                                        bên tai.
                                    </div>
                                </div>
                            </h1>
                            <p>
                                Yêu
                                <br></br>
                                anh không sợ nắng mưa
                                <br></br>
                                Giữa trưa hay là đầu ngày
                                <br></br>
                                Đưa em đi một bữa trưa
                                <br></br>Ở chỗ quen mây trên đầu bay.
                            </p>
                            <div className='btn-row'>
                                <button className='explore-button'>
                                    Explore
                                    <div className='arrow-icon'>
                                        <img src={arrow} alt='arrow' />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='hero-images'>
                        <div
                            className='hero-images-inner'
                            ref={(el) => (images = el)}
                        >
                            <div className='hero-image hold-hand'>
                                <img src={holdHand} alt='hold_hand' />
                            </div>
                            <div className='hero-image all-of-us'>
                                <img src={allOfUs} alt='allOfUs' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
