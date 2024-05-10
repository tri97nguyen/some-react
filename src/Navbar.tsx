import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <ul>
            <li><Link to="/">View</Link></li>
            <li><Link to="/create-order">Create Order</Link></li>
        </ul>
    </>
  )
}
