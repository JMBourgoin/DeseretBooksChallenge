import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      limit: 5,
      filteredListLength: 0,
    }
    this.filteredListLength = 0
    this.dataLength = this.props.data.length
    this.filteredList = this.filteredList.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleLoadMore = this.handleLoadMore.bind(this)
  }

  filteredList(search) {
    let filteredList = this.props.data.filter(obj => {
      return (
        obj.name.slice(0, search.length).toUpperCase() === search.toUpperCase()
      )
    })

    if (search.length === 0) {
      filteredList = this.props.data
    }
    this.filteredListLength = filteredList.length
    return filteredList
  }

  checkLoadMore() {}

  handleLoadMore() {
    this.setState({
      limit: this.state.limit + 5,
    })
  }

  handleChange(e) {
    let value = e.target.value
    this.setState({
      value: value,
      limit: 5,
    })
  }

  render() {
    let filteredList = this.filteredList(this.state.value).slice(
      0,
      this.state.limit,
    )
    let list = (
      <ul>
        {filteredList.map(obj => {
          return (
            <li>
              <a href={obj.uri}>{obj.name}</a>
            </li>
          )
        })}
      </ul>
    )
    let button = ''
    if (this.state.limit < this.filteredListLength) {
      button = <button onClick={this.handleLoadMore}>Load More</button>
    }
    return (
      <div>
        <form>
          <label>
            Search:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </form>
        {list}
        {button}
      </div>
    )
  }
}

export default SearchBar
