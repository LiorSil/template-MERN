import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

type Props = {}

const Home = (props: Props) => {
  const { data } = useSelector((state: RootState) => state.temp)
  return (
    <div >Home: {data}</div>

  )
}

export default Home