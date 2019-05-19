import React from 'react';
import { Tag, Icon, Badge } from 'antd';

const CombinOptions = () => {
    const { CheckableTag } = Tag;
    const TagBtn = (props) => {
        return(
            <CheckableTag { ...props }/>
        )
    };
    
    return(
        <ul className='row col-12 p-0 m-0'>
            <li className=''>
                <p className='m-0'>
                    <Icon type='more'/>
                    <span className='px-2'>Show</span>
                </p>
            </li>
            <li className=''>
                <TagBtn
                    style={{border:'1px solid rgba(0, 123, 255, 0.41)',color:'#007bff'}}
                    checked={ false }
                >
                    <Badge status='success' />
                    <span>Heigh Prob.</span>
                </TagBtn>
            </li>
            <li className=''>
                <TagBtn
                    style={{border:'1px solid rgba(0, 123, 255, 0.41)',color:'#007bff'}}
                    checked={ false }
                >
                    <Badge status='warning' />
                    <span>Backups</span>
                </TagBtn>
            </li>
            <li className=''>
                <TagBtn
                    style={{border:'1px solid rgba(0, 123, 255, 0.41)',color:'#007bff'}}
                    checked={ false }
                >
                    <Badge status='error' />
                    <span>Cover</span>
                </TagBtn>
            </li>
        </ul>
    )
}

export default CombinOptions;