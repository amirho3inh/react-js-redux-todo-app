import React from "react"
import { connect } from "react-redux"

import { toggleTodo } from "../redux/actions"

const Todo = (props) => {
    return (
        <React.Fragment>
            <li onClick={() => props.toggleTodo(props.row.id)}>
                {props.row && props.row.complete ? <span style={{color: 'green'}}>Done</span> : <span style={{color: 'red'}}>No Done</span>}
                - {props.row.content}
            </li>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: id => dispatch(toggleTodo(id))
    }
}

export default connect(null, mapDispatchToProps)(Todo)