import Faixa1 from '../components/Faixa1'
import Faixa2 from '../components/Faixa2'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Info1 from '../components/Info1'
import Cards from '../components/Cards'
import Info2 from '../components/Info2'
import Info3 from '../components/Info3'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Faixa1 />
      <Info1 />
      <Cards />
      <Info2 />
      <Faixa2 />
      <Info3 />
      <Footer />
    </>
  )
}
