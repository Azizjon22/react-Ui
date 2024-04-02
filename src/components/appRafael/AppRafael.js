import React from 'react'


const AppRafael = (props) => {
  console.log(props.src);
  return (
    <div>
         <img src={props.bg} alt='' />
      <div className='backscene'></div>
      <div className='banner'>
        <div className='left'>
          <div className='features'>
            <div className='rating'>
              <span className='score'>{props.cda}</span>
            <div className='content'>
              <span className='subtitle'>{props.lorem}</span>
              <h4>{props.name}</h4>
              <span>{props.kda}</span>
            </div>
            </div>
            <div className='pricing'>
            <ion-icon name="add-outline"></ion-icon>
            <div className='content'>
            <span className='subtitle'>{props.subtitle}</span>
              <h4>{props.subName}</h4>
              <span>{props.subFooter}</span>
            </div>
            </div>
          </div>
          <h1>{props.FirstName}</h1>
        </div>
        <img src={props.image} alt='legnds'/>
        <div className='right'>
          <ul className='description'>
            <li>
              <h4><ion-icon name="checkmark-circle-outline"></ion-icon>{props.description}</h4>
              <p>
                {props.descriptionName}
              </p>
            </li>

            <li>
            <h4><ion-icon name="checkmark-circle-outline"></ion-icon>{props.description}</h4>
              <p>
                {props.descriptionName}
              </p>
            </li>
          </ul>
          <div className='trailer'>
            <h2>{props.gameTrailer}</h2>
            <iframe
             width="892"
             height="502"
             src={props.src}
             title={props.title}
             frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referRerpolicy="strict-origin-when-cross-origin"
             allowFullScreen
                 
                 ></iframe>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppRafael