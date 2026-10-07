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
          background: 'linear-gradient(145deg, #070b14 0%, #0d1322 48%, #12203a 100%)',
          color: '#e8eef8',
          padding: '64px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: '#6b8cff',
          }}
        >
          Portfolio
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            Muhammad Umair
          </div>
          <div style={{ fontSize: 34, color: '#b7c4de', maxWidth: 920, lineHeight: 1.3 }}>
            Full-stack engineer building SaaS platforms, web apps, and workflow-heavy products
          </div>
        </div>
        <div style={{ display: 'flex', gap: 24, fontSize: 24, color: '#7a8aad' }}>
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
