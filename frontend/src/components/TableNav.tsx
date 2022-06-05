import React from 'react';


class TableNav extends React.Component<{
	onPageSizeSet :  (page: number) => void,
  onPageSet :  (page: number) => void,
  pages : number,
  currentPage : number
},{}> {
  
  updataPageSize = (e : any) => {
  	this.props.onPageSizeSet(
      parseInt(e.target.value) 
    )
  }

  prevPage = () => {
    const next = this.props.currentPage - 1
    this.props.onPageSet(next)
  }

  nextPage = () => {
    const next = this.props.currentPage + 1
    this.props.onPageSet(next)
  }

  firstPäge = () => {
    const next = 0
    this.props.onPageSet(next)
  }
  
  render(){

    let properPage = this.props.currentPage + 1
  	//format date data
    return (
	    <div className="footer">
	    	<label>ITEMS PER PAGE  : </label><select aria-label="page-count" onChange={this.updataPageSize}>
          <option>20</option>
          <option>50</option>
          <option>100</option>
	    	</select>
        <button onClick={this.firstPäge}  disabled={this.props.currentPage === 0} >First page</button>
		  	<button onClick={this.prevPage} aria-label="prev-button" disabled={this.props.currentPage === 0}>Previous</button>
        <b>{properPage} / {this.props.pages}</b>
        <button onClick={this.nextPage}  disabled={ properPage === this.props.pages}>Next</button>
	    </div>
     )
  }
}

export default TableNav;
