
export async function getLibros() {
  const res = await fetch(`${ process.env.API_URL }/libraries?populate=*`)

  if( !res.ok ){
    throw new Error('Oops, something went wrong :/')
  }
  const { data } = await res.json()

  const mappedData = data?.map(({ id, attributes }) => {
    const { titulo, precio, descripcion, cover } = attributes;
    const { url: imagen } = cover.data.attributes.formats.medium

    return { id, titulo, precio, descripcion, imagen }
  })
  
  return mappedData
}

  ////////////////////////////////////////////////////////////
  

export async function getDataArg() {
  const res = await fetch(`${ process.env.API_URL }/argentinas?populate[imagenes][fields][0]=url&populate[imagenes][fields][1]=caption`)

  if(!res.ok) {
    throw new Error('Oops, something went wrong :/')
  }
  const { data } = await res.json();

  const mappedData = data?.map(({ id, attributes }) => {
    const { dia, descripcion, imagenes } = attributes;

    const mappedImg = imagenes.data.map(({ id, attributes }) => {
      const { url: imagen, caption } = attributes;
      
      return { id, imagen, caption }
    })

    return { id, dia, descripcion, mappedImg }
  })

  const sortedMappedData = mappedData.sort((a, b) => (a.id) - (b.id));

  return sortedMappedData
}

////////////////////////////////////////////////////////////


export async function getBLogIntro() {
  const res = await fetch(`${ process.env.API_URL }/intro-blogmes`)

  if( !res.ok ) {
    throw new Error('Oops, something went wrong :/')
  }
  const { data } = await res.json();

  const mappedData = data.map(({ id, attributes }) => {
    const { fecha, titulo, descripcion } = attributes;

    return { id, fecha, titulo, descripcion }
  })

  return mappedData
}

////////////////////////////////////////////////////////////

export async function getDataCentro() {
  const res = await fetch(`${ process.env.API_URL }/centroamericas?populate=*`)
  if( !res.ok ) {
      throw new Error('Oops, something went wrong :/')
  }
  const { data } = await res.json()

  const mappedData = data.map(({ id, attributes }) => {
      
      const { fecha, pais, descripcion, imagenes } = attributes;
      
      const imagesData = imagenes.data.map(({ id, attributes }) => {
          const { caption, url: imagen } = attributes;

          return { id, caption, imagen }
      })

      return { id, fecha, pais, descripcion, imagesData }
  })
  
  const sortedData = mappedData.sort((a, b) => (a.id) - (b.id));
  
  return sortedData
}
