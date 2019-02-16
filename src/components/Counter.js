import React from "react";
import PropTypes from "prop-types";
import './Counter.css';

const Counter = ({number,color,onIncrement,onDecrement,onSetColor}) =>{
    return (
       <div 
        className="Counter"
        onClick={onIncrement}
        //onContextMenu란 마우스 오른쪽 버튼을 눌렀을 때 메뉴가 열리는 이벤트를 의미한다.
        onContextMenu={(e)=>{
            e.preventDefault(); //메뉴가 열리는 것을 방지한다.
            onDecrement();        
        }}
        onDoubleClick={onSetColor}
        style={{
            backgroundColor:color
        }}>
        {number}
        </div>
    );
};

//propTypes를 지정해준다.
Counter.propTypes = {
    number:PropTypes.number,
    color:PropTypes.string,
    onIncrement:PropTypes.func,
    onDecrement:PropTypes.func,
    onSetColor:PropTypes.func
};

Counter.defaultProps = {
    number:0,
    color:'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;