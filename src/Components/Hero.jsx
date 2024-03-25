
const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse lg:mx-14 lg:p-12">
                    <img src={'image-1.png'}className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="lg:text-5xl text-2xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                        <p className="py-6">Welcome to Book Vive, your portal to the world of Vive literature. Explore captivating narratives, thought-provoking philosophies, and join a vibrant community of like-minded readers. Start your journey today and discover the transformative power of Vive literature.</p>
                        <button className="btn">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;