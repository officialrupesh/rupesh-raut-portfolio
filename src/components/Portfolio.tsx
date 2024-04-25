import { HeroSectionStyled, MainSectionStyled, WorkSectionStyled } from "../styled-components/common.styled"
import { useTypewriter } from 'react-simple-typewriter'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Button, Carousel } from "antd";
import { PreviousProject, skillsIcon } from "../assets/icons/SkillIcon";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./HorizontalScroll";
import { LuExternalLink } from "react-icons/lu";



const skills = [
    {
        skillTitle: 'Html',
        skillPercent: 90,
    },
    {
        skillTitle: 'CSS',
        skillPercent: 85,
    },
    {
        skillTitle: 'JavaScript',
        skillPercent: 75,
    },
    {
        skillTitle: 'React.js',
        skillPercent: 70,
    },
    {
        skillTitle: 'Git',
        skillPercent: 60,
    },
    {
        skillTitle: 'Bootstrap',
        skillPercent: 90,
    },
    {
        skillTitle: 'TailwindCSS',
        skillPercent: 75,
    },
    {
        skillTitle: 'Material UI',
        skillPercent: 85,
    },

    {
        skillTitle: 'Ant Design',
        skillPercent: 85,
    },

    {
        skillTitle: 'Figma',
        skillPercent: 60,
    },
    {
        skillTitle: 'Photoshop',
        skillPercent: 85,
    },
    {
        skillTitle: 'Postman',
        skillPercent: 50,
    },

]


const Portfolio = () => {
    const [text] = useTypewriter({
        words: ["Tech Enthusiast", "Frontend Developer", "UI/UX Engineer", "Engineering Graduate"],
        loop: false,
    })
    const settings = {
        adaptiveHeight: true,
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: true,
        // prevArrow: <GrPrevious />,
        // nextArrow: <GrNext />,
        // beforeChange: (current: number, next: number) => {
        //     setActiveIndex(next);
        //     triggerAnimation();
        // },
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 428,
                settings: {
                    slidesToShow: 3,
                },
            },

        ]

    };


    return (
        <>
            <HeroSectionStyled id="hero" className="hero-section">
                <div className="container content">
                    <h1>Rupesh Raut</h1>
                    <p className="description">I am <span className="typewriter">{text}</span></p>
                    <div className="social-links">
                        <a href="" className="social-link" >
                            <FaLinkedinIn />
                        </a>
                        <a href="" className="social-link">
                            <FaGithub />
                        </a>
                        <a href="" className="social-link">
                            <IoMail />

                        </a>

                    </div>

                </div>

            </HeroSectionStyled>
            <MainSectionStyled className="main-section">
                <div className="container">
                    <section id="about-me" className="section-wrapper">
                        <div className="section-head">
                            <h2 className="section-title">About</h2>
                        </div>
                        <div className="section-body">
                            <h4 className="position">Frontend Developer | UI/UX Developer</h4>
                            <p className="section-body-content">
                                {/* Rupesh Raut is a diligent and innovative UI/UX Developer with over a year of
                                experience and dedicated to crafting engaging user-centric
                                interfaces. Committed to staying updated with industry trends to
                                continually enhance skills and deliver high-quality solutions. */}
                                Rupesh Raut is a diligent and innovative UI/UX Developer with over a year of experience,
                                specializing in crafting engaging user-centric interfaces.
                                He is proficient in frontend technologies such as HTML, CSS, JavaScript, and React,
                                allowing him to seamlessly integrate with backend systems. Rupesh is committed to staying
                                updated with industry trends and emerging technologies, ensuring that his skills are always
                                at the forefront.
                                With a keen eye for detail and a passion for creating seamless user experiences,
                                Rupesh continually innovates and pushes the boundaries of UI development to deliver exceptional frontend solutions.
                                {/* Dedicated to delivering high-quality solutions, he consistently exceeds
                                client expectations.  */}







                            </p>

                        </div>

                    </section>
                    <section id="skills" className="section-wrapper">
                        <div className="section-head">
                            <h2 className="section-title">skills</h2>
                            <p className="section-title-desc">These are the tools and technologies I have worked with</p>
                        </div>
                        <div className="section-body">
                            <div className="rupesh">
                                <Carousel  {...settings}>
                                    {skillsIcon.map((item, index) => {
                                        return (
                                            <>
                                                <div className="skill-icon" key={index} style={{ height: "70px", width: "70px", padding: "4px" }}>
                                                    <img src={item.skillName} alt={item?.title} title={item?.title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                                </div>
                                            </>
                                        )
                                    })}

                                </Carousel>
                            </div>
                            <div className="section-body-content">
                                <div className="row">
                                    {
                                        skills.map((item: any, index: number) => {
                                            return (
                                                <div key={index} className="col-12 col-lg-6">
                                                    <div className="progress-bar-wrap">
                                                        <div className="progress-skill-name">
                                                            <span>{item.skillTitle}</span><span className="progress-skill-percent">{item.skillPercent}%</span>
                                                        </div>
                                                        <div className="progress-bar">
                                                            <div className="progress-bar-status" style={{ width: `${item.skillPercent}%` }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }


                                </div>

                            </div>

                        </div>

                    </section>
                    <section id="projects-worked" className="section-wrapper">
                        <WorkSectionStyled>
                            <div className="section-head">
                                <h2 className="section-title">Previous Works</h2>
                                <p className="section-title-desc">These are the projects I've recently worked on</p>
                            </div>
                            <div className="previous-work-section-body">
                                <ScrollMenu
                                    LeftArrow={LeftArrow}
                                    RightArrow={RightArrow}
                                    transitionBehavior="smooth"
                                    transitionDuration={1500}
                                    scrollContainerClassName="project-card-scroll">
                                    {
                                        PreviousProject?.map((item, index) => {
                                            return (
                                                <div key={item?.id} className="project-card-wrapper">
                                                    <div className="project-img" key="key">
                                                        <img src={item?.projectCoverImg} alt={`${item?.projectName} | ${item?.projectCategory}`}/>
                                                        <div className="project-card-overlay"></div>
                                                        <div className="project-card-content">
                                                            <h6 className="project-title">{item?.projectName}</h6>
                                                            <p className="project-category">{item?.projectCategory}</p>
                                                            {item?.externalLink &&
                                                            <a href={item?.externalLink} target="_blank"> <Button type="link" style={{ color: "#ffffff" }}><LuExternalLink /></Button>
                                                            </a>
                                                            }

                                                        </div>
                                                    </div>

                                                </div>

                                            )
                                        })
                                    }



                                </ScrollMenu>

                            </div>

                        </WorkSectionStyled>

                    </section>

                </div>

            </MainSectionStyled>
        </>
    )
}
export default Portfolio