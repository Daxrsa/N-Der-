import axios from 'axios'
import React from 'react'
import { AboutUs } from '../app/models/aboutus';


function AboutUs() {
    const [aboutus, setAboutUs] = React.useState<AboutUs[]>([]);

  React.useEffect(() => {
    axios.get('https://localhost:7005/api/AboutUs').then(response => {
        setAboutUs(response.data)
    })
  }, [aboutus.values])
  
  return (
    <div>
      {aboutus.map(aboutus => (
        <h2 key={aboutus.id}>
            {aboutus.title}
            {aboutus.undertitle}
            {aboutus.faq}
            {aboutus.description}
        </h2>
      ))}
    </div>
  )
}

export default AboutUs
