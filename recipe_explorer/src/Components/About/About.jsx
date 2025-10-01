import './About.css';

function About({ title = 'About Recipe Explorer', children }) {
    return (
        <section className="about">
            <div className="about__inner">
                <div className="about__text">
                    <h2 className="about__title">{title}</h2>
                    <p className="about__description">
                        {children || 'Recipe Explorer is a web application that allows users to search for and explore a wide variety of recipes.'}
                    </p>
                </div>
                <div className="about__image">
                    <img src="https://via.placeholder.com/240x160" alt="Cooking" />
                </div>
            </div>
        </section>
    );
}

export default About;