class Food {
  id: number
  category: string
  image: string
  title: string
  assessment: string
  description: string
  button: string

  constructor(
    id: number,
    category: string,
    image: string,
    title: string,
    assessment: string,
    description: string,
    button: string
  ) {
    this.id = id
    this.category = category
    this.image = image
    this.title = title
    this.assessment = assessment
    this.description = description
    this.button = button
  }
}

export default Food
