import { useEffect, useState } from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Menu from './menu'; 
import Logo from "./logo";
import StudioInfo from './studioInfo';
import ProjectInfo from './projectInfo';


const Layout = (props) => {

    const [data, setData] = useState(''); 
    const [about, setAbout] = useState('');
    const [projects, setProjects] = useState('');
    const [projectsAbout, setProjectsAbout] = useState(''); 
    //const [selectedProject, setSelectedProject] = useState(null); 

    let selectedProject = null; 

    const studioDataPath = "studio.json";
    const studioMarkdownPath = "studio.md";



    // const getPressKitDatafromUrlParams = async (data) => {
    //     if (props.match.params.project) {
    //         for (let i = 0; i < data.projects.length; i++) {
    //             if (data.projects[i].id == props.match.params.project) {
    //                 setSelectedProject(i);
    //             }
    //         }   
    //     } 
    // }; 


    useEffect(() => {

        const getPressKitData = async () => {

            const studioDataResponse = await fetch(process.env.PUBLIC_URL + "/data/" + studioDataPath);
            const studioData = await studioDataResponse.json();
            setData(studioData);
    
            const aboutText = await getPressKitMarkdown(studioMarkdownPath);
            setAbout(aboutText);
            
            let projectsData = []; 
            let projectsAboutData = [];
            
            for (let i=0; i < studioData.projects.length; i++) {
                const projectFolder = "projects/" + studioData.projects[i].id + "/"; 
                const currentProjectData = await getProjectData(projectFolder + studioData.projects[i].data);
                console.log(studioData.projects[i].data); 
                await projectsData.push(currentProjectData);
                
                console.log(projectFolder, projectFolder + currentProjectData.about);
                const currentProjectAbout = await getPressKitMarkdown(projectFolder + currentProjectData.about);
                console.log(currentProjectAbout); 
                await projectsAboutData.push(currentProjectAbout); 
            }
            
            setProjects(projectsData); 
            setProjectsAbout(projectsAboutData);
    
            console.log("All the Studio's projects:", projectsData);
            console.log("All the Projects markdown text:", projectsAboutData);
        };
    
    
        const getProjectData = async (dataPath) => {
            const projectResponse = await fetch(process.env.PUBLIC_URL + "/data/" + dataPath);
            const projectData = await projectResponse.json();
    
            return projectData;
        };
    
    
        const getPressKitMarkdown = async (dataPath) => {
            const aboutResponse = await fetch(process.env.PUBLIC_URL + "/data/" + dataPath);
            const aboutText = await aboutResponse.text(); 
    
            return aboutText; 
        };


        getPressKitData();

    }, [setProjects]);



    if (data == '' || projects == '' || projectsAbout == '') {
        return null;
    }

    const selectProject = () => {
        for (let i = 0; i < data.projects.length; i++) {
            if (data.projects[i].id == props.match.params.project) {
                console.log(props.match.params.project, "matches", data.projects[i].id); 

                selectedProject = i;  
            }
        }
        if (selectedProject == null) {
            return null; 
        } 
    }

    if (props.match.params.project) {

        if (selectedProject == null) {
            selectProject(); 
        }

        if (selectedProject != null && props.match.params.project != data.projects[selectedProject].id) {
            selectProject(); 
        }  

    } else {
        if (selectedProject != null) {
            selectedProject = null; 
        }
    }

    console.log("Selected project", selectedProject);


    return (
        <div class="press-kit">
            <Container>
                <Row>
                    <Col sm={3}>
                        <Logo img={data.logo} />
                        <Menu isProjectSelected={selectedProject} />
                    </Col>
                    <Col sm={9}>
                        {
                            props.match.params.project ?
                                <ProjectInfo data={projects[selectedProject]} about={projectsAbout[selectedProject]} />
                            : <StudioInfo data={data} about={about} />
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Layout;
