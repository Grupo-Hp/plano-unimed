import Image from "next/image";
import { Link } from "react-scroll";

export default function Info1() {
    return (
        <div className="bg-gray-50">
            <div className="grid grid-cols-2 gap-x-4">
                <div className="col-span-2 lg:col-span-1 contatoImage3 bg-right"></div>
                <div className="col-span-2 lg:col-span-1 w-3/4 mx-auto text-center py-16">

                    <p className="uppercase border-b-4 pb-2 text-lg border-primary-10 text-center lg:text-left">simulador de planos Unimed Rio</p>
                    <h1 className="text-3xl mt-10 font-light lg:text-left">Planos a partir de</h1>

                    <div className="text-primary-10 font-bold text-center">
                        <span className="text-3xl">R$</span><span className="text-9xl sm:text-super">191</span>
                        <span className="relative bottom-16 sm:bottom-28 text-3xl">,81</span>
                    </div>

                    <p className="text-3xl font-light lg:text-end mb-5 lg:pr-3">Economize até 40% </p>
                    <p className="text-center text-gray-600 text-xl">Valores para o plano de saúde na linha empresarial Unimed.</p>
                    <p className="text-center text-gray-600 text-xl">*De 0 à 18 Anos para o Rio de Janeiro</p>

                    <div className="mt-10">
                        <Link

                            to="contato"
                            smooth={true}
                            offset={50}
                            duration={1000}
                            className="px-10 cursor-pointer py-3 font-medium text-md border-2 bg-primary-10 hover:bg-white border-primary-10 text-white hover:text-primary-10 rounded-xl uppercase transition duration-300 ease-in-out">preço rápido
                        </Link>
                    </div>
                </div>
            </div>
            <div className="lg:hidden">
                <Image
                    src="/images/imageInfo1.jpg"
                    layout='responsive'
                    width={150}
                    height={100}
                    alt="Imagem ilustrativa"
                />
            </div>
        </div>
    )
}