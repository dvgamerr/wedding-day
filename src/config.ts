import dayjs from 'dayjs'
import 'dayjs/locale/th'

// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'กิ่งกาญจน์ & กัณฑ์อเนก'
export const wedding = {
  title: 'มาร่วมแสดงความยินดีกับเรา!',
  time1: dayjs('2023-03-04T08:00:00.000+0700').locale('th').add(543, 'year'),
  time2: dayjs('2023-03-25T08:00:00.000+0700').locale('th').add(543, 'year'),
}

export const SITE_DESCRIPTION = `${wedding.title} ใน${wedding.time1.format('วันที่ DD MMMM พ.ศ. YYYY')}`

export const themes = [
  { id: 'dark-elegant', number: '01', title: 'Dark Elegant' },
  { id: 'romantic', number: '02', title: 'Romantic' },
  { id: 'natural', number: '03', title: 'Natural' },
  { id: 'classic', number: '04', title: 'Classic' },
]
