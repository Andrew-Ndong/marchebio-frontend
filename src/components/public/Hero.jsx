import legume from '@/assets/legume.png'
import champ from '@/assets/champ_mais.png'

const Hero = () => {
    return (
        <div className="bg-primary/50 "
            style={{
                backgroundImage: `url(${champ})`,
            }}
        >
            <div className='hero bg-primary/85'>
                <div className="hero-content w-full justify-between lg:flex-row-reverse">
                    <img
                        src={legume}
                        className="max-w-sm rounded-4xl shadow-2xl"
                    />
                    <div>
                        <h1 className="text-4xl font-bold text-white">Decouvrir une agriculture moderne <br/>et durable</h1>
                        <p className="py-6 text-white">
                            MarchéBio, une plateforme qui met en avant les producteurs et leurs clients <br/>sécursé et durable
                        </p>
                        <button className="btn bg-white text-primary">voir plus</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Hero