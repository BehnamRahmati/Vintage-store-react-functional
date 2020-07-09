
export const featuredProduct = (data) => {
  return data.filter(item => item.featured === true)
}