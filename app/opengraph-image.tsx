import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Muhammad Umair — SaaS, Web, and Mobile App Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0b1220 0%, #132238 55%, #1a2f4a 100%)',
          color: '#f8fafc',
          padding: '64px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: '#94a3b8',
          }}
        >
          Portfolio
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            Muhammad Umair
          </div>
          <div style={{ fontSize: 34, color: '#cbd5e1', maxWidth: 900, lineHeight: 1.3 }}>
            Full-stack engineer building SaaS platforms, web apps, and workflow-heavy products
          </div>
        </div>
        <div style={{ display: 'flex', gap: 24, fontSize: 24, color: '#94a3b8' }}>
          <span>Laravel</span>
          <span>·</span>
          <span>Symfony</span>
          <span>·</span>
          <span>React / Next.js</span>
          <span>·</span>
          <span>Vue</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
