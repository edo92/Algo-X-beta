import React from 'react';
import { Alert, Icon } from 'antd';

const ErrorMessage = props => {
    let message = props.message;

    let styles ={
        alert: { height: '40px' },
        icon: { fontSize:'15px' },
        container: { zIndex: 5, position:'absolute' },
    }

    return(
        <div>
            { message ? 
                <div className='col-12 p-0 px-2' style={ styles.container }>
                    <Alert 
                        type="error" 
                        message={ message } 
                        closeText={ <Icon type="close-circle" style={ styles.icon }/> }
                        style={ styles.alert }/>
                </div> 
            : null } 
        </div>
    )
}

export default ErrorMessage;