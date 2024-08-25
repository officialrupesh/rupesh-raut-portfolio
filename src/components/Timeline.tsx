import { Timeline } from 'antd';


const TimelineSection = () => {
    return (
        <>
            <div className="section-head">
                <h2 className="section-title">Experience</h2>
                <p className="section-title-desc">Journey of my Professional Experience</p>
            </div>
            <div className="section-body">
                <Timeline
                    mode={'left'}
                    items={[
                        {
                            label: 'January 2023 - April 2023',
                            color: "#06529e",
                            children: (
                                <><strong>Software Engineer Intern</strong> <p>Amnil Technologies Pvt. Ltd.</p>
                                    <p><em>- Gained hands-on experience with CSS-in-JS and traditional CSS techniques to create responsive web designs. </em></p>
                                    <p><em>- Developed and implemented mock API connections to simulate and test real-world data interactions. </em></p>

                                     </>),
                        },
                        {
                            label: 'April 2023 - June 2024',
                            color: "#06529e",
                            children: (<><strong>Associate Frontend Developer</strong> <p>Amnil Technologies Pvt. Ltd.</p>
                            
                                <p><em>- Developed reusable UI components, reducing redundancy and enhancing maintainability. </em></p>
                                <p><em>- Implemented robust styling using CSS-in-JS and traditional CSS for responsive designs. </em></p>
                                <p><em>- Optimized performance through code refactoring and efficient state management. </em></p>
                              </>),
                        },
                        {
                            label: 'June 2024 - Present',
                            color: "#06529e",
                            children: (<><strong>Freelance Software Engineer</strong>
                                <p><em>- UI Development</em></p>
                                <p><em>- Frontend Development</em></p>
                                <p><em>- Backend Development (Learning in progress)</em></p>
                            </>),
                        },

                    ]}
                />

            </div>
        </>
    )
}
export default TimelineSection