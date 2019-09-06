import React ,{Component} from 'react';
import { connect } from 'dva';

// import styles from './Weather.less'
class Weather extends Component {
    state = {
       
    };
    //https://www.tianqiapi.com/api/
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'weather/queryList',
        });
    }


    render() {
        let {city,data} = this.props.weather;
        data = data || [];
        var arr = data.map( (item,i) => {
            return (<li key ={i} >
                <span>{item.day}</span>
                <span>{item.date}</span>
                <span>{item.week}</span>
                <span>{item.wea}</span>
            </li>)
        })
        return (<div>
            <p>{city}</p>
            <ul>
                {arr}
            </ul>
            </div>
        );
    }
}

export default connect((state) => 
    {   
        // debugger
        const { weather} = state;
        return {
            weather,
        }
    })(Weather);