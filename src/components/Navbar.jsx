import './Navbar.css'

const host = window.location.hostname
const isDemo  = host.startsWith('demo.')
const isStore = host.startsWith('store.')
const isHome  = !isDemo && !isStore

const LINKS = [
  { href: 'https://compatai.lat',        label: 'Home',        active: isHome  }
]

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">

        <a href="https://compatai.lat" className="nav-logo" aria-label="compaTAI home">
          <img
            src="/assets/logo/compaTAI_logo_75x75.png"
            alt="compaTAI"
          />
        </a>

        <ul className="nav-links">
          {LINKS.map(({ href, label, active }) => (
            <li key={href}>
              <a
                href={href}
                className={active ? 'nav-link nav-link--active' : 'nav-link'}
              >
                {label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="mailto:social.media@compatai.lat"
              className="nav-link nav-cta"
            >
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  )
}
