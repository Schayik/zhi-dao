import slugifyNPM from 'slugify'

export const slugify = title => {
  return slugifyNPM(title, {
    lower: true,
  })
}