import Image from "next/image";
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

export default function Contato(props) {

    const router = useRouter()

    const sendContact = async data => {

        try {
            await fetch('https://api.grupohp.com.br/send/amil', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            })
            router.push('/send')
        } catch (error) {
            alert('Ocorreu um erro')
        }
    }

    const shape = yup.object().shape({
        nome: yup
            .string()
            .required('O nome é obrigatório'),

        sobrenome: yup
            .string()
            .required('O sobrenome é obrigatório'),

        email: yup
            .string()
            .email('Insira um e-mail válido')
            .required('O e-mail é obrigatório'),

        telefone: yup
            .string()
            .required('Isira um número de contato'),

        cidade: yup
            .string()
            .required('O nome da cidade é obrigatório'),

        tipo: yup
            .string()
            .required('Informe um tipo de plano'),

        forma: yup
            .string()
            .required('Informe a melhor forma de contato'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(shape),
        defaultValues: {
            empresa: 'Unimed',
            imagem: 'Hpcap',
            site: 'https://www.hpcap.com.br/',
        }
    });

    return (
        <div id='contato' className={`p-8 bg-secondary-50 flex items-center ${props.height}`}>
            <div className="mx-auto grid grid-cols-2 lg:w-11/12">
                <div className={`col-span-2 mb-28 text-white text-center ${props.display}`}>
                    <h2 className='text-4xl font-bold mb-5'>Cotação de Planos de Saúde Rio de Janeiro.
                        Preço na Hora!</h2>
                    <p className='text-xl'>Todos os planos de saúde amil e simulador de planos de saúde online</p>
                </div>
                <div className="text-center sm:w-2/3 m-auto col-span-2 lg:col-span-1 text-white">
                    <h2 className='text-4xl font-bold mb-10 '>A Amil tem o plano certo para você viver o seu melhor.</h2>
                    <p className='text-2xl'>Planos com flexibilidade para o cuidado certo</p>
                    <div className='flex place-content-evenly my-10'>
                        <div className='mx-5'>
                            <Image
                                src="/images/amilbranco.png"
                                //layout='responsive'
                                width={150}
                                height={60}
                                alt="Logo da Amil saúde"

                            />
                        </div>
                        <div>
                            <Image
                                src="/images/amildental.png"
                                //layout='responsive'
                                width={150}
                                height={100}
                                alt="Logo da Amil dental"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <h4 className='text-4xl font-bold text-white pb-3 text-center'>Preço Rápido</h4>
                    <p className='text-xl font-bold text-white text-center mb-5'>Estamos dispostos a mostrar os valores dos Planos de Saúde na palma da sua mão em minutos.</p>
                    <form onSubmit={handleSubmit(sendContact)}>

                        <div className="form-group mb-6 grid grid-cols-2 gap-4">

                            <div>
                                <input type="text" className="rounded-xl col-span-2 md:col-span-1 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" {...register('nome')} placeholder="Digite seu nome*" />
                                <p className="text-red-500 ml-3 mt-1">{errors?.nome?.message}</p>
                            </div>

                            <div>
                                <input type="text" className="rounded-xl col-span-2 md:col-span-1 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" {...register('sobrenome')} placeholder="Digite seu sobrenome*" />
                                <p className="text-red-500 ml-3 mt-1">{errors?.sobrenome?.message}</p>
                            </div>
                        </div>


                        <div className="form-group mb-6">
                            <input type="email" className="rounded-xl form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" {...register('email')} placeholder="Digite seu e-mail*" />
                            <p className="text-red-500 ml-3 mt-1">{errors?.email?.message}</p>
                        </div>


                        <div className="grid grid-cols-2 gap-4 form-group mb-6">

                            <div>
                                <input type="text" className="rounded-xl col-span-2 md:col-span-1 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" {...register('telefone')} placeholder="Digite seu principal telefone*" />
                                <p className="text-red-500 ml-3 mt-1">{errors?.telefone?.message}</p>
                            </div>

                            <div>
                                <input type="text" className="rounded-xl col-span-2 md:col-span-1 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" {...register('cidade')} placeholder="Digite a cidade onde mora*" />
                                <p className="text-red-500 ml-3 mt-1">{errors?.cidade?.message}</p>
                            </div>

                        </div>

                        <div className="grid grid-cols-2 gap-4 form-group mb-6">

                            <div className="flex col-span-2 md:col-span-1">
                                <div className="w-full">
                                    <select {...register('tipo')} className="rounded-xl form-select block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-secondary  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" aria-label="Default select example">
                                        <option defaultValue>Tipo de Plano:</option>
                                        <option value="Individual/Adesão">Individual ou adesão</option>
                                        <option value="Familiar">Familiar</option>
                                        <option value="Empresarial">Empresarial</option>
                                        <option value="Odontológico">Odontológico</option>
                                    </select>
                                    <p className="text-red-500 ml-3 mt-1">{errors?.tipo?.message}</p>
                                </div>
                            </div>
                            <div className="flex col-span-2 md:col-span-1">
                                <div className="mb-3 w-full">
                                    <select {...register('forma')} className="rounded-xl form-select block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-secondary  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" aria-label="Default select example">
                                        <option defaultValue>Melhor Forma de Simulação:</option>
                                        <option value="Online">Online</option>
                                        <option value="WhatsApp">WhatsApp</option>
                                        <option value="Telefone">Telefone</option>
                                        <option value="E-mail">E-mail</option>
                                    </select>
                                    <p className="text-red-500 ml-3 mt-1">{errors?.forma?.message}</p>
                                </div>
                            </div>
                        </div>


                        <div className="form-group mb-6">
                            <button type="submit" className="w-full px-6 py-2.5 font-medium text-lg border border-secondary text-white rounded-xl leading-tight uppercase hover:bg-orange-500 hover:border-orange-500 transition duration-300 ease-in-out">{props.button}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}