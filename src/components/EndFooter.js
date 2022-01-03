import './EndFooter.css';

export default function EndFooter() {
    return (
        <>
            <section className='footer'>
                <div className='content container'>
                    <a className='footersec ani' href='#'>
                        A
                    </a>
                    <h3>Design, Develop & Excel.</h3>
                    <h4>Contact me:</h4>
                    <div className='links'>
                        <a href='https://github.com/Ashrafw'>
                            <i className='fab fa-github'></i>
                        </a>
                        {/* <a className='cv' href='/AshrafCV.pdf'>
                            CV
                        </a> */}
                        <a href='mailto: ashrafweheliye25@gmail.com'>
                            <i className='fas fa-envelope'></i>
                        </a>
                    </div>
                </div>
            </section>

            <footer>
                <div className='content container'>
                    <h3>www.ashrafmedia.com</h3>
                </div>
            </footer>
        </>
    );
}
