import Page from '../components/Page'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Contato from '../components/Contato'

export default function Contact() {

  return (
    <Page title="Simule seu plano" description="Todos os planos de saúde Unimed e simulador de planos de saúde online" path="/">
      <Nav />
      <Contato button='simule agora' height='lg:h-screen' display='block' />
      <Footer />
    </Page>
  )
}