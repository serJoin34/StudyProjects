import React from 'react'
import './Buyers.css'
import BuyersHeader from './BuyersHeader'
import BuyersNav from './BuyersNav'
import Pagination from './Pagination'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
class Buyers extends React.Component{
    render(){
        return(
            <section>
                <BuyersNav buyers={this.props.buyers} setPagination={this.props.setPagination} sortBuyers={this.props.sortBuyers}/>
                <table className='table'>
                    <BuyersHeader sortBuyers={this.props.sortBuyers}/>
                    <tbody>
                    {
                            this.props.buyers.slice(this.props.pages.colItems * this.props.pages.currentPages, this.props.pages.colItems * this.props.pages.currentPages + this.props.pages.colItems)
                            .map((buyer,index) => {
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
                    this.props.pages.colItems !== this.props.buyers.length ?
                        <Pagination buyers={this.props.buyers} pages={this.props.pages} setPagination={this.props.setPagination}/>
                    : null
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