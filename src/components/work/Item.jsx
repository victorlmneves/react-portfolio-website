import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './item.scss'

const Item = ({ work, index }) => {
  useEffect(() => {
    setTimeout(() => {
      const lazyloadImages = document.querySelectorAll('.js-lazy')

      if ("IntersectionObserver" in window) {
        setTimeout(() => {  
          const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {

              if (entry.isIntersecting) {
                const image = entry.target
                image.classList.remove('js-lazy')
                image.src = image.getAttribute('data-src')
                image.setAttribute('style', `background-image: url(${image.src})`)
                imageObserver.unobserve(image)
              }
            })
          })

          if (!lazyloadImages) {
            return
          }

          lazyloadImages.forEach(image => {
            imageObserver.observe(image)
          })
        }, 500)
      } else {
        let lazyloadThrottleTimeout
        
        const lazyload = () => {
          if(lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout)
          }    

          lazyloadThrottleTimeout = setTimeout(() => {
            let scrollTop = window.pageYOffset

            lazyloadImages.forEach(image => {
              if (image.offsetTop < (window.innerHeight + scrollTop)) {
                image.src = image.getAttribute('data-src')
                image.setAttribute('style', `background-image: url(${image.src})`)
                image.classList.remove('js-lazy')
              }
            })

            if (lazyloadImages.length == 0) { 
              document.removeEventListener('scroll', lazyload)
              window.removeEventListener('resize', lazyload)
              window.removeEventListener('orientationChange', lazyload)
            }
          }, 20)
        }

        document.addEventListener('scroll', lazyload)
        window.addEventListener('resize', lazyload)
        window.addEventListener('orientationChange', lazyload)
      }
    }, 1500)
  }, [])

  return <div className="item">
    <div className="item__content-wrapper">
      <div className="item__content">
        <h2 className="item__title">
          <Link to={`work/${work.slug}`}>{work.client}</Link>
        </h2>
        <p className="item__info">{work.project}</p>
        <Link className="item__link" to={`work/${work.slug}`}>
          View Project
        </Link>
      </div>
    </div>
    <div className="item__wrapper-img">
      {index === 0 && (
        <div
        className="item__image"
        style={{ 'backgroundImage':`url(YOUR_API_ENDPOINT/${work.image})` }}
      ></div>
      )}
      {index > 0 && (
        <div
          className="js-lazy item__image"
          data-src={`YOUR_API_ENDPOINT/${work.image}`}
        ></div>
      )}
    </div>
  </div>
}

export default Item
