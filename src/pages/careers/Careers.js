import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
  const careers = useLoaderData()

  return (
    <div className="careers">
      {careers.map(career => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader - allows us to not use useEffect hook
export const careersLoader = async () => {
  const res = await fetch('http://localhost:3001/careers')

  if (!res.ok) {
    throw Error('Could not fetch the careers.')
  }

// This returns promise, but react-router resolvers for us automatically apparently
  return res.json()
}