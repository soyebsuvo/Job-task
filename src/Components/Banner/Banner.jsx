import banner from '../../assets/banner.jpg'
export default function Banner() {
    return (
        <div className='z-20'>
            <div className="hero h-[500px]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="md:px-16 md:pr-56">
                        <h1 className="mb-5 text-5xl font-bold">Task Mastery Awaits. <br className='hidden md:block'/> Start Today.</h1>
                        <p className="mb-5">Empower your workflow with our cutting-edge task management platform. Seamlessly organize, prioritize, and conquer your daily tasks. Experience efficiency like never before. Elevate your productivity journey today!</p>
                        <button className="px-5 py-2 font-bold border border-white hover:shadow-lg hover:shadow-white duration-200">Let&apos;s Explore</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
