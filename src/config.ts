import dayjs from 'dayjs'
import 'dayjs/locale/th'

// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_URL = 'https://wedding.dvgamerr.app'
export const SITE_TITLE = 'กิ่งกาญจน์ & กัณฑ์อเนก | Wedding & Pre wedding by MONIQUE'
export const SITE_NAME = 'กิ่งกาญจน์ & กัณฑ์อเนก'

export const wedding = {
  title: 'มาร่วมแสดงความยินดีกับเรา!',
  time1: dayjs('2023-03-04T08:00:00.000+0700').locale('th').add(543, 'year'),
  time2: dayjs('2023-03-25T08:00:00.000+0700').locale('th').add(543, 'year'),
}

export const SITE_DESCRIPTION = `MONIQUE - Beautiful Modern Wedding Website Design | ${wedding.title} ใน${wedding.time1.format('วันที่ DD MMMM พ.ศ. YYYY')} | Elegant Wedding Invitation Website with Interactive Gallery, RSVP, and Modern Features by MONIQUE`

export const SITE_KEYWORDS = [
  'MONIQUE',
  'MONIQUE Wedding',
  'wedding website design',
  'wedding invitation website',
  'modern wedding website',
  'elegant wedding template',
  'wedding website builder',
  'custom wedding site',
  'wedding gallery design',
  'digital wedding invitation',
  'responsive wedding website',
  'beautiful wedding design',
  'wedding website ideas',
  'online wedding invitation',
  'interactive wedding website',
  'wedding RSVP website',
  'pre wedding website',
  'Thailand wedding website',
  'กิ่งกาญจน์ กัณฑ์อเนก',
]

export const SITE_IMAGE = '/kk_00185-social.png'
export const SITE_AUTHOR = 'กิ่งกาญจน์ & กัณฑ์อเนก'
export const SITE_LANGUAGE = 'th'

export const themes = [
  { id: 'dark-elegant', number: '01', title: 'Dark Elegant' },
  { id: 'romantic', number: '02', title: 'Romantic' },
  { id: 'natural', number: '03', title: 'Natural' },
  { id: 'classic', number: '04', title: 'Classic' },
]
