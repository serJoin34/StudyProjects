import React from 'react'
import './Buyers.css'
import BuyersHeader from './BuyersHeader'
import BuyersNav from './BuyersNav'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
class Buyers extends React.Component{
    constructor(){
        super()
        this.state={
            paginationList: [1],
            currentPagination: 0,
            colPagination: 0
        }
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.previorPages = this.previorPages.bind(this)
        this.nextPages = this.nextPages.bind(this)
        this.setPages = this.setPages.bind(this)
    }


    componentDidUpdate(){
        if(this.props.pages !== this.state.colPagination){
            this.selectPagination()
        }
    }

    selectPagination(){  
        let pagesList = []
        for(let i = 1; i <= Math.ceil(this.props.buyers.length / this.props.pages); i++){
            pagesList.push(i)
        }
        this.setState(() =>({paginationList: pagesList, colPagination: this.props.pages}))

    }

    previorPages(){
        if(this.state.currentPagination > 0){
            this.setState({currentPagination: Number(this.state.currentPagination) - 1})
        }
    }

    nextPages(){
        if(this.state.currentPagination < Math.ceil(this.props.buyers.length / this.props.pages) - 1){
            this.setState({currentPagination: Number(this.state.currentPagination) + 1})
        }
    }

    setPages(e){
        this.setState({currentPagination: Number(e) - 1})
    }

    render(){

        return(
            
            <section>
                <BuyersNav buyers={this.props.buyers} setPagination={this.props.setPagination} sortBuyers={this.props.sortBuyers}/>
                <table className='table'>
                    <BuyersHeader sortBuyers={this.props.sortBuyers}/>
                    <tbody>
                    {
                        
                            this.props.buyers.slice(this.state.currentPagination * this.props.pages, this.state.currentPagination * this.props.pages + this.props.pages).map((buyer,index) => {
                                return(
                                    <tr key={index}>
                                        <td className='col'><Link to={`/buyer/${buyer.id}`}>{buyer.id}</Link></td>
                                        <td className='col'>{buyer.name}</td>
                                        <td className='col'>{buyer.check}</td>
                                        <td className='col'>{buyer.colBuy}</td>
                                        <td className='col'>{buyer.allBuy}</td>
                                    </tr>
                                )                               
                            })
                        
                    }
                    </tbody>
                </table>
                {
                        <ul className='pagination'>
                            <li className="page-item page-link" onClick={this.previorPages}>
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </li>
                            {
                                this.state.paginationList.map((page, index) => {
                                    if(page === this.state.currentPagination + 1){
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
                }
            </section>

        )

        
    }


}

Buyers.propTypes={
    buyers: PropTypes.array.isRequired,
    pages: PropTypes.number.isRequired,
    sortBuyers: PropTypes.func.isRequired
}

export default Buyers