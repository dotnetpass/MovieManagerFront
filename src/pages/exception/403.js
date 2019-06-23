import React from 'react';
import { Empty, Button } from 'antd';
import router from 'umi/router';
import {connect} from 'dva';
import withRouter from "umi/withRouter";

const Exception404 = () => (
    <div>
        <div style={{height: 80, marginBottom: 40, background: 'black'}}></div>
        <Empty
            description="您尚未登录或登录信息已失效"
        >
            <Button type="primary" onClick={()=>router.replace('/login')}>登录</Button>
        </Empty>
    </div>
);

export default Exception404;
