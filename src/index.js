import React from 'react'
import { render } from 'react-dom'
import data from './data'
import SearchBar from './searchBar'

/**
 * Deseret Book Code Challenge
 *
 * ------------------------------------------
 *
 * Phase 1 - Filterable List
 *
 * Requirements
 * - Display a list of clickable links from the given `data`
 * - Allow users to type in an input to filter the data by the `name` property.
 * - Filter should be case insensitive.
 * - If the input is empty, then all links should be displayed.
 *
 * Bonus Points
 * - Filtering is reusable (works with any set of data and doesn't care how contents are rendered)
 *
 * ------------------------------------------
 *
 * Phase 2 - Pagination (Load More Button)
 *
 * Requirements
 * - Display only 5 items initially
 * - If more items available, show a "Load More button"
 * - Hide "Load More" button once all items have been rendered.
 * - Pagination resets when the dataset changes (when filters change)
 *
 * Bonus Points
 * - Pagination is reusable (works with any set of data and doesn't care how contents are rendered.)
 */

class App extends React.Component {
  constructor(props) {
    super(props)
    this.data = require('./data')
  }

  render() {
    return <SearchBar data={this.data} />
  }
}

render(<App />, document.getElementById('root'))
