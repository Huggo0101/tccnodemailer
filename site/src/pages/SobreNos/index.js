import './index.scss';
import questao1 from '../../assets/images/questao_1.png';
import doacao1 from '../../assets/images/doacao_1.png';
import doacao2 from '../../assets/images/donate_1.png';
import contribuir1 from '../../assets/images/contribuir_1.png'

export default function SobreNos(){
    return(
        <section className='pg_sobre'>
            <div className='fx_branca'>
                <div className='fb_textos'>
                    <h1>Quem somos?</h1>
                    <p> A CPAPN é uma organização de ajuda a pessoas necessitadas, em
que os usuários podem contribuir com nosso projetos.</p>
                </div>
                <img src={questao1} className='img_questao1' alt=""/>
            </div>

            <div className='fx_azul'>
                <img src={doacao1} className='img_doacao1' alt=""/>
                <div className='fa_textos'>
                    <h1>O que fazemos?</h1>
                    <p>Nós trabalhamos com projetos para arrecadar fundos e entregar para as pessoas por meio de trabalhos voluntários.</p>
                </div>
            </div>

            <div className='fx_branca'>
                <div className='fb_textos'>
                    <h1>Como contribuir?</h1>
                    <p> Você pode nos ajudar contribuindo nos projetos de nossa plataforma de forma prática e segura por meio de um QR-CODE.</p>
                </div>
                <img src={doacao2}  className='img_300' alt=""/>
            </div>

            <div className='fx_azul'>
                <img src={contribuir1} className='img_300' alt=""/>
                <div className='fa_textos'>
                    <h1>Amar é doar!</h1>
                    <p>A doação é uma forma de compartilhar o amor para o próximo e para si mesmo.</p>
                </div>
            </div>

            <div>
                <h1>Contribua com nossos projetos!</h1>
                <button>Doe agora</button>
            </div>

        </section>
    )
}