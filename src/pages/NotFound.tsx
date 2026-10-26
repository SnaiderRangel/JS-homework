import { Link } from 'react-router'

function NotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <Link to="/" className="back-link">
        &larr; Back to all tasks
      </Link>
    </>
  )
}

export default NotFound
