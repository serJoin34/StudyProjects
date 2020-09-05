import React from 'react'


class BuyersHeader extends React.Component{
    constructor(){
        super()
        this.state={
            columnSorted: null
        }
        this.handlerSorted = this.handlerSorted.bind(this)
    }


    handlerSorted(n){
        let th = document.getElementsByTagName('th')
        for(let i = 0; i < th.length; i++){
            if(i === n){
                if(th[i].className === 'col bg-success'){
                    th[i].className = 'col bg-primary'
                    this.props.sortBuyers(false, th[i].getAttribute('data-status'))
                }
                else if (th[i].className === 'col bg-primary' || th[i].className === 'col'){
                    th[i].className = 'col bg-success'
                    this.props.sortBuyers(true, th[i].getAttribute('data-status'))
                }
                th[i].style.borderRadius = 50 + 'px'
                th[i].style.color = 'white'
            }
            else{
                th[i].className = 'col'
                th[i].style.color = 'black'
            }
        }
    }

    render(){
        return(
            <thead>
                <tr>
                    <th className='col' data-status='id' onClick={() => this.handlerSorted(0)}>ID</th>
                    <th className='col'>Name</th>
                    <th className='col' data-status='check' onClick={() => this.handlerSorted(2)}>Average Check</th>
                    <th className='col' data-status='colBuy' onClick={() => this.handlerSorted(3)}>Number Of Purchases</th>
                    <th className='col' data-status='allBuy' onClick={() => this.handlerSorted(4)}>Total Purchases</th>
                </tr>
            </thead>
        )
    }
}

export default BuyersHeader