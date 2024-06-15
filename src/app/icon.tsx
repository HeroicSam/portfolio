import { ImageResponse } from 'next/og';

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          backgroundColor: '#F1F5F9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          fontWeight: 'bold',
        }}
      >
        CY
      </div>
    ),
    {
      ...size,
    }
  )
}