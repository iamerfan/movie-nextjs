import axios from 'axios'
import Carousel from 'components/HomePage/Carousel'
import HomeCarousel from 'components/HomePage/HomeCarousel'
import Switch from 'components/HomePage/Switch'

import { server } from 'libs/config'
export default function Home({ data }) {
   console.log(data[0])
   return (
      <div className='HomePage'>
         <HomeCarousel data={data[0]} />
         <Switch />
         <Carousel data={data[1]} name='Trending' id='#Trending' />
         <Carousel data={data[2]} name='Upcoming' />
         <Carousel data={data[3]} name='Top Rated' />
      </div>
   )
}
export const getServerSideProps = async req => {
   const { type } = req.query
   const data = await axios.get(`${server}/api/home?${type ? `type=${type}` : null}`).then(res => {
      return res.data
   })
   return { props: { data } }
}
