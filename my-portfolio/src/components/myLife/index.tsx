import ZackeAndElea from '../../assets/images/Zacke&Elea.jpg';
import Family from "../../assets/images/family.jpg";
import zackeAndEleaOutside from "../../assets/images/zacke&eleaOutside.jpg"

const Mylife = () => {

    return (
        <section className="w-screen flex items-center justify-center px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl items-center">
                    {/* Left image */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={ZackeAndElea}
                            alt="Zakaria and Elea"
                            className="w-130 h-auto rounded-lg"
                        />
                    </div>

                    {/* Center image with text above */}
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-extrabold mb-5">This is my life</h2>
                        <p className="text-lg mb-8">
                            I live in Fjellhamar with my soon-to-be wife and our daughter. I've been extremely lucky to have found a family that I love this much.
                            I'm a calm and caring person who values honesty, community, and positivity. I strive to be a positive force in the world around me,
                            and I believe in helping others wherever I can. I don't care much for drama — I have a 3-year-old, and that's enough drama for me!
                            I love to grow, to win, and to bring fairness and integrity into everything I do. My family is everything to me, and if I can make them happy,
                            then I'm happy.
                        </p>
                        <img
                            src={Family}
                            alt="Family"
                            className="w-90 h-auto rounded-lg mx-auto"
                        />
                    </div>

                    {/* Right image */}
                    <div className="flex justify-center md:justify-start">
                        <img
                            src={zackeAndEleaOutside}
                            alt="Right"
                            className="w-130 h-auto rounded-lg"
                        />
                    </div>
                </div>
            </section>
    )
}

export default Mylife;