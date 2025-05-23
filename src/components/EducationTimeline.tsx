import { Timeline } from 'antd';


const EducationTimeline = () => {
    return (
        <>
            <div className="section-head">
                <h2 className="section-title">Educational History</h2>
                <p className="section-title-desc">Journey of my Educational History</p>
            </div>
            <div className="section-body">
                <Timeline
                    mode={'left'}
                    items={[
                        {
                            label: 'April 2025 - Ongoing',
                            color: "#06529e",
                            children: (<><strong>Master of Research in Computer and System Engineering</strong>
                                <p>Ilmenau, Germany</p>
                            
                                {/* <p><em> <span style={{ fontWeight: "500" }}>74.17%</span> </em></p> */}
                                {/* <p><em>- Participated in mass communication workshop</em></p>
                                <p><em>- Participated in Locus 2020 while showcasting the minor project created during fourth semester named as <span className='fw-500'>Earthquake Instance Information</span></em></p>
                                <p><em>- Successfully hosted the <span className="fw-500">Aarohan 1.0 EEC Expo</span> at the college as one of the core member of <span className='fw-500'>IT Club EEC</span>.  </em></p> */}

                            </>),
                        },
                        {
                            label: 'Nov 2017 - Mar 2023',
                            color: "#06529e",
                            children: (<><strong>Bachelor Of Engineering in Information Technology</strong>
                                <p><em> <span style={{ fontWeight: "500" }}>74.17%</span> </em></p>
                                <p><em>- Participated in mass communication workshop</em></p>
                                <p><em>- Participated in Locus 2020 while showcasting the minor project created during fourth semester named as <span className='fw-500'>Earthquake Instance Information</span></em></p>
                                <p><em>- Successfully hosted the <span className="fw-500">Aarohan 1.0 EEC Expo</span> at the college as one of the core member of <span className='fw-500'>IT Club EEC</span>.  </em></p>

                            </>),
                        },
                        {
                            label: 'July 2015 - Sep 2017',
                            color: "#06529e",
                            children: (<><strong>Higher Secondary Schooling</strong> <p>Global Educational Academy, Damak, Jhapa</p>
                                <p><em> <span style={{ fontWeight: "500" }}>67% [NEB]</span> </em></p>
                                <p><em>- Developed reusable UI components, reducing redundancy and enhancing maintainability. </em></p>
                                <p><em>- Implemented robust styling using CSS-in-JS and traditional CSS for responsive designs. </em></p>
                                <p><em>- Optimized performance through code refactoring and efficient state management. </em></p>
                            </>),
                        },
                        {
                            label: 'January 2003 - June 2015',
                            color: "#06529e",
                            children: (
                                <><strong>Primary Schooling</strong> <p>Eminent Kanchanjungha English Boarding School, Gauradaha-07, Jhapa</p>
                                    <p><em><span style={{ fontWeight:"500" }}>78.75% [SLC]</span> </em></p>
                                    <p><em>- Vice Captain of the assembly </em></p>
                                    <p><em>- Actively involved in Junior Red Cross Society. </em></p>
                                    <p><em>- Actively involved in different sports such as Volleyball, cricket while leading the senior cricket team of School as the captain. </em></p>

                                </>),
                        },
                       
                       

                    ]}
                />

            </div>
        </>
    )
}
export default EducationTimeline;