import React, { useState, useEffect } from 'react'
import Item from './Item'

import { Spinner } from '../../components'

import './list.scss'

const List = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [workList, setWorkList] = useState([])

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch('YOUR_API_ENDPOINT')
      .then((res) => res.json())
      .then(
        (result) => {
          setWorkList(result)
          setIsLoaded(true)
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <Spinner />
  } else {
    return (
      <div className="work-list">
        {workList.map((work, i) => (
          <Item key={i} index={i} work={work} />
        ))}
      </div>
    )
  }
}

export default List
