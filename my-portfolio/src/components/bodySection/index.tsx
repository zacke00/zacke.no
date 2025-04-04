import thinkingMan from '../../assets/images/ThinkingMan.png';

const BodySection = () => {
    return (
        <>
        <section className="px-6 pt-20 text-center">
                <h1 className="text-3xl md:text-7xl font-extrabold mb-10">Zakaria Berglund</h1>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center px-6 pb-20 max-w-6xl mx-auto">
            <div className="text-left">
                <p className="text-lg md:text-xl leading-relaxed">
                    I'm a newly graduated developer with a deep passion for building digital experiences.
                    Over the last few years, I've worked on a variety of team-based and self-initiated projects
                    that have helped me grow both technically and creatively. In addition to my academic background,
                    I run my own small business where I create tailored websites for private clients and small businesses.
                    This portfolio showcases what I’ve built, what I’m currently working on, and what I’m most excited about.
                    I love creating clean, user-friendly web solutions — and I'm excited to bring that same energy to your team.
                </p>
            </div>
            <div className="flex justify-center">
                <img
                    src={thinkingMan}
                    alt="Photo of me"
                    className="w-64 h-84 object-cover rounded-lg"
                    />
            </div>
        </section>

        </>
    )
};

export default BodySection; 