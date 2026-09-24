import { AppHeader } from '@conways/drawer'
import './SplashPage.css'

const USES = [
  {
    who: 'Business development & solution architects',
    what: 'Ground a new proposal in work we have actually done: comparable scope, real cost and schedule, and the past performance to cite.',
  },
  {
    who: 'Program managers',
    what: 'Price and plan follow-on work from how the last contract really ran, not from the original bid.',
  },
  {
    who: 'AI',
    what: 'A curated record an assistant can search and cite when it drafts a basis of estimate or a past-performance volume.',
  },
]

export default function SplashPage() {
  return (
    <div className="splash">
      <AppHeader brand={<span className="ch-brand">Capability Models</span>} />
      <div className="splash__content">
        <span className="splash__badge">Not built yet</span>
        <h1>Capability Models</h1>
        <p className="splash__tag">What the organization has shown it can do</p>
        <p>
          When a project closes out, what it proved goes here: the scope it delivered, what that
          actually cost and how long it took, the labor and processes it used, and the lessons it
          left behind. Over time that becomes a model of the organization&rsquo;s capability to
          perform, the most important input to winning the next job.
        </p>
        <ul className="splash__uses">
          {USES.map((u) => (
            <li key={u.who}>
              <strong>{u.who}</strong>
              <span>{u.what}</span>
            </li>
          ))}
        </ul>
        <p className="splash__area">ISO/IEC/IEEE 15288 Organizational Project-Enabling: Knowledge Management (6.2.6)</p>
        <p className="splash__note">
          This is a placeholder page so Conway&rsquo;s Depot&rsquo;s catalog can launch it. The real
          application is still to come.
        </p>
      </div>
    </div>
  )
}
