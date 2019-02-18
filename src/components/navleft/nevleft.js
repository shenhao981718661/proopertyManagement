import React from 'react'
import './navleft.less'

class Navleft extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div>
                <div className='headerTitle'>东通物业管理系统</div>
            </div>
        )
    }
}
export default Navleft