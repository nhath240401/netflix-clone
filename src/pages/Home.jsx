import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Row from '../components/Row'
import requests from '../Request'

const HomeScreen = () => {
  return (
    <div className='bg-[#111]'>
        <Navbar />
        
        <Banner />

        <Row
         title='NETFLIX ORIGINALS'
         fetchUrl = {requests.fetchNetflixOriginals}
         isLargeRow
        />

        <Row
         title='Trending Now'
         fetchUrl = {requests.fetchTrending}
         isLargeRow
        />

        <Row
         title='Top Rerated'
         fetchUrl = {requests.fetchTopRated}
         isLargeRow
        />

        <Row
         title='Comedy Movies'
         fetchUrl = {requests.fetchComedyMovies}
         isLargeRow
        />

        <Row
         title='Horror Movies'
         fetchUrl = {requests.fetchHorrorMovies}
         isLargeRow
        />

        <Row
         title='Romance Movies'
         fetchUrl = {requests.fetchRomanceMovies}
         isLargeRow
        />

        <Row
         title='Documentaries'
         fetchUrl = {requests.fetchDocumentaries}
         isLargeRow
        />
    </div>
  )
}

export default HomeScreen