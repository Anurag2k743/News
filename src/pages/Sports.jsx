import React, { useEffect, useState } from 'react'
const Sports = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c115346a3ebb416587f546da914a0725');
        const result = await response.json();
        setData(result.articles);
        console.log(result.articles);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    fetchData();

  }, []);


  return (
    <>
      <section>
        <div className="container">
          <div className='grid sm:grid-cols-2 gap-7 md:gap-10 py-3'>
            {data ? (
              data.map((value, index) => {
                const { author, content, description, title, url, urlToImage } = value;
                return (
                  <a href={url}>
                    <div key={index}>
                      <img src={urlToImage} alt="" width="100%" className='max-h-[330px]'/>
                      <h2 className='text-lg md:text-2xl py-2'>{title}</h2>
                      <p className='text-sm md:text-lg'>{description}</p>
                    </div>
                  </a>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Sports

