import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Pricing from './components/Pricing/Pricing'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Testimonials from './components/Testimonials/Testmonials'

const App = () => {
    return (
        <div>
            <Header />
            <section>
                <Home />
            </section>

            <section>
                <About />
            </section>

            <section>
                <Testimonials />
            </section>

            <section>
                <Pricing />
            </section>

            <section>
                <Contact />
            </section>

            <Footer />
        </div>
    )
}

export default App