export class Quote {
  text: string
  author: string
  rank: number

  constructor() {
    this.text = ""
    this.author = ""
    this.rank = 0
  }

  upVote() {
    this.rank ++
  }

  downVote() {
    this.rank --
  }

}
