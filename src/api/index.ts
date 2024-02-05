import { JarModel } from '../models/jar'

export const getJarsList = async () => {
  let jarsList = [] as JarModel[]

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/jars`);

    jarsList = (await res.json()) as JarModel[]
  } catch (e) {
    console.error(e)
  }

  return jarsList
}
