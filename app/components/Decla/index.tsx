"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";


const Cook = () => {

    return (
        <div className='relative' id="cook-section" >
            <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6">

                <div className='absolute right-0 bottom-[-6%] hidden lg:block'>
                    <Image src={'/images/Cook/foto02.png'} alt="burger-image" width={460} height={82}  style={{ borderBottomLeftRadius: '25px', borderBottomRightRadius: '25px' }}
                    />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>

                    <div className='col-span-6 flex justify-start'>
                        <Image src="/images/Cook/foooto01.jpg" alt="nothing" width={506} height={10} style={{ borderRadius: '25px' }} 
 />
                    </div>


                    <div className='col-span-6 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h2 className='text-pink text-lg font-normal mb-3 ls-51 uppercase text-start'>Feliz nosso dia meu amor</h2>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <h3 className="text-3xl lg:text-5xl font-semibold text-black text-start">
                                Você não faz ideia do quanto me faz bem
                            </h3>
                        </Fade>
                        <br/>
                        <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                            <p className='text-grey md:text-lg font-normal mb-10 text-start mt-2'>Neste Dia dos Namorados, quero aproveitar a oportunidade para te lembrar de quanto você significa para mim. Cada momento que passamos juntos é uma bênção, e sou eternamente grato por ter você ao meu lado. Seu sorriso ilumina meus dias, e seu amor preenche meu coração de uma maneira que eu nunca pensei ser possível. Amo a maneira como você me entende, mesmo quando eu não digo uma palavra. Amo o jeito que você me apoia, me encoraja e me faz querer ser uma pessoa melhor. Você é minha parceira, minha confidente e minha melhor amiga. Como eu te disse esses dias, foi com você que eu aprendi o que é o amor, companheirismo e felicidade. Prometo te amar incondicionalmente, respeitar nossos sonhos e continuar construindo memórias incríveis ao seu lado. Que possamos celebrar muitos mais Dias dos Namorados juntos, com ainda mais amor e cumplicidade</p>
                            <p className='text-grey md:text-lg font-normal mb-10 text-start mt-1'>Feliz Dia dos Namorados, meu amor. Eu te amo hoje e sempre.</p>
                        </Fade>
                    </div>



                </div>

            </div>
        </div >
    )
}

export default Cook;
