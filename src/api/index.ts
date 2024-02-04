import { JarModel } from '../models/jar'

export const getJarsList = async () => {
  let jarsList = [] as JarModel[]

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/jars`);
    console.log(await res.text());
    

    jarsList = (await res.json()) as JarModel[]
  } catch (e) {
    console.error(e)
  }

  return jarsList
}
