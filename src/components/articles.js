

const Articles = (props) => {

    let articles = props.articles.map((article, index) =>
        <p>{article.title}</p>
    );

    return (
        <div id="articles">
            <h3>Articles</h3>
            {articles}
        </div>
    );
};


export default Articles;