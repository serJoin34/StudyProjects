import React from 'react'
import PropTypes from 'prop-types'
class Pagination extends React.Component{

    constructor(){
        super()
        this.state={
            paginationList: [1],
            colPagination: 0
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.previorPages = this.previorPages.bind(this)
        this.nextPages = this.nextPages.bind(this)
        this.setPages = this.setPages.bind(this)
    }

    componentDidMount(){
        this.selectPagination()
    }

    componentDidUpdate(){
        if(this.props.pages.colPages !== this.state.colPagination){
            this.selectPagination()
        }
    }

    selectPagination(){  
        let pagesList = []
        for(let i = 1; i <= this.props.pages.colPages; i++){
            pagesList.push(i)
        }
        this.setState(() =>({paginationList: pagesList, colPagination: this.props.pages.colPages}))

    }

    previorPages(){
        if(this.props.pages.currentPages > 0){
            this.props.setPagination(this.props.pages.colItems, this.props.pages.currentPages - 1)
        }
    }

    nextPages(){
        if(this.props.pages.currentPages < this.props.pages.colPages - 1){
            this.props.setPagination(this.props.pages.colItems, this.props.pages.currentPages + 1)
        }
    }

    setPages(e){
        this.props.setPagination(this.props.pages.colItems, Number(e) - 1)
    }

    render(){
        return(
            <ul className='pagination'>
                <li className="page-item page-link" onClick={this.previorPages}>
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                </li>
                {
                    this.state.paginationList.map((page, index) => {
                        if(index === this.props.pages.currentPages){
                            return(
                                <li className="page-item page-link bg-primary" style={{'color' : 'white'}} key={index} onClick={() => this.setPages(page)}>{page}</li>
                            )
                        }
                        else{
                            return(
                                <li className="page-item page-link" key={index} onClick={() => this.setPages(page)}>{page}</li>
                            )
                        }
                    })
                }
                    <li className="page-item page-link" onClick={this.nextPages}>
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </li>
            </ul>
        )
    }
}

Pagination.propTypes={
    setPagination: PropTypes.func.isRequired
}

export default Pagination