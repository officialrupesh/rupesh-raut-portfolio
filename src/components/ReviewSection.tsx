import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollAnimation from "react-animate-on-scroll";
import { MainSectionStyled, ReviewSectionWrapper } from "../styled-components/common.styled";
import { ReviewData } from "../assets/icons/SkillIcon";

const ReviewSection = () => {



    const settings = {
        adaptiveHeight: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 800,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: true,
        appendDots: (dots: any) => (
            <div style={{
                borderRadius: "10px",
                padding: "10px"
            }}>
                <ul className="custom-dots d-flex justify-content-center"> {dots} </ul>

            </div>
        ),
        customPaging: () => (
            <div>
            </div>
        )
    };

    return (
        <>
            <ReviewSectionWrapper>

                <div className="container">
                    <ScrollAnimation animateIn="fadeInUp" duration={2} delay={0} className="section-header text-center smooth-animate" style={{ marginBottom: "0" }}>
                        <MainSectionStyled>
                            <div className="section-head">
                                <h2 className="section-title">Review </h2>
                                <p className="section-title-desc">What other's say about Rupesh </p>
                            </div>
                        </MainSectionStyled>
                       
                    </ScrollAnimation>
                    <Slider {...settings}>
                        {
                            ReviewData?.map((review : any, index : any) => {
                                return (
                                    <>
                                        <div key={index} className="review-box-wrapper d-flex justify-content-center">
                                            <ScrollAnimation animateIn="fadeIn" duration={2} className=" smooth-animate review-box d-flex align-items-center">

                                                <ScrollAnimation animateIn="fadeIn" duration={2} delay={100} className="reviewer-img smooth-animate">
                                                    <img src={review?.reviewerImg || review?.placeholderImg} alt="reviewer image" style={{ height:"190px",width:"160px" }} height={190} width={160} />
                                                </ScrollAnimation>
                                                <div className="reviewer-details">
                                                    <h4 className="fw-bold">
                                                        {review?.reviewerName}
                                                    </h4>
                                                    <h5 className="fw-normal d-flex flex-wrap align-items-center" style={{ color: "#B9C8F3", gap: "16px" }}> <em>{review?.reviewerRelation}</em></h5>
                                                    <p className="fw-medium" style={{ color: "#B9C8F3", fontSize: "16px" }} >{review?.reviewersReview}</p>


                                                </div>

                                            </ScrollAnimation>
                                        </div>
                                    </>
                                )
                            })
                        }






                    </Slider>
                </div>
            </ReviewSectionWrapper>

        </>
    );
}
export default ReviewSection