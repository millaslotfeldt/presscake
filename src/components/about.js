
import marked from 'marked';


const About = (props) => {

    const renderer = new marked.Renderer(); 
    const contentMarkdown = marked(props.content, {sanitize: true}); 

    return (
        <div className="content" id="about">
            <div className="text-light" dangerouslySetInnerHTML={
                {
                    __html: marked(contentMarkdown, { renderer: renderer })
                }
            } />
        </div>
    );
};


export default About;


