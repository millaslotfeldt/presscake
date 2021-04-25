import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

const Articles = (props) => {

    
    if (props.articles == null) {
        return null; 
    }

    let articles = props.articles.map((article, index) =>
        <div className="article">
            <p className="title text-light">
                <FontAwesomeIcon icon={faNewspaper} /> &nbsp;
                {article.title}
            </p>
            <p className="author text-light">{article.author}, &nbsp;
                <a href={article.url}>{article.outlet}</a>
            </p>
        </div>
    );

    return (
        <div id="articles">
            <h2 className="text-light">Articles</h2>
            <hr></hr>

            <div className="articles-list text-light">
                {articles}
            </div>
        </div>
    );
};


export default Articles;