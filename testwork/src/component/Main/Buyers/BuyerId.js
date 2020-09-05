import React from 'react'

class BuyerId extends React.Component{

    render(){
        return(
            <table className='table'>
            <thead>
                <tr>
                    <th className='col'>ID</th>
                    <th className='col'>Name</th>
                    <th className='col'>Average Check</th>
                    <th className='col'>Number Of Purchases</th>
                    <th className='col'>Total Purchases</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.buyers.filter(buyer => buyer.id === Number(this.props.match.params.id)).map((buyer, index) => {
                            return (
                                <tr key={index}>
                                    <td>{buyer.id}</td>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.check}</td>
                                    <td>{buyer.colBuy}</td>
                                    <td>{buyer.allBuy}</td>
                                </tr>   
                            )
                    })
                } 
            </tbody>
        </table>
        )
    }
}

export default BuyerId