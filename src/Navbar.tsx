import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex'>
        <Link to="/">View</Link>
        <Link to="/create-order">Create Order</Link>
    </div>
  )
}
