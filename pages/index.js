import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Smallcard from '../components/Smallcard'

export default function Home({exploreData}) {
  
  
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Server side rendering */}
          {exploreData.map(item => {
            return <Smallcard key={item.img } img={item.img} distance={item.distance} location = {item.location} />
          })}
        </section>
      </main>
    </div>
  )
}


export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then( 
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    }
  }
}