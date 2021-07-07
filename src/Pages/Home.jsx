import NavBar from '../Components/Navbar';

const Home = () => {
    return (
        <>
        <br />
        <br />
           
        <main className="container">
            
            <NavBar />
            <section className="row mt-3">
                <div className="col 12">
                    
                    <br />
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" class="img-fluid" alt="Studio Ghibli logo with Totoro character"></img>
                </div>
            </section>
        </main>
        </>
    );
}


export default Home;