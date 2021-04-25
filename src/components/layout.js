import { useEffect, useState } from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Menu from './menu'; 
import Logo from "./logo";
import StudioInfo from './studioInfo';
import ProjectInfo from './projectInfo';
import Header from './header';


const Layout = (props) => {

    const [data, setData] = useState(''); 
    const [about, setAbout] = useState('');
    const [projects, setProjects] = useState('');
    const [projectsAbout, setProjectsAbout] = useState('');  

    let selectedProject = null; 
    let isProjectSelected = false; 
    let headerPath = null;
    let accentColor = null;

    const dataFolder = process.env.PUBLIC_URL + '/data/'; 

    const studioDataPath = "studio.json";
    const studioMarkdownPath = "studio.md";


    useEffect(() => {

        const getPressKitData = async () => {

            const studioDataResponse = await fetch(dataFolder + studioDataPath);
            const studioData = await studioDataResponse.json();
            setData(studioData);
            console.log(studioData);
    
            const aboutText = await getPressKitMarkdown(studioMarkdownPath);
            setAbout(aboutText);
            console.log(aboutText);
            
            let projectsData = []; 
            let projectsAboutData = [];
            
            for (let i=0; i < studioData.projects.length; i++) {
                const projectFolder = "projects/" + studioData.projects[i].id + "/"; 
                const currentProjectData = await getProjectData(studioData.projects[i].data);
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
            console.log(dataFolder + dataPath); 
            const projectResponse = await fetch(dataFolder + dataPath);
            const projectData = await projectResponse.json();
    
            return projectData;
        };
    
    
        const getPressKitMarkdown = async (dataPath) => {
            const aboutResponse = await fetch(dataFolder + dataPath);
            const aboutText = await aboutResponse.text(); 
    
            return aboutText; 
        };


        getPressKitData();

    }, [setProjects]);



    if (data == '' || projects == '' || projectsAbout == '') {
        return null;
    }

    headerPath = process.env.PUBLIC_URL + '/data/' + data.header; 

    const selectProject = () => {

        selectedProject = null;

        for (let i = 0; i < data.projects.length; i++) {
            if (data.projects[i].id == props.match.params.project) {
                console.log(props.match.params.project, "matches", data.projects[i].id); 

                selectedProject = i;  
                const projectFolder = "projects/" + data.projects[i].id + "/"; 
                headerPath = process.env.PUBLIC_URL + '/data/' + projectFolder + projects[selectedProject].header;
                accentColor = projects[selectedProject].color;
                isProjectSelected = true;
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
        selectedProject = null;
        isProjectSelected = false; 
        headerPath = process.env.PUBLIC_URL + '/data/' + data.header; 
        accentColor = data.color;
    }

    console.log("Selected project", selectedProject);
    console.log(" HEADER", headerPath); 


    return (
        <div className="press-kit">
            <Header headerSource={headerPath} logoSource={data.logo} accentColor={accentColor} />
            <Menu isProjectSelected={isProjectSelected} />
            <Container>
                <Row>
                    { isProjectSelected ?
                            <ProjectInfo data={projects[selectedProject]} about={projectsAbout[selectedProject]} />
                        : <StudioInfo data={data} about={about} /> }
                </Row>
            </Container>
        </div>
    );
}

export default Layout;
