import Navbar from '../re-usable/navbar/Navbar';

const Home = () => {
    return (
        <div>
            <section>
                <Navbar />
            </section>
            <section>
                <div>
                    <h1>Home Page</h1>
                    <h2>React Components</h2>
                    <p>
                        This page displays react component ready for
                        implementation on any website, easily{' '}
                        <span>configurable</span>, and highly stable.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
