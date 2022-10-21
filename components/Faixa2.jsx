export default function Faixa() {
    return (
        <div className="bg-secondary-50">
            <div className="px-5 md:w-5/6 text-center mx-auto py-8 grid grid-cols-2 gap-x-10">
                <h1 className="text-2xl md:text-4xl text-white col-span-2 md:col-span-1 lg:text-end">Acesse Valores e Rede</h1>
                <div className="col-span-2 md:col-span-1 flex items-center justify-center md:justify-start mt-5 md:mt-0">
                    <a href="./contato" className=" cursor-pointer py-3 px-10 font-medium text-md  bg-orange-500 hover:bg-orange-400 text-white rounded-xl uppercase transition duration-300 ease-in-out">simulador online</a>
                </div>
            </div>
        </div>
    )
}