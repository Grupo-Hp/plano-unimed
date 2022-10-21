import { ImMobile } from "react-icons/im";
import { FaRegHospital } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";

function Card(props) {

    return (
        <div className="col-span-3 lg:col-span-1 px-5 border-2 border-primary rounded-xl contatoImage1 text-white py-10">
            <div className="grid grid-cols-4">
                <div className="text-7xl justify-center mb-10 col-span-1 md:col-span-4 flex items-center">{props.icon}</div>
                <div className="text-center col-span-3 md:col-span-4">
                    <h1 className="text-xl font-medium md:text-2xl uppercase mb-5">{props.title}</h1>
                    <p>{props.info}</p>
                </div>
            </div>
        </div>
    )
}

export default function Cards(props) {
    return (
        <div className="grid grid-cols-3 gap-x-10 gap-y-4 w-11/12 2xl:w-9/12 mx-auto py-10 lg:py-36">
            <Card icon={<MdAttachMoney />} title='valores dos planos de saúde rio de janeiro' info='Nossa equipe fornece a tabela de preços em minutos para você e sua empresa.' />

            <Card icon={<FaRegHospital />} title='redes credenciadas' info='Venha conhecer a rede credenciada da sua região.' />

            <Card icon={<ImMobile />} title='suporte 24 horas e atendimento rápido' info='Nós reduzimos o valor do seu plano de saúde.' />

        </div>
    )
}