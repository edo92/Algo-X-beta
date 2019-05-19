import React from 'react';
import { Tag, Icon } from 'antd';

const SortOptions = () => {
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
                    <span className='px-2'>Sort</span>
                </p>
            </li>
            <li className=''>
                <TagBtn
                    style={{border:'1px solid #007bff',color:'#007bff'}}
                    checked={ false }
                >
                    Heigh Prob.
                </TagBtn>
            </li>
            <li className=''>
                <TagBtn
                    style={{border:'1px solid #007bff',color:'#007bff'}}
                    checked={ false }
                >
                    Heigh Fttp.
                </TagBtn>
            </li>
            <li className=''>
                <TagBtn
                    style={{border:'1px solid #007bff',color:'#007bff'}}
                    checked={ false }
                >
                    Heigh Price.
                </TagBtn>
            </li>
        </ul>
    )
}

export default SortOptions;