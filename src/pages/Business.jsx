
import React, { useEffect, useState } from 'react'

const Business = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2025-07-01&to=2025-07-01&sortBy=popularity&apiKey=c115346a3ebb416587f546da914a0725');
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
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 py-3'>
            {data ? (
              data.map((value, index) => {
                const { author, content, description, title, url, urlToImage } = value;
                return (
                  <a href={url}>
                    <div key={index}>
                        <img src={urlToImage} alt="" width="100%" className='max-h-[330px]' />
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

export default Business


