import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Spinner } from '../../components'

import './work.scss'

const work = () => {
  const location = useLocation()
  const slug = location.pathname.split('/')[2]
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [workDetails, setWorkDetails] = useState([])
  let slideIndex = 1

  const showSlides = (n) => {
    let i
    const images = document.querySelectorAll('.work__img')
    const nrOfImages = images.length

    if (n > nrOfImages) {
      slideIndex = 1
    }

    if (n < 1) {
      slideIndex = nrOfImages
    }

    for (i = 0; i < nrOfImages; i++) {
      images[i].style.display = 'none'
    }

    images[slideIndex - 1].style.display = 'block'
  }

  const navSlide = (n) => {
    const newIndex = (slideIndex += n)
    showSlides(newIndex)
  }

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(`YOUR_API_ENDPOINT?slug=${slug}`)
      .then((res) => res.json())
      .then(
        (result) => {
          const workItem = result
          const allImages = workItem.images.split(',')
          workItem.images = allImages

          setWorkDetails(workItem)
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
      <div className="work">
        {workDetails.images.length > 1 && (
          <ul className="work__slideshow">
            <li className="work__nav" onClick={() => navSlide(-1)}>« prev</li>
            <li className="work__nav" onClick={() => navSlide(1)}>next »</li>
          </ul>
        )}
        <div className="work__item">
          <div className="work__img-wrapper">
            {workDetails.images.map((image, i) => (
              <div
                key={i}
                className="work__img"
                style={{ 'backgroundImage': `url(YOUR_API_ENDPOINT/${image})` }}
              ></div>
            ))}
          </div>
          <div className="work__content-wrapper">
            <div className="work__content">
              <h2 className="work__title">{workDetails.client}</h2>
              <p className="work__info">{workDetails.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default work
