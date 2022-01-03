import React from 'react';
import './Projects.css';

export default function Projects() {
    return (
        <div id='projects' className='projects'>
            <div className='container'>
                <div className='proj-head'>
                    <h2>Projects</h2>
                </div>
                <div className='proj-items-all squares'>
                    {/* ================================== */}
                    {/* ================================== */}
                    {/* ================================== */}
                    <div className='proj-item'>
                        <div className='image-stack'>
                            <div className='proj-image'>
                                <img
                                    className='web'
                                    src='/img/ProjWeb/projWebMovieFlix.jpg'
                                    alt=''
                                    srcSet=''
                                />

                                <img
                                    className='ipad'
                                    src='/img/ProjIpad/projPadMovie.jpg'
                                    alt=''
                                    srcSet=''
                                />
                                <img
                                    className='mobile'
                                    src='/img/ProjMobile/projMobMovie.jpg'
                                    alt=''
                                    srcSet=''
                                />
                            </div>
                        </div>
                        <div className='proj-details'>
                            <h2>I. MovieFlix</h2>
                            <p>
                                Interactive website build with
                                <span> React js</span>, that is uses an external API to
                                retrieve information on the latest movies. It has a wide
                                range of movie genres to explore. Users can discover movie
                                ratings, release dates, descriptions and many more
                                details. Furthermore, users can search keywords to find
                                relevant movies.
                            </p>
                            <div className='stack-links'>
                                <div className='proj-stacks'>
                                    <button disabled='disabled'>
                                        <h6>Stack:</h6>
                                    </button>
                                    <button disabled='disabled'>
                                        <i className='fab fa-html5'></i>
                                    </button>
                                    <button disabled='disabled'>
                                        <i className='fab fa-css3-alt'></i>
                                    </button>
                                    <button disabled='disabled'>
                                        <i className='fab fa-react'></i>
                                    </button>
                                </div>
                                <div className='proj-link-items'>
                                    <a href='https://ashrafw.github.io/movie/'>
                                        Visit site
                                    </a>

                                    <a href='https://github.com/Ashrafw/movie'>
                                        Github <i className='fab fa-github'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ================================== */}
                    {/* ================================== */}
                    {/* ================================== */}
                    <div className='proj-item'>
                        <div className='image-stack'>
                            <div className='proj-image'>
                                <img
                                    className='web'
                                    src='/img/ProjWeb/projWebPeal.jpg'
                                    alt=''
                                    srcSet=''
                                />
                                <img
                                    className='ipad'
                                    src='/img/ProjIpad/projPadReal.jpg'
                                    alt=''
                                    srcSet=''
                                />
                                <img
                                    className='mobile'
                                    src='/img/ProjMobile/projMobReal.jpg'
                                    alt=''
                                    srcSet=''
                                />
                                <div className='overlay'></div>
                            </div>
                        </div>
                        <div className='proj-details'>
                            <h2>II. 1London Real Estate</h2>
                            <p>
                                A real state business website, with a responsive design
                                that is both simplistic and functional. Despite the static
                                nature of the site, it shows an eye for detail, design and
                                a user friendly format.
                            </p>
                            <div className='stack-links'>
                                <div className='proj-stacks'>
                                    <button disabled='disabled'>
                                        <h6>Stack:</h6>
                                    </button>
                                    <button disabled='disabled'>
                                        <i className='fab fa-html5'></i>
                                    </button>
                                    <button disabled='disabled'>
                                        <i className='fab fa-css3-alt'></i>
                                    </button>
                                    <button disabled='disabled'>
                                        <i className='fab fa-js-square'></i>
                                    </button>
                                </div>
                                <div className='proj-link-items'>
                                    <a href='https://ashrafw.github.io/1LondonRealEstates/'>
                                        Visit site
                                    </a>

                                    <a href='https://github.com/Ashrafw/1LondonRealEstates'>
                                        Github <i className='fab fa-github'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ================================== */}
                    {/* ================================== */}
                    {/* ================================== */}
                    <div className='proj-item'>
                        <div className='image-stack'>
                            <div className='proj-image'>
                                <div className='proj-image'>
                                    <img
                                        className='web'
                                        src='/img/ProjWeb/projWebNews.jpg'
                                        alt=''
                                        srcSet=''
                                    />
                                    <img
                                        className='ipad'
                                        src='/img/ProjIpad/projPadNews.jpg'
                                        alt=''
                                        srcSet=''
                                    />
                                    <img
                                        className='mobile'
                                        src='/img/ProjMobile/projMobNews.jpg'
                                        alt=''
                                        srcSet=''
                                    />
                                    <div className='overlay'></div>
                                </div>
                            </div>
                        </div>
                        <div className='proj-details'>
                            <h2>III. The News Cast</h2>
                            <p>
                                A fully responsive static news website that also uses a
                                weather API. The design was inspired by "The New York
                                Times", with key features such as breaking news, blogs and
                                opinion pieces.
                            </p>
                            <div className='stack-links'>
                                <div className='proj-stacks'>
                                    <button disabled='disabled'>
                                        <h6>Stack:</h6>
                                    </button>
                                    <button disabled='disabled'>
                                        <i className='fab fa-html5'></i>
                                    </button>
                                    <button disabled='disabled'>
                                        <i className='fab fa-sass'></i>
                                    </button>
                                    <button disabled='disabled'>
                                        <i className='fab fa-js-square'></i>
                                    </button>
                                </div>
                                <div className='proj-link-items'>
                                    <a href='http://ashrafw.github.io/TheNewsCast/'>
                                        Visit site
                                    </a>

                                    <a href='https://github.com/Ashrafw/TheNewsCast'>
                                        Github <i className='fab fa-github'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ================================== */}
                    {/* ================================== */}
                    {/* ================================== */}
                    <div className='proj-item'>
                        <div className='image-stack'>
                            <div className='proj-image'>
                                <img
                                    className='web'
                                    src='/img/ProjWeb/projWebGYM.jpg'
                                    alt=''
                                    srcSet=''
                                />
                                <img
                                    className='ipad'
                                    src='/img/ProjIpad/projPadGYM.jpg'
                                    alt=''
                                    srcSet=''
                                />
                                <img
                                    className='mobile'
                                    src='/img/ProjMobile/projMobGYM.jpg'
                                    alt=''
                                    srcSet=''
                                />
                                <div className='overlay'></div>
                            </div>
                        </div>
                        <div className='proj-details'>
                            <h2>IV. GYMNation</h2>
                            <p>
                                Fully responsive website for a makeshift gym. Including
                                features and sections such as advertising membership
                                plans, workout classNamees and taster sessions.
                            </p>
                            <div className='stack-links'>
                                <div className='proj-stacks'>
                                    <button disabled='disabled'>
                                        <h6>Stack:</h6>
                                    </button>
                                    <button disabled='disabled'>
                                        <i className='fab fa-html5'></i>
                                    </button>
                                    {/* <button disabled='disabled'>
                                        <i className='fab fa-css3-alt'></i>
                                    </button> */}
                                    <button disabled='disabled'>
                                        <i className='fab fa-sass'></i>
                                    </button>
                                    <button disabled='disabled'>
                                        <i className='fab fa-js-square'></i>
                                    </button>
                                </div>
                                <div className='proj-link-items'>
                                    <a href='https://ashrafw.github.io/MovieFlix/'>
                                        Visit site
                                    </a>

                                    <a href='https://github.com/Ashrafw/MovieFlix'>
                                        Github <i className='fab fa-github'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ================================== */}
                    {/* ================================== */}
                    {/* ================================== */}
                    <div className='proj-item'>
                        <div className='image-stack'>
                            <div className='proj-image'>
                                <img
                                    className='web'
                                    src='/img/ProjWeb/projWebRes.jpg'
                                    alt=''
                                    srcSet=''
                                />
                                <img
                                    className='ipad'
                                    src='/img/ProjIpad/projPadRes.jpg'
                                    alt=''
                                    srcSet=''
                                />
                                <img
                                    className='mobile'
                                    src='/img/ProjMobile/projMobRes.jpg'
                                    alt=''
                                    srcSet=''
                                />
                            </div>
                        </div>
                        <div className='proj-details'>
                            <h2>V. The Umbrella Restaurant</h2>
                            <p>
                                A Fully responsive website for a high-end luxury
                                restaurant. Including key features highlighting meals,
                                reservations and social media links.
                            </p>
                            <div className='stack-links'>
                                <div className='proj-stacks'>
                                    <button disabled='disabled'>
                                        <h6>Stack:</h6>
                                    </button>
                                    <button disabled='disabled'>
                                        <i className='fab fa-html5'></i>
                                    </button>
                                    {/* <button disabled='disabled'>
                                        <i className='fab fa-css3-alt'></i>
                                    </button> */}
                                    <button disabled='disabled'>
                                        <i className='fab fa-sass'></i>
                                    </button>
                                    <button disabled='disabled'>
                                        <i className='fab fa-js-square'></i>
                                    </button>
                                </div>
                                <div className='proj-link-items'>
                                    <a href='https://ashrafw.github.io/The-Umbrella-Restaurant/'>
                                        Visit site
                                    </a>

                                    <a href='https://github.com/Ashrafw/The-Umbrella-Restaurant'>
                                        Github <i className='fab fa-github'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ================================== */}
                    {/* ================================== */}
                    {/* ================================== */}
                    <div className='proj-item'>
                        <div className='image-stack'>
                            <div className='proj-image'>
                                <img
                                    className='web'
                                    src='/img/ProjWeb/projWebShop.jpg'
                                    alt=''
                                    srcSet=''
                                    href='https://ashrafw.github.io/ShoppingList/'
                                />
                                <img
                                    className='ipad'
                                    src='/img/ProjIpad/projPadShop.jpg'
                                    alt=''
                                    srcSet=''
                                />
                                <img
                                    className='mobile'
                                    src='/img/ProjMobile/projMobShop.jpg'
                                    alt=''
                                    srcSet=''
                                />
                            </div>
                        </div>
                        <div className='proj-details'>
                            <h2>VI. The Shopping List</h2>
                            <p>
                                A web application developed for users to generate a
                                shopping list and check off during purchases. This web app
                                is inspired by the general to-do list projects that are
                                taught to junior developers.
                            </p>
                            <div className='stack-links'>
                                <div className='proj-stacks'>
                                    <button disabled='disabled'>
                                        <h6>Stack:</h6>
                                    </button>
                                    <button disabled='disabled'>
                                        <i className='fab fa-html5'></i>
                                    </button>
                                    <button disabled='disabled'>
                                        <i className='fab fa-css3-alt'></i>
                                    </button>
                                    <button disabled='disabled'>
                                        <i className='fab fa-js-square'></i>
                                    </button>
                                </div>
                                <div className='proj-link-items'>
                                    <a href='https://ashrafw.github.io/ShoppingList/'>
                                        Visit site
                                    </a>
                                    <a href='https://github.com/Ashrafw/ShoppingList'>
                                        Github <i className='fab fa-github'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
